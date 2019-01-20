import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
export default class TrophyItem {
    @Field(type => Int)
    educatorId: Number;

    @Field()
    trophy: String;

    @Field(type => Int)
    amountOfGoodReviews: Number;
}

