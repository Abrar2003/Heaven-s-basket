// Controller

import ProductModel from "../models/products";




// get : http://localhost:3000/api/product
export async function getProduct(req, res) {
  try {
   const getprod = await ProductModel.find()
   if(!getprod)return res.status(404).json({error:'Data Not Found'})
   res.status(200).json(getprod)
    // res.send('Hello Get data')
  } catch (error) {
    console.log(error);
  }
}

// post : http://localhost:3000/api/product

export async function postProduct(req,res){
    try{
        const postProd = req.body;
        if(!postProd)return res.statu(404).json({error:'error'})
        const newProduct= ProductModel(postProd);
        await newProduct.save()
        console.log(newProduct)
        res.status(200).json({newProduct})

    }catch(error){
        return res.status(404).json({error})
    }
} 

// put : http://localhost:3000/api/product
export async function putProduct(req,res){
  console.log(req.param.id)
try{  
  // const {productId} = req.query
  // const productData = req.body
  // if(productId && productData){
  //  const updateProduct= ProductModel.findByIdAndUpdate(productId,productData);
  //   await updateProduct.save()
  //   console.log(updateProduct)

  //  res.status(200).json({updateProduct})
  //  }
  res.status(2002).json(req.params._id)
}catch(error){
  res.status(404).json({error:"Error While Updating the Data"})
}
}

export async function deleteProduct(req,res){
  console.log(req.query.id)
try{
  await ProductModel.findByIdAndDelete({_id:req.query.id})
  res.send("User Deleted Success")
}catch(error){
  res.status(404).json({error:"Error While Updating the Data"})
}
}
