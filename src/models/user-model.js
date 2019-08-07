// const users = [
//      {
//         "id": "1",
//         "name": "Byron",
//         "role": "user",
//         "email": "byron@mail.com",
//         "password": "P@ssword"
//       },
//       {
//         "id": "2",
//         "name": "brett",
//         "role": "service provider",
//         "email": "brett@mail.com",
//         "password": "P@ssword1"
//       },
//       {
//         "id": "3",
//         "name": "Riaz",
//         "role": "user",
//         "email": "riaz@mail.com",
//         "password": "P@ssword2"
//       },
//     ]

const fs = require("fs");   
const mysqlConn = require("../database/database")

module.exports = class User {
  constructor(user) { 
        this.id;
        this.firstName = user.firstName,
        this.lastName = user.lastName,
        this.email = user.email,
        this.password = user.password,
        this.role = user.role;
      }
    
      getAll(result) {
      
       mysqlConn.query("Select * from user", function(err, res) {
          if (err) {
            console.log("error: ", err);
            result(err, null);
          } else {
            // console.log("Users : ", res);
            result(null, res);
          }
        });
      }

        getUsersJSON () {
          return new Promise ((resolve, reject) => {
            fs.readFile("./src/data/data.json", (err,data)=>{
              if(err){
                reject(err);
              } else {
                  resolve (data);
              }
            });
          });
        }
        createUserJSON(newUser, result){
          mysqlConn.query("INSERT INTO user set ?", newUser, (err, res) => {
                    if (err) {
                    console.log("error: ", err);
                    result(err, null);
                    } else {
                    console.log(res.insertId);
                    result(null, res.insertId);
                    }
                });
        }
       
        };