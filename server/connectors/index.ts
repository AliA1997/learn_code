require('dotenv').config();
import * as pgPromise from 'pg-promise';

//Define your instance of your pgPromise which would not contain any options
const pgP = pgPromise({});

//NOw connect your pgPromise instance to your database.
export const postgresDatabase = pgP(process.env.CONNECTION_STRING);

