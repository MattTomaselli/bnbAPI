const express = require("express");

const router = express.Router();

const User = require('../models/user-model');

router.get("/", (req,res) => {
    User.prototype
        .getUsersJSON()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
           res.send(err);
        });  
});


router.post("/", (req,res) => {
    User.prototype
        .createUserJSON()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
           res.send(err);
        });
});

module.exports = router;
