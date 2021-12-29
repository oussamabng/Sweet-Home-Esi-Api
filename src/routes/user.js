const { errorHandler } = require('../helpers/error_handler');
const { User } = require('../models/user');
const { getAll, getOne,createOne,updateOne,deleteOne } = require ('./route')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const _ = require("lodash");
const { checkJwt } = require("../middlwares/auth");
const express = require("express")

const router = express.Router();

// get all users
router.get('/api/user',checkJwt,(req,res)=>{
    if (req.user_type === "admin"){
        getAll(User,req,res)
    } else return res.status(401).send({
        message: "Access Denied"
    }) 
});

// get a user
router.get("/api/user/:id",[checkJwt],async(req,res)=>{
    if (req.user_type === "admin"){
        getOne(User,req,res);
    } else return res.status(401).send({
        message: "Access Denied"
    })
});

// create a user
router.post("/api/user/",[checkJwt],async(req,res)=>{
    if (req.user_type === "admin"){
        createOne(User,req,res);
    } else return res.status(401).send({
        message: "Access Denied"
    })
});

// update user
router.patch('/api/user/:id',[], async(req, res) => {
    if (req.user_type === "admin"){
        updateOne(User,req,res);
    } else return res.status(401).send({
        message: "Access Denied"
    })
});

// delete user
router.delete('/api/user/:id',[],async(req,res)=>{
    if (req.user_type === "admin"){
        deleteOne(User,req,res);
    } else return res.status(401).send({
        message: "Access Denied"
    })
});

// register
router.post("/api/auth/register",[],async(req,res)=>{
    try {
        const body = req.body;
        let user = await User.findOne({email:body.email});
        if (user){
            return res.status(404).send({
                message:'user already exists'
            })
        }
        
        let new_user = await User.create({
            username: body.username,
            email: body.email,
            password: body.password,
        });
        const salt = await bcrypt.genSalt(10);
        new_user.password = await bcrypt.hash(new_user.password, salt);
        await new_user.save();

        const token = jwt.sign({ _id: new_user._id,role:new_user.user_type }, "mypassword" );

        return res.status(200).header("x-auth-token", token).send(_.pick(new_user,["_id","username","user_type","email"]));
    } catch (error) {
        errorHandler(res,error);
    }
});

// login
router.post("/api/auth/login",[],async(req,res)=>{
    try {
        const body = req.body;
        const user = await User.findOne({email:body.email});
        if (!user){
            return res.status(404).send({
                message:'Invalid username or password'
            })
        }
        const validPassword = await bcrypt.compare(body.password, user.password);
        if (!validPassword) return res.status(400).send({message:"Invalid email or password "});
        else {
            const token = jwt.sign({ _id: user._id,user_type:user.user_type }, "mypassword" );
            return res.status(200).header("x-auth-token", token).send({ access_token: token,user:_.pick(user,["_id","username","user_type","email"]) });
        }
    } catch (error) {
        errorHandler(res,error);
    }
});


module.exports.userRouter = router;