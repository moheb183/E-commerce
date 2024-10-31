
import "../components/cart.css"
import { Container, Row, Col, Button } from "react-bootstrap"
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { removeItem, addToCart, decreaseQuantity } from "../Store/Slices/cart";



export default function Cart() {
	const dispatch = useDispatch()

	const productArr = useSelector((state) => state.cart.cart_value || [])
	console.log(productArr);

	const totalPrice = productArr.reduce((acc, product) => acc + product.price * product.quantity, 0);



	return (

		<main className="main">

			<Container className=" my-3 ">
				<Row className="col-12  mx-auto border border-1 rounded ">

					<Col className="  col-md-8 col-12 " >
						<Col className="cart-Header  d-flex justify-content-between align-items-end my-2">
							<h2>Sopping Cart</h2>
							<p>{productArr.length} items</p>
						</Col>
						<hr className="mx-auto w-100 " />

						{productArr.map(product => (

							<Col className="product">

								<div className=" d-flex justify-content-around align-items-center ">
									<div className="d-flex col-4">
										<div>
											<img src={product.image} alt="im" className="  col-6" />
										</div>
										<div className=" justify-content-start col-6 ">
											<h5 className="text-nowrap overflow-hidden text-truncate   ">{product.title}</h5>
											<p>{ }</p>
										</div>
									</div>

									<div className="d-flex justify-content-around col-4 ">

										<p className="" onClick={() => dispatch(decreaseQuantity(product.id))} >-</p>
										<p>{product.quantity}</p>
										<p className="" onClick={() => dispatch(addToCart(product))}>+</p>

									</div>

									<div className="">
										<p>{product.price * product.quantity}$</p>

									</div>

									<div className=" ">

										<button type="button" class=" border border-0 bg-white" aria-label="Delate" onClick={() => { dispatch(removeItem(product.id)) }}>
											<FaTrash className=" text-danger " />
										</button>
									</div>

								</div>
								<hr className=" mx-auto w-100" />

							</Col>
						)

						)}
					</Col>
					
					<Col className=" col-md-4 col-12     text-bg-dark  "  >
						<Col className="Summary-Header my-2">
							<h2>Summary</h2>
						</Col>
						<hr className=' mx-auto w-75' />

						<Col className=" d-flex  justify-content-between">
							<p>Total Items {productArr.length}</p>
							<p>{totalPrice} $</p>
						</Col>
						<Col className=" ">
							<p>Give Code</p>
							<input type="text" placeholder="Enter Your Give Code" className="w-100 p-1" />
						</Col>
						<hr className="mx-auto" />
						<Col className=" d-flex  justify-content-between">
							<p>Total Price </p>
							<p>{totalPrice}$</p>
						</Col>

					</Col>

				</Row>


			</Container>


		</main >
	)
}

