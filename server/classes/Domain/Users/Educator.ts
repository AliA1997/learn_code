import { ObjectType, Field } from 'type-graphql';
import Education from './Education';
// import Fee from './Fee';
import ProgrammingLanguage from '../ProgrammingLanguages/PLItem';
// import StripePayment from './StripePayment';
import User from '../../Domain/LearnCodeUser';

@ObjectType({description: 'The educator object for educators.'})
export default class Educator extends User {
    constructor(name: String, displayName: String, email: String, avatar: String, intro: String, pushNotificationToken: String,
        occupation: String, education: Education, programmingExperience: Number, favoriteProgrammingLanguages: [ProgrammingLanguage],
        role: String, languagesOfExpertise: [ProgrammingLanguage], password?: String, id?: Number) {
            super();
            this.name = name;
            this.displayName = displayName;
            this.email = email;
            this.avatar = avatar;
            this.intro = intro;
            this.pushNotificationToken = pushNotificationToken;
            this.occupation = occupation;
            this.education = education;
            this.programmingExperience = programmingExperience;
            this.favoriteProgrammingLanguages = favoriteProgrammingLanguages;
            this.role = role;
            // this.payment = payment;
            // this.billingHistory = billingHistory;
            this.languagesOfExpertise = languagesOfExpertise;
            if(password) {
                this.password = password;
            }
            if(id) {
                this.id = id;
            }
    }

    @Field(type => [ProgrammingLanguage], {description: 'Languages of expertise.'})
    languagesOfExpertise: ProgrammingLanguage[]
}