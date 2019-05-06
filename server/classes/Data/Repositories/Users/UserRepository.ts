import Context from '../../context';
import IUserRepository from './IUserRepository';
import ProgrammingLanguage from '../../../Domain/ProgrammingLanguages/PLItem';
import Student from '../../../Domain/Users/Student';
import Educator from '../../../Domain/Users/Educator';
import FavoriteTutorial from '../../../Domain/Users/FavoriteTutorial';
import Author from '../../../Domain/Tutorials/Author';
import SubscriptionStatus from '../../../Domain/Users/SubscriptionStatus';
import LearnCodeUser from '../../../Domain/LearnCodeUser';
import Education from '../../../Domain/Users/Education';


export default class UserRepository implements IUserRepository {
    constructor() {
        this.context = new Context();
    }
    context: Context;

    getStudentInfo(displayName: String): Promise<Student> {

        return this.context.student(0, displayName).then(userResult => {
                
            if(userResult[0]) {
    
                const userToReturn = new Student(
                                            userResult[0].name, userResult[0].displayname, userResult[0].email, userResult[0].avatar,
                                            userResult[0].intro, userResult[0].pushnotificationtoken, userResult[0].occupation, userResult[0].education,
                                            userResult[0].programmingexperience,
                                            userResult[0].favoriteprogramminglanguages.map(pl => new ProgrammingLanguage(pl.image, pl.name)), userResult[0].role,
                                            userResult[0].favoritetutorials.map(favTut => new FavoriteTutorial(favTut.link, favTut.title, favTut.subject, new Author(
                                                                                                                                                            favTut.author.educatorId,
                                                                                                                                                            favTut.author.name,
                                                                                                                                                            favTut.author.avatar                                                                                                                    
                                                                                                                                                        )
                                                                                                                                                    ),
                                                                                                                                                ),
                                            userResult[0].subscription,
                                            userResult[0].password,
                                            userResult[0].id
                                    );
    
                return userToReturn;

            }
            return;
        });
    }

    getEducatorInfo(displayName: String): Promise<Educator>{

        return this.context.educator(0, displayName).then(userResult => {

            if(userResult[0]) {

                const userToReturn = new Educator(
                                        userResult[0].name, userResult[0].displayname, userResult[0].email, userResult[0].avatar, 
                                        userResult[0].intro, userResult[0].pushnotificationtoken, userResult[0].occupation, userResult[0].education,
                                        userResult[0].programmingexperience, 
                                        userResult[0].favoriteprogramminglanguages.map(pl => new ProgrammingLanguage(pl.image, pl.name)), userResult[0].role,
                                        userResult[0].languagesofexpertise.map(pl => new ProgrammingLanguage(pl.image, pl.name)),
                                        userResult[0].password,
                                        userResult[0].id
                                    );

                return userToReturn;
            }
            return;
        });

    }

    async register(userToRegister: LearnCodeUser, thirdParty: boolean, isStudent: boolean) {

        console.log('userToREgister', userToRegister);
        return await this.context.user(userToRegister, thirdParty, isStudent).then(userResult => {
            let userToReturn;
            console.log('userResult--------------', userResult);
            if(thirdParty) {
                userToReturn = new LearnCodeUser(userResult[0].role, userResult[0].displayname, userResult[0].email, userResult[0].avatar)
            } else {
                try {
                    userToReturn = new LearnCodeUser(userResult[0].role, userResult[0].displayname, userResult[0].email, userResult[0].avatar,
                        userResult[0].education,
                        userResult[0].programmingexperience, userResult[0].password);
                    console.log("userToReturned REsolved Context Promise_---------", userToReturn)
                }
                catch(error) {
                    console.log("USerReturn error--------", userToReturn);
                }
            }

            return userToReturn;
        })
    }
}