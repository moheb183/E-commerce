import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import "../components/productsdetalis.css"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { addToCart, updateQuantity } from '../Store/Slices/cart';
import { useDispatch } from 'react-redux';





export default function ProductsDetalis() {

    const [Product, setProduct] = useState(null)
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`https://fakestoreapi.in/api/products/${id}`)
            .then((response) => {
                setProduct(response.data.product)
                console.log(response.data.product);

            })
            .catch((error) => {
                console.log("error fetching product ", error);
            })


    }, [id])



    if (!Product) {
        return <p>Loading...</p>;
    }
    return (

        <Container className="product-page">
            <Row className="my-4 ">

                <Col xs={12} md={3}>
                    <img src={Product.image} alt={Product.name} className=' img-fluid rounded' />
                </Col>
                <Col md={3}>
                    <Row className=''>
                        <Col xs={6} >
                            <img src={Product.image} alt={Product.name} className=' img-fluid rounded' />
                        </Col>
                        <Col xs={6}>
                            <img src={Product.image} alt={Product.name} className=' img-fluid rounded' />
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={6} xs={2}>
                            <img src={Product.image} alt={Product.name} className=' img-fluid rounded' />
                        </Col>
                    </Row>

                </Col>


                <Col xs={12} md={6}>
                    <div className='ms-5'>
                        <h3>{Product.title}</h3>
                        <div className="rating">
                            ⭐⭐⭐⭐⭐ (328 Reviews)
                        </div>
                        <p className="price">
                            <span className="current-price">${Product.price}</span>
                            {/* <span className="old-price">$600</span> */}
                        </p>

                        <div className="color-selection my-3">
                            <p>Select Color</p>
                            <Button variant="outline-dark" className="color-option"></Button>
                            <Button variant="outline-light" className="color-option"></Button>
                        </div>

                        <div className="size-selection my-3">
                            <p>Select Size</p>
                            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                <Button key={size} variant="outline-dark" className="size-option">
                                    {size}
                                </Button>
                            ))}
                        </div>

                        <Form.Group className="quantity-selection my-3">
                            <Form.Label >Quantity</Form.Label>
                            <Form.Control type="number" min="1" defaultValue= "1" />
                        </Form.Group>

                        <div className="action-buttons">
                            <Button variant="dark" className="me-2" onClick={() => { dispatch(addToCart(Product)) }}>Add to Cart</Button>
                            <Button variant="secondary">Buy It Now</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>



    )
}