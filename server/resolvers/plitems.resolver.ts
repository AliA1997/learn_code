import { Resolver, Query, FieldResolver } from 'type-graphql';
import IPLService from '../classes/Services/PLItems/IPLService';
import ProgrammingLanguage from '../classes/Domain/ProgrammingLanguages/PLItem';
import PLService from '../classes/Services/PLItems/PLService';

@Resolver(of => ProgrammingLanguage)
export default class ProgrammingLanguageResolver {
    
    constructor() {
        this.service = new PLService();
    }

    service: IPLService;

    @Query(returns => [ProgrammingLanguage])
    async getProgrammingLanguages() {
        const programmingLanguages = await this.service.getPLItems();
        return programmingLanguages;
    }

}