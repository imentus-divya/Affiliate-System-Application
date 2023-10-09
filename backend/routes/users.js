const express = require('express');
const router = express.Router();
const db = require('./mongodb');
const Crypto = require('crypto');
const userController=require('../controller/userController')

router.post('/save',userController.save);
//router.post('/login',userController.login);

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// function validateEmail(req, res, next) {
//     const email = req.body.email;
//     if (!email) {
//       return res.status(400).send({ error: 'Email is required' });
//     }


//   next();
// }

// router.post('/', validateEmail, async function(req, res, next) {
//   const collection = db.getDB().collection('users');
//   try {

//     let user = await collection.findOne({email: req.body.email});
//     if (user) {
//       res.status(400).send({ error: 'Email already exists' });
//       return;
//     }
//     let referralId = Crypto.createHash("md5").update(userId).digest("hex")
//     await collection.insertOne({email: req.body.email, referralId});
//     if (req.cookies.referrer) {
//       await collection.updateOne({email: req.body.email}, {$set: {referrer: req.cookies.referrer}},{upsert: true});
//     }
//     res.send({message: "success"});
//   } catch (e) {
//     console.error(e);
//     res.status(500).send('Error while creating user');
//   }
// });
module.exports = router;
