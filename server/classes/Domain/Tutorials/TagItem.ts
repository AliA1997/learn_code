import { ObjectType, Field } from 'type-graphql';

@ObjectType({description: 'TagItem for your tutorial'})
export default class TagItem {
    constructor(title: String) {
        this.title = title;
    }

    @Field(type => String)
    title: String
}