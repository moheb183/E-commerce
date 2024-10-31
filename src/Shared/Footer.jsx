
import '../Shared/footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {

    return (


        <footer className="bg-dark text-white text-center  w-100">
            <div className="container p-4">
                <section className="mb-4">
                    <a className="btn btn-outline-light  m-1" href="#!" role="button">
                        <FaFacebook />
                    </a>
                    <a className="btn btn-outline-light  m-1" href="#!" role="button">
                        <FaTwitter />
                    </a>
                    <a className="btn btn-outline-light  m-1" href="#!" role="button">
                        <FaGoogle />
                    </a>
                    <a className="btn btn-outline-light m-1" href="#!" role="button">
                        <FaInstagram />
                    </a>
                    <a className="btn btn-outline-light  m-1" href="#!" role="button">
                        <FaLinkedin />
                    </a>
                    <a className="btn btn-outline-light  m-1" href="#!" role="button">
                        <FaGithub />
                    </a>
                </section>

                <section>
                    <form action="">
                        <div className="row d-flex justify-content-center">
                            <div className="col-auto">
                                <p className="pt-2">
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </div>

                            <div className="col-md-5 col-12">
                                <div className="form-outline mb-4">
                                    <input type="email" id="fore   " placeholder='Email address' className="form-control" />
                                    <label className="form-label text-white" htmlFor="fore"></label>
                                </div>
                            </div>

                            <div className="col-auto">
                                <button type="submit" className="btn btn-outline-light mb-4">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </form>
                </section>

                <section className="mb-4">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam eum
                        harum corrupti dicta, aliquam sequi voluptate quas.
                    </p>
                </section>

                <section>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled mb-0">
                                <li><a className="text-white" href="#!">Help Center</a></li>
                                <li><a className="text-white" href="#!">Returns & Refunds</a></li>
                                <li><a className="text-white" href="#!">Shipping Information</a></li>
                                <li><a className="text-white" href="#!">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled mb-0">
                                <li><a className="text-white" href="#!">Company Information</a></li>
                                <li><a className="text-white" href="#!">Careers</a></li>
                                <li><a className="text-white" href="#!">Sustainability</a></li>
                                <li><a className="text-white" href="#!">Press Releases</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled mb-0">
                                <li><a className="text-white" href="#!">Men's Clothing</a></li>
                                <li><a className="text-white" href="#!">Women's Clothing</a></li>
                                <li><a className="text-white" href="#!">Accessories</a></li>
                                <li><a className="text-white" href="#!">Sale Items</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled mb-0">
                                <li><a className="text-white" href="#!">FAQ</a></li>
                                <li><a className="text-white" href="#!">Privacy Policy</a></li>
                                <li><a className="text-white" href="#!">Become a Reseller</a></li>
                                <li><a className="text-white" href="#!">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

            <div className="text-center p-3 bg-dark " >
                © 2020 Copyright :
                <a className="text-reset fw-bold text-decoration-none" href="/#"> The Maestro</a>
            </div>
        </footer>


    )
}








