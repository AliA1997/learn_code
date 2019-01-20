import { ObjectType, Field, Int, Float } from 'type-graphql';
import Author from './Author';

@ObjectType({description: 'Criticism object type for tutorials.'})
export default class Criticism {
    
    constructor(tutorialId: Number, author: Author, body: String, rating: Number) {
        this.tutorialId = tutorialId;
        this.author = author;
        this.body = body;
        this.rating = rating;
    }

    @Field(type => Int) 
    tutorialId: Number
    
    @Field(type => Author) 
    author: Author
    
    @Field(type => String)
    body: String 
    
    @Field(type => Float)
    rating: Number 
}