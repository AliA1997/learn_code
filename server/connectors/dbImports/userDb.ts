import load, { getPath } from '../loadSql';
import * as path from 'path';

const basePath = getPath(__dirname, null);


export function register(thirdParty: boolean, isStudent: boolean): any {
  
    if(thirdParty && isStudent) {
        
        return load(path.join(basePath, '/db/student/registerStudentThirdParty.sql'));
    
    } else if(thirdParty && !isStudent) {

        return load(path.join(basePath, '/db/educator/registerEducatorThirdParty.sql'));
        
    } else if(!thirdParty && isStudent) {
        
        return load(path.join(basePath, '/db/student/registerStudent.sql'));
        
    } else if(!thirdParty && !isStudent) {
        
        return load(path.join(basePath, '/db/educator/registerEducator.sql'));
    
    }

}

export const getUsers = load(path.join(basePath, '/db/user/getUsers.sql'));