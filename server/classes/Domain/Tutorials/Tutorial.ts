import { ObjectType, Field, Int, Float } from 'type-graphql';
import Author from './Author';
import TagItem from './TagItem';
import Criticism from './Criticism';

@ObjectType({description: 'TUtorial object type.'})
export default class Tutorial {
    constructor(id: Number,
                educatorId: Number,
                title: String,
                image: String,
                subject: String,
                skillLevel: String,
                averageRating: Number,
                tags: [TagItem],
                criticisms: [Criticism],
                author: Author,
                dateCreated: Date,
                dateUpdated: Date) {
            this.id = id;
            this.educatorId = educatorId;
            this.title = title;
            this.image = image;
            this.subject = subject;
            this.skillLevel = skillLevel;
            this.tags = tags;
            this.criticisms = criticisms;
            this.author = author;
            this.dateCreated = dateCreated;
            this.averageRating = averageRating;
            this.dateUpdated = dateUpdated;
        }

    @Field(type => Int)
    id: Number;

    @Field(type => Int, {description: 'EducatorId is the educator who created the tutorial.'})
    educatorId: Number; 
    
    @Field(type => String)
    title: String;
    
    @Field(type => String) 
    image: String;
    
    @Field(type => String)
    subject: String;
    
    @Field(type => Float)
    averageRating: Number;

    @Field(type => String)
    skillLevel: String; 
    
    @Field(type => [TagItem])
    tags: TagItem[];
    
    @Field(type => [Criticism])
    criticisms: Criticism[];

    @Field(type => Author)
    author: Author;
    
    @Field(type => Date)
    dateCreated: Date;
    
    @Field(type => Date)
    dateUpdated: Date;
}
