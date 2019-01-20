import Educator from '../Domain/Users/Educator';
import Student from '../Domain/Users/Student';
import Subscription from '../Domain/Users/SubscriptionStatus';
import ProgrammingLanguage from '../Domain/ProgrammingLanguages/PLItem';
import Tutorial from '../Domain/Tutorials/Tutorial';
import { postgresDatabase } from '../../connectors';
import * as programmingLanguagesDbFiles from '../../connectors/dbImports/plDb';
import * as educatorDbFiles from '../../connectors/dbImports/educatorDb';
import * as studentDbFiles from '../../connectors/dbImports/studentDb';
import * as tutorialDbFiles from '../../connectors/dbImports/tutorialDb';

export default class Context {
    educators(){
        return postgresDatabase.manyOrNone(educatorDbFiles.getEducators).then(res => {
            return res;
        });
    }

    educator(id?: Number, displayName?: string) {
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

    students() {
        return postgresDatabase.manyOrNone(studentDbFiles.getStudents).then(res => {
            return res;
        });
    }

    student(id?: Number, displayName?: string) {
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
    programmingLanguages() {
        return postgresDatabase.manyOrNone(programmingLanguagesDbFiles.getProgrammingLanguages);
    }

    tutorials() {  
        return postgresDatabase.manyOrNone(tutorialDbFiles.getTutorials).then(res => {
            return res;
        });
    }

    tutorial(id: Number) {
        return postgresDatabase.manyOrNone(tutorialDbFiles.getTutorial, id).then(res => {
            return res;
        })
    }
}
