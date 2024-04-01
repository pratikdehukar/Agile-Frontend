export class User{
    private firstName! :String;
    private lastName!:String;
    private email! :String;
    private password!:String;
    private contactNumber!:String;
    private companyName!: String;
    private countryCode!:String;

    constructor(firstName ?:any,lastName ?:any,email ?:any,password ?:any,contactNumber ?:any,companyName ?:any,countryCode ?:any,){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.contactNumber = contactNumber;
        this.companyName = companyName;
        this.countryCode = companyName;
    }

}