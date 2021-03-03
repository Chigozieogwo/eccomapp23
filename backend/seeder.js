import mongoose from 'mongoose'
import colors from 'colors'
import dotenv from 'dotenv'
import users from './data/users.js'
import products from './data/products.js'
import User from './model/userModel.js'
import Product from './model/productModel.js'
import Order from './model/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {

   try {
         await User.deleteMany()
         await Product.deleteMany()
         await Order.deleteMany()
       
       const createdUsers = await User.insertMany(users)
       const adminUser = createdUsers[0]._id

       const sampleProducts = products.map(product => {
           return { ...product ,user : adminUser}
       })
       await Product.insertMany(sampleProducts)

       console.log('<<<<<<<<< Data Imported >>>>>>>>>>>>'.yellow.bgGreen.bold)
       process.exit()


     
   } catch (error) {
       console.error(`Error : ${error.message}`.red.bgYellow);
       process.exit(1)
   }

}

const destroyData = async () => {

   try {
         await User.deleteMany() 
         await Product.deleteMany()
         await Order.deleteMany()

       console.log('Data destroyed'.red.bgCyan.bold)
       process.exit()
     
   } catch (error) {
       console.error(`Error : ${error.message}`.red.inverse);
       process.exit(1)
   }

}


if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}