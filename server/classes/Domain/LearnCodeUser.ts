import { ObjectType, Field, Int } from 'type-graphql';
import Education from './Users/Education';
import Fee from './Users/Fee';
import ProgrammingLanguage from './ProgrammingLanguages/PLItem';
import StripePayment from './Users/StripePayment';

@ObjectType()
export default class LearnCodeUser {
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
    // @Field(type => StripePayment)
    // payment: StripePayment
    // @Field(type => [Fee])
    // billingHistory: [Fee]
}