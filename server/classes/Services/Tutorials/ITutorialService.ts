import Tutorial from '../../Domain/Tutorials/Tutorial';
import TutorialRepository from '../../Data/Repositories/Tutorials/TutorialRepository';

export default interface ITutorialService {
    repository: TutorialRepository;
    getAllTutorials(): Promise<Tutorial[]>
    getTutorial(id: Number): Promise<Tutorial>
}