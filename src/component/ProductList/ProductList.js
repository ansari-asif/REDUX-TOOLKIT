import React from 'react'
import { Button, Card, Col, Container } from 'react-bootstrap';
import {ProductData} from "../../ProductData.js";

const ProductList = () => {
  return (
    <Container>
        <div className="row p-3">
            {ProductData.map((product)=>{
                return (
                    
                    <Col md={3} key={product.id} >
                        <Card>
                            <Card.Img variant="top" src={product.img} alt="prudct" />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>
                                    Price : {product.price}
                                </Card.Text>
                                <Button variant="primary">Add To Cart</Button>
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