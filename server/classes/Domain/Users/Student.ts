import { ObjectType, Field } from 'type-graphql';
import Education from './Education';
import FavoriteTutorial from './FavoriteTutorial';
import Fee from './Fee';
import ProgrammingLanguage from '../ProgrammingLanguages/PLItem';
import StripePayment from './StripePayment';
import Subscription from './SubscriptionStatus';
import User from '../../Domain/LearnCodeUser';

@ObjectType({description: 'Student Object type for each individual student.'})
export default class Student extends User {
    constructor(name: String, displayName: String, email: String, intro: String, avatar: String, pushNotificationToken: String,
        occupation: String, education: Education, programmingExperience: Number, favoriteProgrammingLanguages: [ProgrammingLanguage],
        role: String, favoriteTutorials: [FavoriteTutorial], subscriptionStatus: Subscription, password?: String, id?:Number) {
            super();
            this.name = name;
            this.displayName = displayName;
            this.avatar = avatar;
            this.email = email;
            this.intro = intro;
            this.pushNotificationToken = pushNotificationToken;
            this.occupation = occupation;
            this.education = education;
            this.programmingExperience = programmingExperience;
            this.favoriteProgrammingLanguages = favoriteProgrammingLanguages;
            this.role = role;
            // this.payment = payment;
            this.favoriteTutorials = favoriteTutorials;
            this.subscription = subscriptionStatus;
            if(password) {
                this.password = password
            }
            if(id) {
                this.id = id;
            }
    }

    @Field(type => [FavoriteTutorial])
    favoriteTutorials: FavoriteTutorial[]
    @Field(type => Subscription)
    subscription: Subscription
}