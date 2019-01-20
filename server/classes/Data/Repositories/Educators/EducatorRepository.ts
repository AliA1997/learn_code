import Educator from '../../../Domain/Users/Educator';
import Education from '../../../Domain/Users/Education';
import ProgrammingLanguage from '../../../Domain/ProgrammingLanguages/PLItem';
import Context from '../../context';
import IEducatorRepository from './IEducatorRepository';
import { json } from 'body-parser';

export default class EducatorRepository implements IEducatorRepository {
    constructor() {
        this.context = new Context();
    }
    context: Context
    getAllEducator() {
        return this.context.educators().then(educatorResult => {
            return educatorResult.map(educator => {
                       let educatorToReturn = new Educator(
                                educator.name, educator.displayname, educator.email,
                                educator.avatar, educator.intro, educator.pushnotificationtoken,
                                educator.occupation, educator.education, educator.programmingexperience, 
                                educator.favoriteprogramminglanguages.map(pl => new ProgrammingLanguage(pl.image, pl.name)),
                                educator.role, 
                                educator.languagesofexpertise.map(pl => new ProgrammingLanguage(pl.image, pl.name)),
                                null, educator.id
                                );                
                        return educatorToReturn;
                        });
        });;
    }
    getEducator(id: Number) {
        return this.context.educator(id).then(educatorResult => {
            const educatorToReturn = new Educator(
                                        educatorResult[0].name, educatorResult[0].displayname, 
                                        educatorResult[0].email, educatorResult[0].avatar, educatorResult[0].intro,
                                        educatorResult[0].pushnotificationtoken, educatorResult[0].occupation, educatorResult[0].education,
                                        educatorResult[0].programmingexperience, 
                                        educatorResult[0].favoriteprogramminglanguages.map(pl => new ProgrammingLanguage(pl.image, pl.name)),
                                        educatorResult[0].role, educatorResult[0].languagesofexpertise.map(pl => new ProgrammingLanguage(pl.image, pl.name)),
                                        null,
                                        educatorResult[0].id
                                    );
            return educatorToReturn;;
        });
    }
}