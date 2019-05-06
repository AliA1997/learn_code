import { Resolver, Query, Mutation, Arg, Int } from 'type-graphql';
import EducatorService from '../classes/Services/Users/EducatorService';
import Educator from '../classes/Domain/Users/Educator';
import AccountService from '../classes/Services/Users/AccountService';

@Resolver(of => Educator)
export default class EducatorResolver {
    
    constructor() {
        this.service = new EducatorService();
        this.accountService = new AccountService();
    }

    service: EducatorService;
    accountService: AccountService;

    @Query(returns => [Educator])
    async getAllEducators() {
        const educators = await this.service.getEducators();
        return educators;
    }

    @Query(returns => Educator) 
    async getEducator(@Arg("id", type => Int) id: Number) {
        const educatorToReturn = await this.service.getEducator(id);
        if(!educatorToReturn)
            throw new Error('Educator your are looking for does not exist.');
        return educatorToReturn;
    }

}