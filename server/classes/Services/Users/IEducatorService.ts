import Educator from '../../Domain/Users/Educator';
import IEducatorRepository from '../../Data/Repositories/Educators/IEducatorRepository';

export default interface IEducatorService {
    repository: IEducatorRepository;
    getEducators(): Promise<Educator[]>;
    getEducator(id: Number): Promise<Educator>;
}