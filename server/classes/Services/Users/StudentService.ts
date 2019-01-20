import StudentRepository from '../../Data/Repositories/Students/StudentRepository';
import IStudentService from './IStudentService';

export default class StudentService implements IStudentService {
    constructor() {
        this.repository = new StudentRepository();
    }

    repository: StudentRepository;

    getAllStudents() {
        return this.repository.getStudents();
    }

    getStudent(id: Number) {
        return this.repository.getStudent(id);
    }

}