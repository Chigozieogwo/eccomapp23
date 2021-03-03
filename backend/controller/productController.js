import express from 'express'
import asyncHandler from 'express-async-handler'
import Products from '../model/productModel.js'


//@Desc     Fetch all products
//@routes   GET api/products
//@access   Public


const getProduct = asyncHandler( async (req, res) => {
    const products = await Products.find({})
    
    res.json(products)
})


//@Desc     Fetch single product
//@routes   GET api/product
//@access   Public

const getProductById = asyncHandler( async (req, res) => {
    
    const product = await Products.findById(req.params.id)
   
    if (product) {

        res.json({product})
    } else {
        res.status(404)
        throw new Error('Product Not Found')
    }

})

export { getProduct ,getProductById}