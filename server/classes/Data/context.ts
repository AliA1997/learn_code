import Educator from '../Domain/Users/Educator';
import Student from '../Domain/Users/Student';
import Subscription from '../Domain/Users/SubscriptionStatus';
import ProgrammingLanguage from '../Domain/ProgrammingLanguages/PLItem';
import Tutorial from '../Domain/Tutorials/Tutorial';
import { postgresDatabase } from '../../connectors';
import * as programmingLanguagesDbFiles from '../../connectors/dbImports/plDb';
import * as educatorDbFiles from '../../connectors/dbImports/educatorDb';
import * as studentDbFiles from '../../connectors/dbImports/studentDb';
import * as userDbFiles from '../../connectors/dbImports/userDb';
import * as tutorialDbFiles from '../../connectors/dbImports/tutorialDb';
import LearnCodeUser from '../Domain/LearnCodeUser';

export default class Context {

    user(userToRegister?: LearnCodeUser, thirdParty?: boolean, isStudent?: boolean): Promise<any> {
        console.log('thirdParty----------', thirdParty);
        console.log('isStudent--------------', isStudent);
        console.log('userToRegister---------', userToRegister);

        return postgresDatabase.manyOrNone(userDbFiles.register(thirdParty, isStudent), userToRegister)
                .then(res => {
                    console.log('res-------------', res);
                    return res;
                })
                .catch(error => {
                    return error;
                })
    }

    users(): Promise<any[]> {

        return postgresDatabase.manyOrNone(userDbFiles.getUsers)
        .then(res => {
            return res;
        })
        .catch(error => {
            return error;
        })

    }

    educators(): Promise<any[]> {

        return postgresDatabase.manyOrNone(educatorDbFiles.getEducators)
                .then(res => {
                    res => res.map(educator => {
                        return educator;
                    })
                    return res;
                })
                .catch(error => {
                    return error;
                });

    }

    educator(id?: Number, displayName?: String): Promise<any> {
        if(id) 
            return postgresDatabase.manyOrNone(educatorDbFiles.getEducator, id).then(res => {
                console.log('hit if statement--------');
                return res;
            });
        else if(displayName)
            return postgresDatabase.manyOrNone(educatorDbFiles.getEducatorInfo, displayName).then(res => {
                return res;
            });
    }

    students(): Promise<any[]> {
        return postgresDatabase.manyOrNone(studentDbFiles.getStudents).then(res => {
            return res;
        });
    }

    student(id?: Number, displayName?: String): Promise<any> {
        if(id)
            return postgresDatabase.manyOrNone(studentDbFiles.getStudent, id).then(res => {
                return res;
            });
        else if(displayName)
            return postgresDatabase.manyOrNone(studentDbFiles.getStudentInfo, displayName).then(res => {
                return res;
            });
    }

    subscriptions() {
        
    }
    programmingLanguages(): Promise<any[]> {
        return postgresDatabase.manyOrNone(programmingLanguagesDbFiles.getProgrammingLanguages);
    }

    tutorials(): Promise<any[]> {  
        return postgresDatabase.manyOrNone(tutorialDbFiles.getTutorials).then(res => {
            return res;
        });
    }

    tutorial(id: Number): Promise<any> {
        return postgresDatabase.manyOrNone(tutorialDbFiles.getTutorial, id).then(res => {
            return res;
        })
    }
}
