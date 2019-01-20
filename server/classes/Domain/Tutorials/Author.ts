import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType({description: 'Author object for your TUtorial'})
export default class Author {
    constructor(id: Number, name: String, avatar: String) {
        this.id = id;
        this.name = name;
        this.avatar = avatar;
    }

    @Field(type => Int, {description: 'Author\'s Foriegn Key Id'})
    id: Number
    @Field(type => String, {description: 'Author\'s Name'})
    name: String
    @Field(type => String, {description: 'AUthor\'s avatar'})
    avatar: String
}