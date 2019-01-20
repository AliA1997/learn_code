import ProgrammingLanguage from '../../Domain/ProgrammingLanguages/PLItem';
import IPLRepository from '../../Data/Repositories/PLItems/IPLRepository';

export default interface IPLService {
    getPLItems(): Promise<ProgrammingLanguage[]>
    repository: IPLRepository;
}