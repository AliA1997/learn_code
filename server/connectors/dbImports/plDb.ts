import load, { getPath } from '../loadSql';
import * as path from 'path';

const basePath = getPath(__dirname, null);

//Then join the basePath with the database file's location.
export const getProgrammingLanguages = load(path.join(basePath, "/db/pl/getProgrammingLanguages.sql"));

