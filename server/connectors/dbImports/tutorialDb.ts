import load, { getPath } from '../loadSql';
import * as path from 'path';

const basePath = getPath(__dirname, null);

export const getTutorials = load(path.join(basePath, "/db/tutorial/getTutorials.sql")); 

export const getTutorial = load(path.join(basePath, '/db/tutorial/getTutorial.sql'));