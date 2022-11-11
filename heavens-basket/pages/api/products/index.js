// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mongoConnection from "../../../config/db"
import { getProduct, postProduct } from "../../../Controller/controller"
export default async function handler( req, res ) {
  mongoConnection().catch( () => res.status( 405 ).json( { error: "Error" } ) )
  console.log( "Hi Products" )

  // type of request
  const { method } = req
  switch ( method ) {
    case "GET":
      getProduct( req, res )
      // res.status(200).json({method, name:'GET Request' });
      break;
    case "POST":
      postProduct( req, res )
      // res.status(200).json({method,name:"POST Reqeust"});
      break;
    case "PUT":
      res.status( 200 ).json( { method, name: "PUT Request" } );
      break;
    case "DELETE":
      res.status( 200 ).json( { method, name: "DELETE Requst" } );
      break;
    default:
    // res.setHeader("Allow",["GET","PUT","POST","DELETE"])
    // res.status(405).end(`MEthod ${method}Not Allowed`)
  }
  // res.status(200).json({ name: 'Products Route' });
}
