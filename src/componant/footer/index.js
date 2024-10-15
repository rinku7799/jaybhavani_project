import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div>

            <div className="container-fluid" style={{ background: 'rgb(9, 52, 85)', color: '#fecd08', fontStyle: '"Lato", sans-serif',position:'sticky' }}>
                <footer className="py-5">
                    <div className="row">
                        <div className="col-md-5 ">
                            <form className=' d-flex flex-column mt-0'>
                                <img
                                    src="https://storage.googleapis.com/ueat-assets/064e28bc-4519-4b68-9a88-bfc1c665ce2a.png"
                                    alt="Jay Bhavani Vadapav"
                                    style={{height:'70px',width:'70px'}}/>
                                <h1 className='mb-2 fw-bold'>Jay Bhavani Vadapav</h1>
                                <h5>Subscribe to our newsletter to get the latest update</h5>
                                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                    <div className="input-group">
                                        <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                        <button className="btn btn-primary border border-warning" type="button">Subscribe</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-6 col-md-2 offset-md-1  " >
                            <h5 className='mb-3 fw-bold'>My Account</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link  to='/account' className="nav-link p-0 text-warning">Profile</Link></li>
                                <li className="nav-item mb-2"><Link to='/account' className="nav-link p-0 text-warning">Address</Link></li>
                                <li className="nav-item mb-2"><Link to='/' className="nav-link p-0 text-warning">My Order</Link></li>
                           
                            </ul>
                        </div>
                        <div className="col-6 col-md-2 offset-md-1 ">
                            <h5 className='mb-3 fw-bold'>Quick Links</h5>
                            <ul className="nav flex-column" >
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-warning">contact us</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-warning">Privancy Policy</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-warning">Terms & Conditions</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-warning">About Us</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>

        </div>
    )
}
