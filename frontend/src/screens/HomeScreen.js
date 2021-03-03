import React from 'react'
import { useEffect } from 'react'
import  LoaderSpinner from '../components/Loader'
import  Message from '../components/Message'
import { useDispatch , useSelector} from 'react-redux'
import Product from '../components/Product'
import { Container, Row, Col } from 'react-bootstrap'
import { listProducts } from '../actions/productAction'

const HomeScreen = () => {
    
    const dispatch = useDispatch()

    useEffect(() => {
       
       dispatch(listProducts())
   }, [dispatch ])
    
    const productList = useSelector(state => state.productList)

    const { loading, error, products } = productList
    
    return (
        <Container>
            <h1 className="text-center"> Latest Products</h1> 

            {loading ? < LoaderSpinner/> : error ? <Message variant = 'danger'>{error}</Message> :
                
            <Row>
                {products.map((product,index) => (
                    <Col key={index} sm={12} md={6} lg ={4} xl={3}>
                        <Product product={product}/>
                    </Col>
                ))}
            </Row>}
            
        </Container>
    )
}

export default HomeScreen
