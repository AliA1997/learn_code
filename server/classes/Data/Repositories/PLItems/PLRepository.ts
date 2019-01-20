import Context from '../../context';
import IPLRepository from './IPLRepository';
import PLItem from '../../../Domain/ProgrammingLanguages/PLItem';
import ProgrammingLanguage from '../../../Domain/ProgrammingLanguages/PLItem';

export default class PLRepository implements IPLRepository {
    constructor() {
        this.context = new Context();
    }
    
    context: Context;

    getPLItems() {
        // return [
        //     new PLItem(
        //         'Stuff', 
        //         'Name STuff'
        //     ),
        //     new PLItem(
        //         'Stuff 2',
        //         'Name Stuff 2'
        //     )
        // ]
        return this.context.programmingLanguages();
    }
}