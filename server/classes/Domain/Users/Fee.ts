import { ObjectType, Field, Int, Float } from 'type-graphql';

@ObjectType({description: 'Fee object belonging to the fees array in your StripePayment object.'})
export default class Fee {
    constructor(userId: Number, paymentId: String, amount: Number, type: String, description: String, billing: Boolean) {
        this.userId = userId;
        this.paymentId = paymentId;
        this.amount = amount;
        this.type = type;
        this.description = description;
        this.billing = billing;
    }

    @Field(type => Int)
    userId: Number;

    @Field(type => String, {nullable: false, description: 'PaymentId of the fee.'})
    paymentId: String;

    @Field(type => Float, {nullable: false, description: 'Amount of the fee.'})
    amount: Number;

    @Field(type => String, {nullable: false, description: 'Type of fee.'})
    type: String;

    @Field(type => String, {nullable: false, description: 'Description of the fee.'})
    description: String;

    @Field(type => Boolean, {nullable: false, description: 'Indicate if the fee is billing(being paid to cardholder) or be deducted from cardholder.'})
    billing: Boolean;
}