import ProductModel from "../models/products";

export async function putProduct( req, res ) {
  // console.log(req.query)
  try {
    const productId = req.query._id;
    // console.log(productId);
    const productData = req.body;
    if ( productId && productData ) {
      const updateProduct = await ProductModel.findByIdAndUpdate(
        productId,
        productData
      );
      // console.log(updateProduct);
      res.status( 200 ).json( updateProduct );
    }
    res.status( 200 ).json( { productId } );
  } catch ( error ) {
    res.status( 404 ).json( { error: "Error While Updating the Data" } );
  }
}


export async function get_Product( req, res ) {

  try {
    const productId = req.query.id;
    // console.log(productId);

    if ( productId ) {
      const Product = await ProductModel.findOne(
        { _id: productId }
      );

      // console.log(updateProduct);
      res.status( 200 ).json( Product );
    } else {
      res.status( 404 ).json( "Product not found" );
    }

  } catch ( error ) {
    res.status( 404 ).json( { error: "does not have product" } );
  }
}

export async function deleteProduct( req, res ) {
  console.log( req.query._id );
  try {
    await ProductModel.findByIdAndDelete( { _id: req.query._id } );
    res.send( "Product Deleted Success" );
  } catch ( error ) {
    res.status( 404 ).json( { error: "Error While Updating the Data" } );
  }
}
