import load, { getPath } from '../loadSql';
import * as path from 'path';

const basePath = getPath(__dirname, null);

export const getStudents = load(path.join(basePath, "/db/student/getStudents.sql")); 

export const getStudent = load(path.join(basePath, '/db/student/getStudent.sql'));

export const getStudentInfo = load(path.join(basePath, '/db/student/getStudentInfo.sql'));

