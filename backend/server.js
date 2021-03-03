import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import products from './data/products.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import { notFound , errorHandler} from './middleware/errorMiddleware.js'
import path from 'path'
//var path = require('path');

dotenv.config()
connectDB()

const app = express()


app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

const __dirname = path.resolve()



if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))  
    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname , 'frontend','build','index.html'
        ))
    })
} else { 
    
    app.get('/', (req, res) => {
        res.send('Api Products running.......now')
    })
}



const PORT = process.env.PORT

app.listen(PORT,console.log(`App running on (((( ${process.env.NODE_ENV} )))) mode port ((((..... ${PORT} ....)))) `.yellow.bold))
