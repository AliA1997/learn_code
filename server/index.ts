import "reflect-metadata";
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as massive from 'massive';
import { ApolloServer } from 'apollo-server-express';
import { ApolloEngine } from 'apollo-engine';
import { buildSchema } from 'type-graphql';
import EducatorResolver from './resolvers/educators.resolver';
import ProgrammingLanguageResolver from './resolvers/plitems.resolver';
import Context from './classes/Data/context';
import PLService from './classes/Services/PLItems/PLService';
import PLRepository from './classes/Data/Repositories/PLItems/PLRepository';
import StudentResolver from './resolvers/students.resolver';
import TutorialResolver from './resolvers/tutorial.resolver';

dotenv.config();

(async function init() {
    //Schema created via resolvers.
    const schema = await buildSchema({
        resolvers: [ProgrammingLanguageResolver , StudentResolver, EducatorResolver, TutorialResolver]
    });

    const app = express();

    //postgres://lkqqfuelqtutrz:7522c9b70bff699a79bc75fd66436b6795b3e2bd772f87c07199daa2d4b6f6e1@ec2-54-225-89-195.compute-1.amazonaws.com:5432/d8kui51bvvjtqk?ssl=true
    const connectionString: String = process.env.CONNECTION_STRING;

    massive(connectionString).then(database => {
        app.set('db', database);
    })
    .catch(err => console.log('Database Error--------', err));



    const server = new ApolloServer({
        schema, 
        tracing: true,
        cacheControl: true, 
        engine: false
    });

    server.applyMiddleware({app});


    const port = 4000;
    const graphqlEndpoint = '/graphql';

    const engine = new ApolloEngine({
        apiKey: process.env.ENGINE_API_KEY
    });

    engine
    .listen({
        port,
        expressApp: app,
        graphqlPaths: [graphqlEndpoint]
    },
    () => console.log(`Server listening on port:${port}.`)
    )
})();
