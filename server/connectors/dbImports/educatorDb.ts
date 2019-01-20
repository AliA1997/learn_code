import load, { getPath } from '../loadSql';
import * as path from 'path';

const basePath = getPath(__dirname, null);

export const getEducators = load(path.join(basePath, "/db/educator/getEducators.sql")); 

export const getEducator = load(path.join(basePath, '/db/educator/getEducator.sql'));

export const getEducatorInfo = load(path.join(basePath, '/db/educator/getEducatorInfo.sql'));
