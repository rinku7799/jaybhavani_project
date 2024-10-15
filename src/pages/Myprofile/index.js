import React, { useState } from 'react';
import Header from '../../componant/Header';
import './Myprofile.css';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Offcanvas, Form, Button, Modal, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../componant/footer';

const Myprofile = () => {
    const navigate = useNavigate();
    const [showProfileEdit, setShowProfileEdit] = useState(false);
    const [showPasswordEdit, setShowPasswordEdit] = useState(false);
    const [showMyAddress, setShowMyAddress] = useState(false);
    const [showMycredit, setShowMycredit] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleProfileEdit = () => {
        setShowProfileEdit(true);
        setShowPasswordEdit(false);
    };
    const handleMyAddres = () => {
        setShowMyAddress(true);
        setShowMycredit(false);
    }
    const handleCredit = () => {
        setShowMyAddress(false);
        setShowMycredit(true);
    }
    const handleDeleteModal = () => {
        setShowDeleteModal(!showDeleteModal);
    };

    const handlePasswordEdit = () => {
        setShowProfileEdit(false);
        setShowPasswordEdit(true);
    };

    const handleClose  = () => {
        setShowProfileEdit(false);
        setShowPasswordEdit(false);
        setShowMyAddress(false);
        setShowMycredit(false);
    };
    return (
        <>
            <Header />
            <div className='container-fluid mx-3 '>


                <div className='div mt-2 p-3'>

                    <div className='row'>
                        {/* col-9 Section */}
                        <div className='col-8 border-end col-12 col-lg-8 col-xl-8 col-xxl-8'>
                            <div className='btndiv'>
                                <button className='btnuper  border border-secondary ' onClick={() => { navigate('/') }} >
                                    <span><MdOutlineKeyboardArrowLeft /></span>
                                    <span className='fw-normal' style={{ fontSize: '14px', padding: '8px 5px 8px 0px' }} >Back to order</span>
                                </button>
                            </div>
                            <div>
                                <p className='profile-text'>My profile</p>
                            </div>

                            <div >
                                {/* First row */}
                                <div className='row '>
                                    <div className='col-6'>
                                        <div className='lables '>First name</div>
                                        <div className='sublable mb-2'>dfhudhfdhfhfhfhhe</div>
                                    </div>

                                    <div className='col-6'>
                                        <div className='lables '>Last name</div>
                                        <div className='sublable mb-2'>dfhudhfdhfhfhfhhe</div>
                                    </div>
                                </div>

                                {/* Second row */}
                                <div className='row '>
                                    <div className='col-6'>
                                        <div className='lables '>Birthdate</div>
                                        <div className='sublable mb-2'>dfhudhfdhfhfhfhhe</div>
                                    </div>

                                    <div className='col-6'>
                                        <div className='lables '>Gender</div>
                                        <div className='sublable mb-2'>dfhudhfdhfhfhfhhe</div>
                                    </div>
                                </div>

                                {/* Third row */}
                                <div className='row '>
                                    <div className='col-6'>
                                        <div className='lables '>Email</div>
                                        <div className='sublable mb-2'>dfhudhfdhfhfhfhhe</div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='lables '>Phone</div>
                                        <div className='sublable mb-2'>dfhudhfdhfhfhfhhe</div>
                                    </div>

                                    <div className='col-6'>
                                        <div className='lables '>Address</div>
                                        <div className='sublable mb-2'>dfhudhfdhfhfhfhhe</div>
                                    </div>
                                </div>

                                {/* Action row */}
                                <div className='row  mb-4 mt-2'>
                                    <div className='col-6 mt-1 col-sm-6 col-md-4 '>
                                        <div className='mt-2 text-decoration-underline text-warning' onClick={handleProfileEdit}>Edit my profile</div>
                                    </div>

                                    <div className='col-6 mt-1 col-sm-6 col-md-4 '>
                                        <div className='mt-2 text-decoration-underline ' onClick={handleDeleteModal}>Delete my profile</div>
                                    </div>
                                    <Modal closeButton show={showDeleteModal} onHide={handleDeleteModal} centered>

                                        <Modal.Body>
                                            <p className='fw-bold  text-center fs-5 mt-5'>Are you sure you want to delete your profile?</p>
                                            <p className='text-center'>This action cannot be undone.</p>

                                            < div className='d-flex justify-content-center gap-2'>
                                                <button className='border border-0  mb-5 text-decoration-underline ' style={{ background: 'none' }} onClick={handleDeleteModal}>
                                                    Cancel
                                                </button>
                                                <button className='border border-0 bg bg-warning  mb-5' style={{ borderRadius: '999px' }}  >
                                                    Delete
                                                </button>
                                            </div>
                                        </Modal.Body>

                                    </Modal>
                                    <div className='col-6 mt-1 col-sm-6 col-md-4  mt-2 '>

                                        <button className='btnuper border border-secondary'>
                                            <span><MdOutlineKeyboardArrowLeft /></span>
                                            <span className='fw-normal' onClick={handlePasswordEdit} style={{ fontSize: '14px', padding: '8px 5px 8px 0px' }}>Edit my password   </span>
                                        </button>

                                    </div>


                                </div>
                            </div>
                        </div>

                        {/* col-3 Section */}
                        <div className='col-12 col-lg-4 col-xl-4 col-xxl-4 mt-3 mt-lg-0' style={{ padding: '20px' }}>
                            <div className='col-12 col-xl-12 carddiv1 d-flex justify-content-between ' style={{ padding: '20px' }}>
                                <div>
                                    <div className='jss583'>My addresses</div>
                                    <div className=' jss584' ><span className='text-warning'>0</span> available address</div>
                                </div>

                                <div className='Plus' style={{ background: '#fecd08', borderRadius: '999px', padding: '8px', width: '40px', height: '40px' }}>
                                    <FontAwesomeIcon
                                        icon={faPlus}
                                        style={{ color: "#000000", marginInline: "5px" }}
                                        onClick={handleMyAddres}
                                    />
                                </div>
                            </div>
                            <div className='col-12 col-xl-12 carddiv2 d-flex justify-content-between ' style={{ padding: '20px' }}>
                                <div>
                                    <div className='jss583'>My credit cards</div>
                                    <div className=' jss584' ><span className='text-warning'>0</span> available cards</div>
                                </div>

                                <div className='Plus1' >
                                    <FontAwesomeIcon
                                        icon={faPlus}
                                        style={{ color: "#000000", marginInline: "5px" }}
                                        onClick={handleCredit}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Offcanvas */}
            <Offcanvas show={showProfileEdit || showPasswordEdit} onHide={handleClose} placement="end">
                {showProfileEdit ?
                    (<Offcanvas.Body>
                        <div className='offcanvas-upersec'>
                            <button className='btnuper border border-secondary' onClick={handleClose}>
                                <span><MdOutlineKeyboardArrowLeft /></span>
                                <span className='fw-normal' style={{ fontSize: '14px', padding: '8px 5px 8px 0px' }}>Back  </span>
                            </button>
                            <p className='offcanvas-upersec-title'> Edit my profile</p>
                        </div>
                        <div className='offcanvas-upersec-body'>
                            <Form>
                                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Firstname</Form.Label>
                                    <Form.Control type="text" placeholder="enter your name" style={{ padding: '10px' }} />
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Lastname</Form.Label>
                                    <Form.Control type="text" placeholder="enter your name" style={{ padding: '10px' }} />
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" placeholder="enter your name" style={{ padding: '10px' }} />
                                    <span className=' text-decoration-underline text-warning ' style={{ marginInline: '76px' }}>Address not found ?</span>
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Apt#</Form.Label>
                                    <Form.Control type="text" placeholder="Optional" style={{ padding: '10px' }} />
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="number" placeholder="enter your name" style={{ padding: '10px' }} />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Birthdate</Form.Label>
                                    <div className='d-flex gap-1'>
                                        <Form.Select aria-label="Default select example">
                                            <option>select</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </Form.Select>
                                        <Form.Select aria-label="Default select example">
                                            <option>select</option>
                                            <option value="1">january</option>
                                            <option value="2">February</option>
                                            <option value="3">march</option>
                                        </Form.Select>
                                        <Form.Select aria-label="Default select example">
                                            <option>select</option>
                                            <option value="1">2001</option>
                                            <option value="2">2002</option>
                                            <option value="3">2003</option>
                                        </Form.Select>
                                    </div>

                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>select</option>
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                        <option value="3">other</option>
                                    </Form.Select>
                                </Form.Group>

                            </Form>
                        </div>
                        <div class="p-2 w-100 bg bg-warning" >
                            <div className='bg bg-warning d-flex justify-content-center pt-2 ' style={{ height: '6vh', }}>
                                Save
                            </div></div>
                    </Offcanvas.Body>
                    ) : <Offcanvas.Body>
                        <div className='offcanvas-upersec'>
                            <button className='btnuper border border-secondary' onClick={handleClose}>
                                <span><MdOutlineKeyboardArrowLeft /></span>
                                <span className='fw-normal' style={{ fontSize: '14px', padding: '8px 5px 8px 0px' }}>Back   </span>
                            </button>
                            <p className='offcanvas-upersec-title'> Edit my profile</p>
                        </div>
                        <div className='offcanvas-upersec-body'>
                            <Form>
                                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Old password</Form.Label>
                                    <Form.Control type="password" placeholder="enter your name" style={{ padding: '10px' }} />
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Old password</Form.Label>
                                    <Form.Control type="password" placeholder="enter your name" style={{ padding: '10px' }} />
                                </Form.Group>
                            </Form>
                        </div>


                        <div className='bg bg-secondary-subtle d-flex justify-content-center pt-2 ' style={{ height: '6vh', position: 'absolute', bottom: '0px', width: '100%' }}>
                            Save
                        </div>
                    </Offcanvas.Body>

                }

            </Offcanvas>

            <Offcanvas show={showMyAddress || showMycredit} onHide={handleClose} placement='end'>
                {
                    showMyAddress ? (<>
                        <Offcanvas.Body>
                            <div className='offcanvas-upersec'>
                                <button className='btnuper border border-secondary' onClick={handleClose}>
                                    <span><MdOutlineKeyboardArrowLeft /></span>
                                    <span className='fw-normal' style={{ fontSize: '14px', padding: '8px 5px 8px 0px' }}>Back   </span>
                                </button>
                                <p className='offcanvas-upersec-title'>Add an address</p>
                            </div>
                            <div className=' border '></div>
                            <div className='offcanvas-upersec-body'>
                                <Form>
                                    <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="text" placeholder="" style={{ padding: '11px', }} />
                                        <span className=' text-decoration-underline text-warning' style={{ marginLeft: '70px' }}>Address not found ?</span>
                                    </Form.Group>
                                    <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Apt#</Form.Label>
                                        <Form.Control type="text" placeholder="" style={{ padding: '11px' }} />
                                    </Form.Group>
                                </Form>
                            </div>


                            <div className='bg bg-warning d-flex justify-content-center pt-2 ' style={{ height: '6vh', position: 'absolute', bottom: '0px', width: '100%' }}>
                              Add
                            </div>
                        </Offcanvas.Body>

                    </>) : (<>
                        <Offcanvas.Body>
                            <div className='offcanvas-upersec'>
                                <button className='btnuper border border-secondary' onClick={handleClose}>
                                    <span><MdOutlineKeyboardArrowLeft /></span>
                                    <span className='fw-normal' style={{ fontSize: '14px', padding: '8px 5px 8px 0px' }}>Back   </span>
                                </button>
                                <p className='offcanvas-upersec-title'> Add  a credit card</p>
                            </div>
                            <div className=' border '></div>
                            <div className="cardinfo-text1">
                                <p className='text-center' >
                                    CREDIT CARD INFORMATIONS
                                </p>
                            </div>
                            <div>
                                <Form.Group className="mb-2 p-2" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Cardholder's Name <span className='text-danger'>*</span></Form.Label>
                                    <Form.Control type="text" placeholder="" style={{ padding: '11px' }} />
                                </Form.Group>
                                <Form.Group className="mb-2 d-flex justify-content-between" controlId="exampleForm.ControlInput1">
                                    <div className='w-50 '>
                                        <Form.Label>Card Number <span className='text-danger'>*</span></Form.Label>
                                        <Form.Control type="number" placeholder="" style={{ padding: '11px', }} />
                                    </div>
                                    <div className='w-50 px-3'>
                                        <Form.Label>CVV/CVC <span className='text-danger'>*</span></Form.Label>
                                        <Form.Control type="number" placeholder="" style={{ padding: '11px' }} />
                                    </div>

                                </Form.Group>
                                <div className='p-2 w-50'>
                                    <Form.Label>Expiration date<span className='text-danger'>*</span></Form.Label>
                                    <Form.Control type="number" placeholder="" style={{ padding: '11px' }} />
                                </div>
                                <div class="form-check m-2">
                                    <input className="form-check-input "  type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label " for="flexCheckDefault">
                                        Do you want to save this card?
                                    </label>
                                </div>
                            </div>


                            <div className='bg bg-secondary-subtle d-flex justify-content-center pt-2 ' style={{ height: '6vh', position: 'absolute', bottom: '0px', width: '100%' }}>
                            Add
                            </div>
                        </Offcanvas.Body>
                    </>)
                }
            </Offcanvas>
                <Footer/>
        </>
    );
};

export default Myprofile;
