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

    
    @Mutation(returns => Educator)
    async loginEducator(@Arg("displayName", type => String) displayName: string, @Arg("password", type => String) password: string) {
        const loggedInEducator: Educator = await this.accountService.loginEducator(displayName, password)
        if(!loggedInEducator) 
            throw new Error('Display name and password not found');

        return loggedInEducator;
    }
}