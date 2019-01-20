import { ObjectType, Field, Float } from 'type-graphql';

@ObjectType() 
export default class SubscriptionStatus {
    @Field(type => String, {nullable: false, description: 'Subscription of the subscription status.'})
    subscription: String;
    @Field(type => Float, {nullable: false, description: 'The price of the subscription.'})
    price: Number;
}
