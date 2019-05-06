import { Resolver, Query, Mutation, Arg, Ctx, Int, Authorized } from 'type-graphql';
import jwt from 'jsonwebtoken';
import StudentService from '../classes/Services/Users/StudentService';
import AccountService from '../classes/Services/Users/AccountService';
import Student from '../classes/Domain/Users/Student';
import LearnCodeUser from '../classes/Domain/LearnCodeUser';

@Resolver(of => Student)
export default class StudentResolver {

    constructor() {
        this.service = new StudentService();
        this.accountService = new AccountService();
    }

    service: StudentService;
    accountService: AccountService;

    @Query(returns => [Student])
    async getAllStudents() {
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


}