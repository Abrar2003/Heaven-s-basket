// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mongoConnection from "../../../config/db";
import cartModel from "../../../models/cart";

export default async function handler( req, res ) {
  mongoConnection().catch( () => res.status( 405 ).json( { error: "Error" } ) );
  // console.log("Hi Products");

  // type of request
  const { method } = req;
  switch ( method ) {
    case "GET":
      // console.log(req.headers.email);
      let newdata = await cartModel.find( { email: req.headers.email } );
      res.status( 200 ).json( newdata );

      // res.status(200).json({method, name:'GET Request' });
      break;
    case "POST":
      try {
        let { email, productId } = req.body;
        const data = await cartModel.create( req.body );
        console.log( data, "data" );
        res.status( 200 ).send( data );
      } catch ( e ) {
        console.log( "error" );

        res.status( 401 ).send( e );
      }

    case "PATCH":
      try {

        let { id, qty } = req.body;

        const data = await cartModel.update( { _id: id }, { qty: qty } );
        res.status( 200 ).send( data );

      } catch ( e ) {
        res.status( 401 ).send( e );
      }

      break;
    // case "PUT":
    //     putProduct( req, res );
    //     // res.status(200).json({method,name:"PUT Request"});
    //     break;
    case "DELETE":
      let id = req.headers.productid;
      console.log( id );
      try {
        let data = await cartModel.findByIdAndDelete( { _id: id } );
        console.log( "delete", data );
        res.status( 200 ).send( data );
      } catch ( e ) {
        res.status( 404 ).send( e );
      }
      // res.status(200).json({method,name: "DELETE Requst"});
      break;
    default:
      res.setHeader( "Allow", [ "GET", "PUT", "POST", "DELETE" ] );
      res.status( 405 ).end( `MEthod ${ method }Not Allowed` );
  }
  // res.status(200).json({ name: 'Products Route' });
}
