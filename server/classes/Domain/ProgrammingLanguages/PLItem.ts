import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType({description: 'PLITem object type.'})
export default class PLItem {
    constructor(image: String, name: String) {
        this.image = image;
        this.name = name;
    }
    @Field(type => Int, {nullable: true})
    id: Number
    @Field(type => String)
    image: String;
    @Field(type => String)
    name: String;
}