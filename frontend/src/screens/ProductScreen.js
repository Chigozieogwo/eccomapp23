// eslint-disable-next-line react-hooks/exhaustive-deps

import React , {useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { Row, Col, Button ,Image ,ListGroup,Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../components/Ratings'

import { listProductDetails } from '../actions/productAction'
import LoaderSpinner from '../components/Loader'
import Message from '../components/Message'



const ProductScreen = ({ match }) => {
  
    const dispatch = useDispatch();
    
    const productDetails = useSelector(state => state.productDetails);
    
    const { loading, error, product   } = productDetails
    
    
   // console.log(product);
    
    useEffect(() => {
        
       dispatch(listProductDetails(match.params.id))
          
    }, [dispatch, match])
    
    
    return (
        <Container fluid="true">
            <Link to='/' className='btn btn-success my-3 '>
                Go Back
            </Link>
            {loading? <LoaderSpinner /> : error ? <Message>{error}</Message> : (
             <Row>
             <Col md = {6}>
                 <Image src={product.image} alt={product.name} fluid="true" />
             </Col>
             <Col md = {3}>
                 <ListGroup variant='flush' fluid="true">
                     <ListGroup.Item variant="dark"> <h3> {product.name} </h3></ListGroup.Item>
                     <ListGroup.Item> <Rating value={product.rating} text= { `${product.numReviews} reviews` } /></ListGroup.Item>
                     <ListGroup.Item> <h6> Price :${product.price} </h6></ListGroup.Item>
                     <ListGroup.Item> Description :{product.description}</ListGroup.Item>
                 </ListGroup>
                 
             </Col>
             <Col md={3}>
                 <Card>
                     <ListGroup variant='flush'>
                         <ListGroup.Item>
                             <Row>
                                 <Col> Price :</Col>
                                 <Col> <strong> $ {product.price} </strong></Col>
                             </Row>
                         </ListGroup.Item>
                         <ListGroup.Item>
                             <Row>
                                        <Col> Status :</Col>
                                        <Row>
                                            <Col> {product.countinStock > 0 ? 'available' : 'unavailable'}</Col>
                                            <Col>( {product.countinStock } )</Col>
                                        </Row>
                                 
                             </Row>
                         </ListGroup.Item>
                         <ListGroup.Item>
                             <Button  className='btn-block btn-success' disabled={product.countinStock === 0}>Add to Cart</Button>
                         </ListGroup.Item>
                     </ListGroup>
                 </Card>
             </Col>
         </Row>
            )}
           
            
        </Container>
    )
}

export default ProductScreen
