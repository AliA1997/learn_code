import Context from '../../context';
import ProgrammingLanguage from '../../../Domain/ProgrammingLanguages/PLItem';

export default interface IPLRepository {
    getPLItems() : Promise<ProgrammingLanguage[]>
    context: Context;
}
