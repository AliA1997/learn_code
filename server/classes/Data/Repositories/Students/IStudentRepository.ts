import Student from '../../../Domain/Users/Student';
import Context from '../../context';

export default interface IStudentRepository {
    context: Context;

    getAllStudents(): Promise<Student[]>;
    
    getStudent(id: Number): Promise<Student>;
}
