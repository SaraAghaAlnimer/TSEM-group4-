const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../models/user')

router.post('/signup', (req,res, next) => {
    bcrypt.hash(req.body.password, function(err, hash) {
            if(err){

                return res.status(500)

            } else  {
                const user = new Use ({
                    id: new mongoose.Types.ObjectId(),
                    userNmae: req.body.userNmae,
                    email: req.body.email,
                    password: hash,
                    firstName: req.bodyfirstName,
                    lastName: req.body.lastName });

                user
                .save()

                .then(result => {
                    console.log(result);
                    res.status(201)
                })
                .chatch(err => {
                    console.log(err);
                    res.status(500)
                });
            }
    });
});




module.exports = router;


