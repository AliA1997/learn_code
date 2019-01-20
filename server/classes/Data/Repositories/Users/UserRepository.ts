import Context from '../../context';
import IUserRepository from './IUserRepository';
import ProgrammingLanguage from '../../../Domain/ProgrammingLanguages/PLItem';
import Student from '../../../Domain/Users/Student';
import Educator from '../../../Domain/Users/Educator';
import FavoriteTutorial from '../../../Domain/Users/FavoriteTutorial';
import Author from '../../../Domain/Tutorials/Author';
import SubscriptionStatus from '../../../Domain/Users/SubscriptionStatus';


export default class UserRepository implements IUserRepository {
    constructor() {
        this.context = new Context();
    }
    context: Context;

    getStudentInfo(displayName: string) {
        return this.context.student(0, displayName).then(userResult => {
            if(userResult[0]) {
                const userToReturn = new Student(
                                        userResult[0].name, userResult[0].displayname, userResult[0].email, userResult[0].avatar,
                                        userResult[0].intro, userResult[0].pushnotificationtoken, userResult[0].occupation, userResult[0].education,
                                        userResult[0].programmingexperience,
                                        userResult[0].favoriteprogramminglanguages.map(pl => new ProgrammingLanguage(pl.image, pl.name)), userResult[0].role,
                                        userResult[0].favoritetutorials.map(favTut => new FavoriteTutorial(favTut.link, favTut.title, favTut.subject, new Author(
                                                                                                                                                        userResult[0].author.id,
                                                                                                                                                        userResult[0].author.name,
                                                                                                                                                        userResult[0].author.avatar                                                                                                                    
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

    getEducatorInfo(displayName: string){
        console.log('displayName-------', displayName);
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
        })

    }
}