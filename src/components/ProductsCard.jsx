import 'bootstrap/dist/css/bootstrap.min.css';
import '../images/6203625f2423424c91b2fe7b2786a4df.png';
import { FaRegHeart, FaStar, FaShoppingCart } from 'react-icons/fa';
import "react-bootstrap"
import "../components/productscards.css"
import axios from "axios"
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../Store/Slices/cart';
import { useDispatch } from 'react-redux';


export default function ProductsCard() {

    const [Products, setProducts] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {

        axios.get("https://fakestoreapi.in/api/products")
            .then(response => {
                console.log(response.data.products)
                if (Array.isArray(response.data.products)) {
                    setProducts(response.data.products)
                } else {
                    console.log("data is not array ");
                }
            })
            .catch(error => {
                console.log("error fetching data ", error);
            })
    }, [])


    const handleProductClick = (id) => {
        navigate(`/product/${id}`)

    }


    return (
        <div className='mx-auto '>
            <div className='my-3 text-center mx-auto'>
                <div className=' text-center  fs-3 me-5' >
                    <h2 >Our Trending <span className=' text-danger'> Products</span></h2>
                </div>
            </div>
            <hr className='mx-auto' />
            <div className='row mx-auto container pt-3'>
                {Products.map(product => (
                    <div className='col-12 col-sm-6 col-md-4 col-lg-3  ' >
                        <main className="border rounded-2 p-2">

                            <div className='image-container text-center object-fit-contain m-1' key={product.id}
                                onClick={() => handleProductClick(product.id)} >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className='product-image'
                                />
                            </div>
                            <div className='stars mb-2 d-flex justify-content-between'>
                                <span className='d-flex'>
                                    <FaStar size={15} color="gold" className="m-1" />
                                    <FaStar size={15} color="gold" className="m-1" />
                                    <FaStar size={15} color="gold" className="m-1" />
                                    <FaStar size={15} color="gold" className="m-1" />
                                    <FaStar size={15} color="grey" className="m-1" />
                                </span>
                                <i className=' '>
                                    <FaRegHeart size={15} color="red" />
                                </i>
                            </div>
                            <div className='text-capitalize'>
                                <h2 className='fs-5' >{product.title}</h2>
                                <h5 className='fs-6 '>{product.description}</h5>
                                <p>price: {product.price}$</p>
                            </div>
                            {/* <div className='col-12 '>
                                <div className='mx-auto w-75'> */}
                            <button className=' btn btn-outline-dark col-12 ' onClick={() => { dispatch(addToCart(product)) }}>
                                Add To Cart <FaShoppingCart size={20} color="green" />
                            </button>
                            {/* </div>
                            </div> */}
                        </main>

                    </div>
                ))}
            </div>



        </div>

    )
}