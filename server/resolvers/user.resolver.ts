import { Resolver, Mutation, Arg, Ctx, Int, Authorized, InputType } from 'type-graphql';
import AccountService from '../classes/Services/Users/AccountService';
import LearnCodeUser from '../classes/Domain/LearnCodeUser';
import Student from '../classes/Domain/Users/Student';
import Educator from '../classes/Domain/Users/Educator';
import Education from '../classes/Domain/Users/Education';

const jwt = require('jsonwebtoken');

export default class UserResolver {
    constructor() {
        this.accountService = new AccountService();
    }

    accountService: AccountService;

    @Mutation(returns => Student)
    async loginStudent(@Arg("displayName", type => String) displayName: string,
                       @Arg("password", type => String) password: string) {

        const loggedInStudent: Student = await this.accountService.loginStudent(displayName, password);

        loggedInStudent.jwtToken = jwt.sign(
            {
                userId: loggedInStudent.id,
                name: loggedInStudent.name,
                displayName: loggedInStudent.displayName,
                email: loggedInStudent.email,
            },
            process.env.JWT_PRIVATE_KEY
        );
        
        return loggedInStudent;
    }

    @Mutation(returns => Educator)
    async loginEducator(@Arg("displayName", type => String) displayName: string, @Arg("password", type => String) password: string) {

        console.log("resolver hit---------------");
        const loggedInEducator: Educator = await this.accountService.loginEducator(displayName, password);

        loggedInEducator.jwtToken = jwt.sign(
            {
                userId: loggedInEducator.id,
                name: loggedInEducator.name,
                displayName: loggedInEducator.displayName,
                email: loggedInEducator.email,
            },
            process.env.JWT_PRIVATE_KEY
        );        

        console.log('loggedInEducator-----------', loggedInEducator);

        return loggedInEducator;
    }

    @Mutation(returns => LearnCodeUser)
    async register(@Arg('isThirdParty', { nullable: true}) isThirdParty: boolean,@Arg('role') role: String,
                    @Arg('displayName') displayName: String,@Arg('email') email: String,
                    @Arg('avatar') avatar: String,@Arg('password', { nullable: true }) password: String,
                    @Arg('experience', type => Int, { nullable: true }) experience: Number, 
                    @Arg('eduInstitution', { nullable: true }) eduInstitution: String, @Arg('eduYearOfGraduation', type => Int, { nullable: true}) eduYearOfGraduation: Number,
                     @Arg('eduCertificate', { nullable: true }) eduCertificate: String) {
        let newUser;
        let userToReturn;
        if(isThirdParty) {
            newUser = new LearnCodeUser(role, displayName, email, avatar);
            userToReturn = await this.accountService.register(true, newUser);
        } else {
            newUser = new LearnCodeUser(role, displayName, email, avatar, new Education(email, eduInstitution, eduCertificate, eduYearOfGraduation), experience, password);
            userToReturn = await this.accountService.register(false, newUser);
        }


        return userToReturn;
    }
}