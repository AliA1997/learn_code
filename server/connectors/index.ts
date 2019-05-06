require('dotenv').config();
import * as pgPromise from 'pg-promise';

const jwt = require('jsonwebtoken');
//Define your instance of your pgPromise which would not contain any options
const pgP = pgPromise({});

//NOw connect your pgPromise instance to your database.
export const postgresDatabase = pgP(process.env.CONNECTION_STRING);

// export async function context(headers: any, secrets: any) {
//     return {
//         headers, 
//         secrets,
//         postgresDatabase
//     };
// }

// export async function getUser(authorization: any, secrets: any, database: any) {
//     //Const bearer length for authorization.
//     const bearerLength: Number = "Bearer ".length;
//     if(authorization && authorization.lenght > bearerLength) {
//         const token = authorization.slice(bearerLength);
//         const { ok, result } = await new Promise(resolve => {
//             jwt.verify(token, secrets.JWT_TOKEN, function(error, result) {
//                 if(error) {
//                     resolve({
//                         ok: false,
//                         result: error
//                     });
//                 }

//                 resolve({
//                     ok: true,
//                     result
//                 })
//             });
//         });
//         if(ok) {
//             // const user = await p
//         }
//     }
// }