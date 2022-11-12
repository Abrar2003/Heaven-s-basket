// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import userModel from "../../../../../models/user.model"
import dbConnect from "../../../../../utils/connection";



export default async function handler(req, res) {
        dbConnect().catch(err=>{res.status(405).send({error:err})})

  let {method}=req
  
  switch(method){

    //localhost:3000/api/operation/cart/remove
    // send only email and product id in the body
    case "Patch": {
      try {
        let {productId,email}=res.body
        let user= new userModel.updateOne({email:email}, {$pull: { "cartItem":productId}})
        await user.save()
        res.status(200).send("successfully added")  
      } catch (error) {
        return res.status(409).send({errors:error})
      }
    }
  }
}
