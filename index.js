const express = require('express');
const app = express();
var cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
const users = require("./src/api/user")

//const listings = require("./src/api/listings");
 
//url routing for local host
app.use("/api/users", users);
app.use("/api/auth", require("./src/api/auth-routes"))
//app.use("/api/listings", listings);
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));