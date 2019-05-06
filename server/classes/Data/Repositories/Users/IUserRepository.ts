import Context from '../../context';
import Educator from '../../../Domain/Users/Educator';
import Student from '../../../Domain/Users/Student';
import LearnCodeUser from '../../../Domain/LearnCodeUser';


export default interface IUserRepository {
    context: Context;
    
    getStudentInfo(displayName: string): Promise<Student>;
    
    getEducatorInfo(displayName: string): Promise<Educator>;
    
    register(userToRegister: LearnCodeUser, thirdParty: boolean, isStudent: boolean): Promise<Educator | Student>;
}