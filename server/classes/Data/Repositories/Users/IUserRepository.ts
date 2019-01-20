import Context from '../../context';
import Educator from '../../../Domain/Users/Educator';
import Student from '../../../Domain/Users/Student';


export default interface IUserRepository {
    context: Context;
    getStudentInfo(displayName: string): Promise<Student>;
    getEducatorInfo(displayName: string): Promise<Educator>;
}