// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mongoConnection from "../../../config/db";

import { get_Product, deleteProduct, putProduct } from "../../../Controller/[id]";
export default async function handler( req, res ) {
    mongoConnection().catch( () => res.status( 405 ).json( { error: "Error" } ) );
    // console.log("Hi Products");

    // type of request
    const { method } = req;
    switch ( method ) {
        case "GET":
            get_Product( req, res );
            // res.status(200).json({method, name:'GET Request' });
            break;
        default:
            res.setHeader( "Allow", [ "GET", "PUT", "POST", "DELETE" ] );
            res.status( 405 ).end( `MEthod ${ method }Not Allowed` );
    }
    // res.status(200).json({ name: 'Products Route' });
}
