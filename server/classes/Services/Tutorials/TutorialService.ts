import ITutorialService from './ITutorialService';
import TutorialRepository from '../../Data/Repositories/Tutorials/TutorialRepository';

export default class TutorialService implements ITutorialService {
    constructor() {
        this.repository = new TutorialRepository();
    }
    repository: TutorialRepository

    getAllTutorials() {
        return this.repository.getAllTutorials();
    }

    getTutorial(id: Number) {
        return this.repository.getTutorial(id);
    }
    
}