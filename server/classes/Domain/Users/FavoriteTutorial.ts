import { ObjectType, Field } from 'type-graphql';
import Author from '../Tutorials/Author';

@ObjectType({description: 'Object representing a favorite tutorial.'})
export default class FavoriteTutorial {
    constructor(link: String, title: String, subject: String, author: Author) {
        this.link = link;
        this.title = title;
        this.subject = subject;
        this.author = author;
    }

    @Field(type => String, {nullable: false, description: 'Favorite Tutorial link.'})
    link: String;
    
    @Field(type => String, {nullable: false, description: 'Favorite Tutorial title.'})
    title: String;

    @Field(type => String, {nullable: false, description: 'Favorite Tutorial subject'})
    subject: String;
    
    @Field(type => Author, {nullable: false, description: 'Favorite Tutorial author'})
    author: Author;
}