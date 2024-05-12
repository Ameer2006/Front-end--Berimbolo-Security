import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="border  py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3 className='mb-3'>Contact Us</h3>
                        <ul className="list-unstyled mb-5 ">
                            <Link to="mailto:berimbolo@org.com" className=' link-underline-light  '><li className='mb-3 list-group-item'> <span>Email </span>:berimbolo@org.com </li></Link>
                            <Link to="tel:+1 555 902-8832" className=' link-underline-light  '><li className='mb-3 list-group-item' ><span>WhatsApp </span>:+1 555 902-8832 </li></Link>
                            <Link to="tel:+1 555 902-8832" className=' link-underline-light  '><li className='mb-3 list-group-item' ><span>phone </span>:+1 555 902-8832 </li></Link>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3 className='mb-3'>Quick Links</h3>
                        <ul className="list-unstyled">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/productes">Productes</Link></li>
                            <li><Link to="/FAQs">FAQs</Link></li>
                            <li><Link to="/contact">Contact us</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3 className='mb-3'>Subscribe</h3>
                        <p>Stay updated with our latest news and <br />products.</p>
                        <form>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control  " placeholder="Enter your email" required />
                                <div className="input-group-append">
                                    <a className="btn btn-outline-primary ms-2" href="#">Subscribe </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>

    )
}
