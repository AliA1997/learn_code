import UserRepository from '../../Data/Repositories/Users/UserRepository';
import PasswordHasher from '../../Domain/Users/PasswordHasher';
import Educator from '../../Domain/Users/Educator';
import Student from '../../Domain/Users/Student';
import EducatorRepository from '../../Data/Repositories/Educators/EducatorRepository';
import StudentRepository from '../../Data/Repositories/Students/StudentRepository';

export default interface IAccountService {
    passwordHasher: PasswordHasher;
    userRepository: UserRepository;
    educatorRepository: EducatorRepository;
    studentRepository: StudentRepository;
    
    loginStudent(displayName: string, password: string): Promise<Student>;

    loginEducator(displayName: string, password: string): Promise<Educator>;
} 