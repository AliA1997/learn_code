
const bcrypt = require('bcrypt');


export default class PasswordHasher {
    constructor(options?: object) {
        if(options) {
            this.options = options;
        } else {
            this.options =  {"N":1024,"r":8,"p":16};
        }
        this.salt = 12;
    }
    options: object;
    salt: Number;

    hashedPassword(password: string){
        console.log(this.options);
        console.log(this.salt);
        console.log(password);
        console.log(64);
        const hashedPassword: string = bcrypt.hash(password, this.salt).then(result => console.log(result)).catch(err => console.log(err));
        console.log("hashedPassword--------", hashedPassword);
        return hashedPassword;
    }

    verifyPassword(password: string, encodedPassword: string){

       return bcrypt.compare(password, encodedPassword).then(result => {
           return result;
       });
    }

}