import "../components/HeroSection.css"
import { Link } from "react-router-dom";

export default function HeroSection() {

    return (

        <div className="hero-section">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-md-8 text-center">
                        <div className="content text-capitalize">
                            <h1 className="fs-2">Online <span className="text-danger">Shopping</span></h1>
                            <h4 className="fs-3"><span className="text-danger">There</span> is nothing like trend</h4>
                            <h5 className="fs-5 p-1 text-danger">The Maestro</h5>

                            <Link to="/Deals">
                                <button className="btn btn-outline-dark mt-3 ">Best Deals</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}