const userService = require("./user-service.js");
const User = require("../models/user-model");

const roles = {
    ADMIN: "admin",
    PROVIDER: "provider",
    USER: "user"
}

module.exports = class AuthService {
    constructor() {}

    login(authUser) {
        // Get users
        // Loop through users find user by email
        // Validate the password
        // if successful return the user
        return new Promise((resolve, reject) => {
            userService.prototype.getAll()
            .then(users => {
                // const users = JSON.parse(userJSON).users;
                users.forEach(user => {
                    if (user.email == authUser.email) {
                        if (user.password == authUser.password){
                            resolve(user)
}
                    } 
                })
                reject("User not found")
            })
            .catch(err => {
                console.log(err)
                reject(err);
            })
        })
    }


async registerU(user){
            return new Promise((resolve, reject)=>{
                userService.prototype.getAll()
                    .then(data => {
                    data.forEach(existingUser=>{
                        if (existingUser.email==user.email) {
                            reject("This email address already been used")
                        }
                    })
    
                    
                    const userObj = {
                        firstName: user.firstName,
                        lastName: user.lastName,
                   
                        email: user.email,
                        password: user.password,
                        role: user.role
                    }
                    const newUser = new User(userObj);
    
                    User.prototype.createUserJSON(newUser, (err, res)=>{
                        if(err) reject(err);
                        resolve(res);
    })
                        
                    
             
                 
               
            })
})    
        }

        async registerP(user){
            return new Promise((resolve, reject)=>{
                User.prototype.getAllProviders().then((data) => {
                    data.forEach(existingUser=>{
                        if (existingUser.email==user.email) {
                            reject("This email address already been used")
                        }
                    })
    
                    const newUser = new User();
                    const userObj = {
                        firstName: user.firstName,
                        lastName: user.lastName,
                        phone: user.phone,
                        email: user.email,
                        password: user.password,
                    }
                    newUser.firstName= userObj.firstName;
                    newUser.lastName= userObj.lastName;
                    newUser.email = userObj.email;
                    newUser.password = userObj.password;
                    newUser.phone = userObj.phone;
    
                    User.prototype.createProvider(newUser).then(res=>{
                        resolve(res);
                    }).catch(err=>{
                        reject(err);
                    })
             
                 })
               
            })    
        }
    
    }