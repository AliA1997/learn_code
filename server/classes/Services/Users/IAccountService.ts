import UserRepository from '../../Data/Repositories/Users/UserRepository';
import PasswordHasher from '../../Domain/Users/PasswordHasher';
import Educator from '../../Domain/Users/Educator';
import Student from '../../Domain/Users/Student';

export default interface IAccountService {
    passwordHasher: PasswordHasher;
    userRepository: UserRepository;
    
    loginStudent(displayName: string, password: string): Promise<Student>;

    loginEducator(displayName: string, password: string): Promise<Educator>;
} 