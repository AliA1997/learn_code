import { Resolver, Query, Arg, Int } from 'type-graphql';
import TutorialService from '../classes/Services/Tutorials/TutorialService';
import Tutorial from '../classes/Domain/Tutorials/Tutorial';

@Resolver(of => Tutorial)
export default class TutorialResolver {
    constructor() {
        this.service = new TutorialService();    
    }

    service: TutorialService;

    @Query(returns => [Tutorial])
    async getTutorials() {
        const tutorials = await this.service.getAllTutorials();
        return tutorials;
    } 

    @Query(returns => Tutorial)
    async getTutorial(@Arg("id", type => Int) id: Number) {
        const tutorialToReturn = await this.service.getTutorial(id);
        if(!tutorialToReturn) 
            throw new Error('Tutorial your are looking to found does not exist.');
        return tutorialToReturn;
    }

}