// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import userModel from "../../../../../models/user.model"
import dbConnect from "../../../../../utils/connection";


export default async function handler( req, res ) {
  dbConnect().catch( err => { res.status( 405 ).send( { error: err } ) } )

  let { method } = req

  switch ( method ) {

    //localhost:3000/api/operation/cart/add
    // send only email and product id in the body
    case "PATCH": {
      try {
        let {productId,email} = req.body;

        let old=await userModel.findOne({email:email});

        old.cartItem.push(productId)
        let user= await userModel.updateOne({ email:email},{ $set: old })
        // let user=await userModel.update({email:email}, {$push:{cartItem:productId}})
        console.log(old)
        res.status(200).send("successfully added")  
        
      } catch (error) {
        console.log(error)
        return res.status(409).send({errors:error})

      }
    }
  }
}
