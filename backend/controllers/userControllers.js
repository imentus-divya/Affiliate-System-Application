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



const login = async (req, res) => {
    const collections = db.getDB().collection("user_collecton");
    try {
      // Check if the email is already registered
      let existingUser = await collections.findOne({ email: req?.body?.email });
  
      if (!existingUser) {
        return res.status(400).json({ succes: false, massage: "User Not found" });
      }
      let user = await collections.findOne({
        email: req?.body?.email,
        password: req?.body?.password,
      });
  
      if (user) {
        const payload = {
          email: user.email,
          _id: user._id,
        };
        const secretKey = rs.generate();
        const token = jwt.sign(payload, secretKey, { expiresIn: "3h" });
        res
          .status(200)
          .json({
            succes: true,
            message: "User login  successfully",
            user: { ...user, token },
          });
      } else {
        res
          .status(200)
          .json({ succes: false, message: "Password is not correct" });
      }
    } catch (e) {
      res.status(500).json("Something went wrong");
    }
  };


  // const link_gene= async(req,res,next)=>{
  //     console.log("request",req);
  //     try{

  //     }catch(e){

  //     }
  // }
  
module.exports={
    save,
    login,
    //linkGene,
};