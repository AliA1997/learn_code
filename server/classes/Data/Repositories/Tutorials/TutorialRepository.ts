import Context from '../../context';
import ITutorialRepository from './ITutorialRepository';
import Criticism from '../../../Domain/Tutorials/Criticism';
import TagItem from '../../../Domain/Tutorials/TagItem';
import Tutorial from '../../../Domain/Tutorials/Tutorial';
import Author from '../../../Domain/Tutorials/Author';
import { Service } from 'typedi';


export default class TutorialRepository implements ITutorialRepository {
    constructor() {
        this.context = new Context();
    }

    context: Context;

    getAllTutorials() {
        return this.context.tutorials().then(tutorialResult => {
            return tutorialResult.map(tutorial => {
                const tutorialsToReturn = new Tutorial(
                    tutorial.id, tutorial.educatorid, tutorial.title, tutorial.image,
                    tutorial.subject, tutorial.skilllevel, tutorial.averagerating, 
                    tutorial.tags.map(tag => new TagItem(tag.title)),
                    tutorial.criticisms.map(criticism => new Criticism(criticism.tutorialId, criticism.author, criticism.body, criticism.rating)),
                    tutorial.author, tutorial.datecreated, tutorial.dateupdated
                );
                return tutorialsToReturn;
            })
        });
    }

    getTutorial(id: Number) {
        return this.context.tutorial(id).then(tutorialResult => {
            const tutorialToReturn = new Tutorial(
                                        tutorialResult[0].id, tutorialResult[0].educatorid, tutorialResult[0].title, tutorialResult[0].image,
                                        tutorialResult[0].subject, tutorialResult[0].skilllevel, tutorialResult[0].averagerating, 
                                        tutorialResult[0].tags.map(tag => new TagItem(tag.title)), 
                                        tutorialResult[0].criticisms.map(criticism => new Criticism(criticism.tutorialId,
                                                                                        new Author(criticism.author.id,
                                                                                            criticism.author.name, 
                                                                                            criticism.author.avatar),
                                                                                        criticism.body,
                                                                                        criticism.rating
                                                                                    )),
                                        tutorialResult[0].author,
                                        tutorialResult[0].datecreated,
                                        tutorialResult[0].dateupdated
                                    );
            return tutorialToReturn;
        });
    }
}