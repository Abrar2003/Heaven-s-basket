// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import userModel from "../../../../models/user.model"
import dbConnect from "../../../../utils/connection";
import {sentOTPEmail} from "../../../../utils/transport"
import jwt from "jsonwebtoken"
import cookie from "js-cookie";


export default async function handler(req, res) {
        dbConnect().catch(err=>{res.status(405).send({error:err})})

  let {method}=req
  switch(method){
    //localhost:3000/api/users/auth/login
    // send only OTP in the body
    case "POST": {
      try {
        let OTP=req.body.OTP
        let storedData=cookie.get("OTP_EMAIL")
        console.log(storedData)
        let [storedOTP, email]=storedData.split(":")
        //get stored OTP from Session here
        // let storedOTP=localStorage.getItem("OTP")
        if(OTP===storedOTP){
            //get stored email from Session here
          // let email=localStorage.getItem("email")
          let user = await userModel.find({email:email})
            let mainToken=jwt.sign({email:user.email, role:user.role, name:user.email} , "SecretKey1234", {
                expiresIn: "7 days"
              })
              // let refreshToken=jwt.sign({email:user.email, role:user.role} , "SecretRefreshKey1234", {
              //   expiresIn: "5 minutes"
              // })
              sentOTPEmail(user.email, "logged in successfully", `Hi ${user.name}, "You are successfully loggedin in heavens Baskests website"`)
              return res.status(200).send(mainToken)
              
        }  
        return res.staus(404).send("Invalid OTP")
      }catch (error) {
        return res.status(401).send("not authorize")
      }
    }
  }
}
