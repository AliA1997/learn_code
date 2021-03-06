import { Resolver, Query, Mutation, Arg, Int } from 'type-graphql';
import StudentService from '../classes/Services/Users/StudentService';
import AccountService from '../classes/Services/Users/AccountService';
import Student from '../classes/Domain/Users/Student';

@Resolver(of => Student)
export default class StudentResolver {

    constructor() {
        this.service = new StudentService();
        this.accountService = new AccountService();
    }

    service: StudentService;
    accountService: AccountService;

    @Query(returns => [Student])
    async getStudents() {
        const students = await this.service.getAllStudents();
        return students;
    }

    @Query(returns => Student)
    async getStudent(@Arg("id", type => Int) id: Number) {
        const studentToReturn = await this.service.getStudent(id);
        if(!studentToReturn)
            throw new Error('Student your are looking to found does not exist');
        return studentToReturn;
    } 

    @Mutation(returns => Student)
    async loginStudent(@Arg("displayName", type => String) displayName: string, @Arg("password", type => String) password: string) {
        const loggedInStudent: Student = await this.accountService.loginStudent(displayName, password)
        if(!loggedInStudent) 
            throw new Error('Display name and password not found');

        return loggedInStudent;
    }

}