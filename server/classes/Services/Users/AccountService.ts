import IAccountService from './IAccountService';
import Educator from '../../Domain/Users/Educator';
import Student from '../../Domain/Users/Student';
import PasswordHasher from '../../Domain/Users/PasswordHasher';
import UserRepository from '../../Data/Repositories/Users/UserRepository';

export default class AccountService implements IAccountService {
    constructor() {
        this.userRepository = new UserRepository();
        this.passwordHasher = new PasswordHasher();
    }
    passwordHasher: PasswordHasher;
    userRepository: UserRepository;

    loginStudent(displayName: string, password: string){
        const studentInfo: Promise<Student> = this.userRepository.getStudentInfo(displayName);

        let studentResult: boolean;
        
        return studentInfo.then(result => {
        
            studentResult = this.passwordHasher.verifyPassword(password, `${result.password}`);
        
            if(studentResult) {
               
                // this.userRepository.loginStudent(studentInfo);
                return studentInfo;
            
            }
        
            return null;
        });        
    }

    loginEducator(displayName: string, password: string){
        const educatorInfo: Promise<Educator> = this.userRepository.getEducatorInfo(displayName);
        
        let educatorResult: boolean;

        return educatorInfo.then(result => {
            educatorResult =  this.passwordHasher.verifyPassword(password, `${result.password}`);

            if(educatorResult) {
        
                // this.userRepository.loginEducator(educatorInfo);
                return educatorInfo;
        
            }
            return null;
        });
    }

    

}