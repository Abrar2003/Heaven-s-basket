// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import userModel from "../../../../models/user.model"
import dbConnect from "../../../../utils/connection";
import getRandomInt from "../../../../utils/randomInt";
import {sentOTPEmail} from "../../../../utils/transport"
import cookie from "js-cookie"


export default async function handler(req, res) {
        dbConnect().catch(err=>{res.status(405).send({error:err})})

  let {method}=req
  
  switch(method){

    //localhost:3000/api/users/auth
    // send only email in the body
    case "POST": {
      try {
        let email=req.body.email
        let user= await userModel.find({email:email})
        if(!user){
          return res.status(409).send("user not found")
          //navigate to signup section because user does not exist
        }
        let OTP=getRandomInt(100000,999999)
        cookie.set("OTP_EMAIL", OTP+":"+email,{expires:1/(6*24)})
        // localStorage.setItem("OTP", OTP)
        // localStorage.setItem("email",email)
        //store the OTP in the session here
        sentOTPEmail(user.email, "heaven's Basket OTP Varification", `Hi ${user.name}, your OTP is ${OTP}`)
        return res.status(200).send({userData:user.email})
      
        //navigate to otp entering page because user exists
      
      } catch (error) {
        return res.status(409).send({errors:error})
      }
    }
  }
}
