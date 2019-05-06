import { ObjectType, Field, Int } from 'type-graphql';
import Education from './Users/Education';
import Fee from './Users/Fee';
import ProgrammingLanguage from './ProgrammingLanguages/PLItem';
import StripePayment from './Users/StripePayment';

@ObjectType()
export default class LearnCodeUser {
    constructor(role: String, displayName?: String, email?: String, avatar?: String, education?: Education, experience?: Number,
        password?: String) {

        if(displayName) {
            this.displayName = displayName;
        }

        if(email) {
            this.email = email;
        }
        
        if(avatar) {
            this.avatar = avatar;
        }
        
        if(education) {
            this.education = education;
        }
        
        if(experience) {
            this.programmingExperience = experience;
        }
        
        if(password) {
            this.password = password;
        }
        
        this.role = role;
    } 

    @Field(type => Int)
    id: Number

    @Field(type => String)
    name: String
    
    @Field(type => String)
    displayName: String
    
    @Field(type => String)
    email: String
    
    @Field(type => String, {description: 'Intro for your LearnCodeUser class.'})
    intro: String
    
    @Field(type => String, {description: 'Avatar of user..'})
    avatar: String
    
    @Field(type => String, {description: 'Push Notification Token for your LearnCodeUser class.'})
    pushNotificationToken: String
    
    @Field(type => String, {description: 'LearnCodeUser\'s occupation. '})
    occupation: String 
    
    @Field(type => Education, {nullable: true, description: 'Education for the LearnCodeUser.'})
    education: Education;
    
    @Field(type => Int) 
    programmingExperience: Number;
    
    @Field(type => [ProgrammingLanguage], {description: 'LearnCodeUser\'s favorite programmingLanguages.'})
    favoriteProgrammingLanguages: ProgrammingLanguage[]
    
    @Field(type => String, {description: 'LearnCodeUser\'s Role'})
    role: String
    
    @Field(type => String, {description: 'User\'s location'})
    password: String;
    
    @Field(type => String, {description: 'Jwt Token for user.'})
    jwtToken: String;
    // @Field(type => StripePayment)
    // payment: StripePayment
    // @Field(type => [Fee])
    // billingHistory: [Fee]
}