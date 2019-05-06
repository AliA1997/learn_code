import IAccountService from './IAccountService';
import Educator from '../../Domain/Users/Educator';
import Student from '../../Domain/Users/Student';
import PasswordHasher from '../../Domain/Users/PasswordHasher';
import UserRepository from '../../Data/Repositories/Users/UserRepository';
import LearnCodeUser from '../../Domain/LearnCodeUser';
import EducatorRepository from '../../Data/Repositories/Educators/EducatorRepository';
import StudentRepository from '../../Data/Repositories/Students/StudentRepository';

export default class AccountService implements IAccountService {
    constructor() {
        this.userRepository = new UserRepository();
        this.educatorRepository = new EducatorRepository();
        this.studentRepository = new StudentRepository();
        this.passwordHasher = new PasswordHasher();
    }

    passwordHasher: PasswordHasher;
    userRepository: UserRepository;
    educatorRepository: EducatorRepository;
    studentRepository: StudentRepository;

    async loginStudent(displayName: string, password: string){
        const studentInfo: Student = await this.userRepository.getStudentInfo(displayName);

        if(studentInfo === undefined || null)
            throw new Error('Display name is invalid!');

        let studentResult: boolean;

        studentResult = this.passwordHasher.verifyPassword(password, `${studentInfo.password}`);
        
        if(studentResult == false) 
            throw new Error('Password is incorrect!');

        delete studentInfo.password;

        return studentInfo;
  
    }

    async loginEducator(displayName: string, password: string){

        const educatorInfo: Educator = await this.userRepository.getEducatorInfo(displayName);
        console.log('educatorInfo ------------', educatorInfo);
        if(educatorInfo === undefined || null)
            throw new Error('Display name is invalid!');
        
        let educatorResult: boolean;

        
        educatorResult = this.passwordHasher.verifyPassword(password, `${educatorInfo.password}`);
        
        if(educatorResult == false) 
            throw new Error('Password is incorrect!');

        delete educatorInfo.password;
        
        return educatorInfo;
    }

    async register(isThirdParty: boolean, user: LearnCodeUser) {
        
        user.password = this.passwordHasher.hashedPassword(`${user.password}`);
        
        //After adding password seal properties of the object instance.
        const isStudent = user.role.match(/\bStudent\b/) != (null || undefined);
        console.log(isStudent);

        console.log("user-------", user);
        let registeredUser;

        registeredUser = await this.userRepository.register(user, isThirdParty, isStudent);

        console.log("registeredUserReturned-------------", registeredUser);
        
        return registeredUser;
    }

    

}