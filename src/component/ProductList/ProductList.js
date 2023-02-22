import React from 'react'
import { Button, Card, Col, Container } from 'react-bootstrap';
import {addToCart} from '../../RTK/Slices/CartSlices'
import {useDispatch, useSelector} from "react-redux"
    
const ProductList = () => {

    const allCart=useSelector((state) =>state.allCart);
    const dispatch=useDispatch();

  return (
    <Container>
        <div className="row p-3">
            {allCart.items.map((product)=>{                
                return (                    
                    <Col md={3} key={product.id} className="py-1">
                        <Card>
                            <Card.Img variant="top" src={product.img} alt="prudct" style={{height:"200px"}} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>
                                    Price : {product.price}
                                </Card.Text>
                                <Button variant="primary" onClick={()=>dispatch(addToCart(product))}>Add To Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })}
        </div>
    </Container>
  )
}

export default ProductList