import Educator from '../../../Domain/Users/Educator';
import Context from '../../context';


export default interface IEducatorRepository {
    context: Context;
    //When dealing with promises from a database call have your return type of Promise with a generic type of Educator array.
    getAllEducator(): Promise<Educator[]>
    //When dealing with promises from a database call have your return type of Promise with a generic type of a Educator type.
    getEducator(id: Number): Promise<Educator>
}