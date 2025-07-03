// Middleware building
const jwt =require('jsonwebtoken');
const config =require('../config.js');
const db=require('../dbConnectExec.js');

const auth = async(req,res,next)=>{
    console.log("In the middleware",req.header("Authorization"));
    try{
        // 1. decode the token we receive
        let myToken=req.header("Authorization").replace("Bearer ","");
        console.log("token",myToken);
        let decoded =jwt.verify(myToken,config.JWT);
        let contactPK=decoded.pk; // pk was alias for ContactPK used in signing process
        // 2. compare the token with the database
        let query=`SELECT ContactPK,FirstName,LastName,Email FROM Contact WHERE ContactPK=${contactPK} AND Token='${myToken}';`;
        console.log(query);
        let returnedUser=await db.executeQuery(query);
        console.log(returnedUser);
        // 3. update the req object with the user info from db
        if(returnedUser[0]){
            req.contact=returnedUser[0]; //update req object
            next(); //flow forward to the route you intended to visit
        }
        else{
            return res.status(401).send("Invalid cred... query failure in middleware auth");
        }
    }
    catch(err){
        console.log(err);
        return res.status(401).send("Invalid credentials");
    }
};
module.exports=auth; // make auth available