const db= require   ("../routes/mongodb");
const Crypto= require("crypto");
const cookies= require("cookie-parser");
const jwt= require("jsonwebtoken");
const rs=require("randomstring" );
const { error } = require("console");
const userScemaModel =require("../model/userSchema")


//create user
const save= async(req,res,next)=>{
    const collections=db.getDB().collection("user_collecton");
    try{
        //check email is already register
        let existingUser=await collections.findOne({email:req?.body?.email});

        if(existingUser){
            return res.status(400)
            .json({sucess:false,message:"email is already register"})
        }

        //generate referralId based on email  

        let referralId=Crypto.createHash("md5")
        .update(req.body.email)
        .digest("hex");
        const _id= rs.generate(50);


        //create new user

        const newUser={
            ...req.body,
            referralId,
            _id,
        };
        const user = await collections.insertOne(newUser);
        console.log("newUser",user);
        res.json({
            succes: true,
            message: "user registration successful",
            user: newUser,
          });

    }catch(e){
        console.log("error",e);
        res.status(500).json({
           succes:false,
            message:"something is wrong",
        });
    }


};
module.exports={
    save,
    
};