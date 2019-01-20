import { ObjectType, Field } from 'type-graphql';
@ObjectType()
export default class Education {
    constructor(email: String, institution: String, certificate: String, yearOfGraduation: Number) {
        this.email = email;
        this.institution = institution;
        this.certificate = certificate;
        this.yearofgraduation = yearOfGraduation;
    }
    
    @Field() 
    email: String;

    @Field()
    institution: String;

    @Field()
    certificate: String;

    @Field()
    yearofgraduation: Number;
}

