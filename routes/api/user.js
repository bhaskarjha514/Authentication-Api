const express = require("express");
const router = express.Router();
const User = require('../../models/Users')

router.get('/',(req, res, next)=>{
    User.find()
         .then((users) =>{
            res.json(users);
         })
         .catch(err => console.log(err))
 });

 router.post('/registration',(req, res, next)=>{
   const username = req.body.username;
   const email = req.body.email;
   const password = req.body.password;
   newUser = new User({
       username: username,
       email: email,
       password: password
   });
   newUser.save()
       .then(user=>{
           res.json(user);
       })
       .catch(err=>console.log(err));
})

 
 router.put('/',(req, res, next)=>{
    res.send("Put User page");
 });
router.delete('/',(req, res, next)=>{
    res.send("Delete User page");
 });


  module.exports = router;