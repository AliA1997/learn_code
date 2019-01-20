import EducatorRepository from '../../Data/Repositories/Educators/EducatorRepository';
import IEducatorService from './IEducatorService';

export default class EducatorService implements IEducatorService {
    constructor() {
        this.repository = new EducatorRepository();
    }

    repository: EducatorRepository;

    getEducators() {
        return this.repository.getAllEducator();
    }

    getEducator(id: Number) {
        return this.repository.getEducator(id);
    }
}