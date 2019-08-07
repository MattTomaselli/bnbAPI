const express = require("express");
const router = express.Router();

const AuthService = require("../services/auth-service")

router.post('/login', (req,res) => {
        console.log(req.body)
        AuthService.prototype
            .login(req.body)
            .then(user => {
                console.log("res:", user)
                res.send(user)
            })
            .catch(err => {
                res.status(400).send(err)
            })
    })

router.post('/registerU',(req, res)=>{
    AuthService.prototype.registerU(req.body).then(user=>{
        res.send(user);
    })
    .catch(err=>{
        res.status(400).send(err);
    });


});
router.post('/registerP', (req,res)=>{
    AuthService.prototype.registerP(req.body).then(user=>{
        res.status(200).send(user);
    })
    .catch(err=>{
        res.status(400).send(err);
    });


});
router.post('/', (req,res)=>{
    Users.prototype.createUsers(req.body).then(users=>{
        res.json(users);
    })
    .catch(err=>{
        res.send(err);
    })
})

router.get('/', (req,res)=>{
    Users.prototype.getAllUsers()
    .then(user=>{
        res.send(user);
    })
    .catch(err=>{
        res.status(400).send(err);
    })
})




module.exports = router;