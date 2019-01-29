import Context from '../../context';
import Tutorial from '../../../Domain/Tutorials/Tutorial';

export default interface ITutorialRepository {
    context: Context;
    
    getAllTutorials() : Promise<Tutorial[]>

    getTutorial(id: Number): Promise<Tutorial>
}
