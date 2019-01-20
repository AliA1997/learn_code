import { ObjectType, Field, Int, Float } from 'type-graphql';
import Fee from './Fee';

@ObjectType({description: 'StripePayment object saved to user\'s account for processing payment'})
export default class StripePayment {
    constructor(userId: Number, type: String, token: String, cardholderName: String, addressline1: String, addressline2: String, 
        addressCity: String, addressZipcode: Number, addressCountry: String, fees:[Fee]) {
        this.userId = userId;
        this.type = type;
        this.token = token;
        this.cardholderName = cardholderName;
        this.addressline1 = addressline1;
        this.addressline2 = addressline2;
        this.addressCity = addressCity;
        this.addressZipcode = addressZipcode;
        this.addressCountry = addressCountry;
        this.fees = fees;
    }

    @Field(type => Int, {nullable: true})
    userId: Number;

    @Field(type => String, {nullable: false, description: 'Type property is for retrieving the type of account'})
    type: String;

    @Field(type => String, {nullable: false, description: 'Access token for the payment.'})
    token: String;

    @Field(type => String, {nullable: false, description: 'Name of the cardholder'})
    cardholderName: String;

    @Field(type => String, {nullable: false, description: 'Address of the cardholder'})
    addressline1: String;

    @Field(type => String, {nullable: true, description: 'A optional second address of the cardholder'})
    addressline2: String;

    @Field(type => String, {nullable: false, description: 'City where the cardholder resides.'})
    addressCity: String;

    @Field(type => Int, {nullable: false, description: 'Zipcode for the address of the cardholder'})
    addressZipcode: Number;

    @Field(type => String, {nullable: false, description: 'Country where the cardholder resides.'})
    addressCountry: String;

    @Field(type => [Fee], {nullable: true, description: 'Fees for the cardholder.'})
    fees: [Fee]
}