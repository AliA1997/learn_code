import ProgrammingLanguage from '../../Domain/ProgrammingLanguages/PLItem';
import IPLService from './IPLService';
import IPLRepository from '../../Data/Repositories/PLItems/IPLRepository';
import PLRepository from '../../Data/Repositories/PLItems/PLRepository';

export default class PLService implements IPLService {
    constructor() {
        this.repository = new PLRepository();
    }
    repository: IPLRepository

    getPLItems() {
        return this.repository.getPLItems();
    }
} 