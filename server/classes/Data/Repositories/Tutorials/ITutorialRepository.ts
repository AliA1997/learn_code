import Context from '../../context';
import Tutorial from '../../../Domain/Tutorials/Tutorial';

export default interface ITutorialRepository {
    context: Context;
    
    getTutorials() : Promise<Tutorial[]>

    getTutorial(id: Number): Promise<Tutorial>
}
