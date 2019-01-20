import Student from '../../Domain/Users/Student';
import StudentRepository from '../../Data/Repositories/Students/StudentRepository';

export default interface IStudentService {
    repository: StudentRepository;
    getAllStudents(): Promise<Student[]>;

    getStudent(id: Number): Promise<Student>;
}