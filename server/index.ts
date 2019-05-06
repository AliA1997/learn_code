import "reflect-metadata";
import * as dotenv from 'dotenv';
import * as express from 'express';
// import * as session from 'express-session';
// import * as pgSession from 'connect-pg-simple';
import * as massive from 'massive';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as path from 'path';
import { ApolloServer } from 'apollo-server-express';
import { ApolloEngine } from 'apollo-engine';
import { buildSchema, AuthChecker } from 'type-graphql';
import { postgresDatabase } from './connectors/index';
import EducatorResolver from './resolvers/educators.resolver';
import ProgrammingLanguageResolver from './resolvers/plitems.resolver';
import StudentResolver from './resolvers/students.resolver';
import TutorialResolver from './resolvers/tutorial.resolver';
import UserResolver from './resolvers/user.resolver';
//Middlewares
import { AuthContext } from './middlewares/auth.context';
import { authChecker } from './middlewares/authChecker';


dotenv.config();

(async function init() {
    const session = require('express-session');
    const pgSession = require('connect-pg-simple')(session);
    
    //Define your session initialized.
    const initializedSession = session({
        store: session && new pgSession({
            conString: process.env.CONNECTION_STRING
        }),
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 14
        }
    });

    //Schema created via resolvers.
    const schema = await buildSchema({
        //No authorization erorr messages.
        authMode: 'null',
        resolvers: [ProgrammingLanguageResolver , StudentResolver, EducatorResolver, TutorialResolver, UserResolver],
        authChecker: authChecker,
        emitSchemaFile: path.resolve(__dirname, './resultSchema.gql')
    });


    const app = express();

    //postgres://lkqqfuelqtutrz:7522c9b70bff699a79bc75fd66436b6795b3e2bd772f87c07199daa2d4b6f6e1@ec2-54-225-89-195.compute-1.amazonaws.com:5432/d8kui51bvvjtqk?ssl=true
    const connectionString: String = process.env.CONNECTION_STRING;

    massive(connectionString).then(database => {
        app.set('db', database);
    })
    .catch(err => console.log('Database Error--------', err));

    app.use(bodyParser.json());

    app.use('*', cors({ 
        origin: ['http://172.27.32.45:8081', 'http://localhost:8081/graphql', 'http://172.27.32.45:8081/graphql', 'http://localhost:8081', 'http://10.0.2.2:8081/graphql', 'http://10.0.2.2:8081'],
        }));

    app.use(initializedSession);

    const server = new ApolloServer({
        schema, 
        context: (req, res) => {
            const ctx: AuthContext = {
              // create mocked user in context
              // in real app you would be mapping user from `req.user` or sth
              user: req.user
            };
            return {
                user: ctx.user
            }
        },
        tracing: true,
        cacheControl: true,
        playground: true, 
        engine: false
    });


    const port = 4000;
    const graphqlEndpoint = '/graphql';
    
    
    server.applyMiddleware({app: app});

    server.setGraphQLPath(graphqlEndpoint);

    
    // app.listen(3500, () => console.log(`Listening on port:3500`));

    const engine = new ApolloEngine({
        apiKey: process.env.ENGINE_API_KEY
    });

    engine
    .listen({
        port,
        expressApp: app,
        graphqlPaths: [graphqlEndpoint],
        launcherOptions: {
            startupTimeout: 3000
        }
    },
    () => console.log(`Server listening on port:${port}.`)
    );

})();
