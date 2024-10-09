import conf from '../conf/conf.js';
import { Client, Account, ID} from "appwrite";

export class AuthService {
    client= new Client();
    account;
    //we could have made the account here itself, but we have done it inside the constructor
    //because this way an account will only be created when there is a user actually
    //when there is a user, we will call this auth class via the object and whenever an object is called,
    //the constructor runs by default. hence this is done to ensure better usage of resources.

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

            this.account= new Account(this.client);
    }

    async createAccount({email,password,name}){
        try{
              const userAccount= await this.account.create(ID.unique(),email,password,name)

              if(userAccount)
                {  //call another method
                    return this.login({email,password});}
              else
                return userAccount;
        }
        catch(error){
            throw error;
        }
    }

    async login( {email, password}) {
        try {
            return await this.account.createEmailSession(email,password);
        }
        catch (error) {
            throw error;
        }
    }
    
    //this function checks if the current user is logged in or not
    async getCurrentUser(){
        try{
             return await this.account.get();
        }
        catch(error){
            throw error
        }
    }

    async logout(){
        try{
            await this.account.deleteSessions();
        }
        catch(error)
        {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService

//exporting the object directly instead of exporting the class so that we dont 
//have to create an object each time we import this class.

//the reason that we have created all these services inside methods of their own is to
//make sure that if any changes have to be made they only have to be made in this file
//if some day we wish to switch from appwrite to some other backend service,
//we'll have to change the names of the methods only in this file because all other front end 
//files will be using these services by calling the outer functions.
//toh "under the hood" humne konsi service use ki hai uska pta is walli file 
//ke alawa kisi aur front end file ko nhi. 
