import React, { useState } from 'react';
import { Button, Modal, Row, Col, Form, Card, Nav, InputGroup, CardBody , FormControl } from 'react-bootstrap';
import { PiPoliceCarThin, PiBagThin } from 'react-icons/pi';
import { MdLocationOff } from "react-icons/md";
import './OrderAdress.css';
import img3 from '../../componant/assets/bag_1250555.png'
import carimg from '../../componant/assets/imgpsh_fullsize_anim (4).png'
import { IoSearch } from "react-icons/io5";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

export const OrderAddress = ({ showModal, onCloseModal }) => {
    const [selectedTab, setSelectedTab] = useState('By Address');
    const [address, setAddress] = useState('');
    const [aptNumber, setAptNumber] = useState('');
    const [deliveryOption, setDeliveryOption] = useState('takeout');

    const handleTabChange = (tabKey) => {
        setSelectedTab(tabKey);
    };
    
    const handleDeliveryOptionChange = (option) => {
        setDeliveryOption(option);
    };

    const handleOkClick = () => {
        onCloseModal();
    };
 return (
        <>
        <Modal 
             show={showModal}
             onHide={handleOkClick}
              className="d-flex  flex-column " 
               centered 
                >
                <Modal.Header closeButton  className='d-flex justify-content-center Order-headerAddress'>
                    <Modal.Title className=' text-center fs-5  '>YOUR ORDER </Modal.Title>

                </Modal.Header>

                <Modal.Body className='ModalMainbody' >
                <Row>
                        <Col lg='12'>
                            <div className='d-flex justify-content-center gap-3 align-items-center'>
                                <div
                                    className={`d-flex gap-1 align-items-center px-2 rounded-5 Orderbtn1 ${deliveryOption === 'takeout' ? 'active' && 'bg-warning' : ''}`}
                                    onClick={() => handleDeliveryOptionChange('takeout')}
                                >
                                    <span className='Orderbtnicon1'>
                                        <img src={img3} alt='imag' style={{ height: '18px', width: '22px', marginTop: '-6px' }} />
                                    </span>
                                    <span className='Orderbtn1'>Takeout</span>
                                </div>
                                <div
                                    className={`d-flex gap-2 align-items-center px-3 rounded-5 Orderbtn2 ${deliveryOption === 'delivery' ? 'active' && 'bg-warning' : ''}`}
                                    onClick={() => handleDeliveryOptionChange('delivery')}
                                >
                                    <span className='Orderbtnicon1'><img src={carimg} style={{ height: '18px', width: '22px', marginTop: '-6px' }} /></span>
                                    <span className='Orderbtn2'>Delivery</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className='border border-top mt-2' ></div>

                    {deliveryOption === 'takeout' ? (
                        <Modal.Body className=" d-flex flex-column model1 orderAddBody rounded-4 model3">
                        <span className='fs-5 fw-bold text-center' style={{color:' rgb(51, 51, 51)'}}>Choose a restaurant</span>

                        <Row>
                            <Col md='12' className='d-flex justify-content-around '>
                                <div className='text-decoration-none p-0 AddressNav' >
                                    <Nav variant="underline" defaultActiveKey="By Address"  >
                                        <Nav.Item className='p-2 fw-medium'>
                                            <Nav.Link 
                                            eventKey='By Address '
                                                onClick={() => handleTabChange('By Address')}
                                                className={selectedTab === 'By Address' ? 'text-warning' : 'text-dark'}
                                            >By address</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='p-2 fw-medium'>
                                            <Nav.Link eventKey='By Location'
                                                onClick={() => handleTabChange('By Location')}
                                                className={selectedTab === 'By Location' ? 'text-warning' : 'text-dark'}
                                            >By location</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='p-2 fw-medium' >
                                            <Nav.Link
                                             eventKey='By City'
                                                onClick={() => handleTabChange('By City')}
                                                className={selectedTab === 'By City' ? 'text-warning' : 'text-dark'}
                                            >By city</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                            </Col>
                        </Row>
                        {/* Add an input field for the address */}
                        {selectedTab === 'By Address' && (
                            <div>
                                <Form>
                                    <Form.Label >Address</Form.Label>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            type="text"
                                            placeholder="Enter address"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            style={{borderRight:"none"}}
                                        />
                                          <OverlayTrigger
                                            placement="top"
                                            overlay={<Tooltip  style={{ backgroundColor: 'yellow',position:"fixed" }}>Cilck to search</Tooltip>}
                                            >
                                        <InputGroup.Text className='bg-white'><IoSearch style={{color: "#fecd08"}}/></InputGroup.Text>
                                        </OverlayTrigger>
                                    </InputGroup>
                                    <p className='mt-1 text-center text-warning text-decoration-underline fw-medium'>Address not found?</p>

                                    <Form.Label >Apt#</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </Form>
                                <div className='mt-3' >
                                    <Card >
                                        <CardBody className="d-flex align-items-center justify-content-between Addcard1" >

                                            <div >
                                                <p className='text-left' style={{ fontSize: '16px', fontWeight: 'bold', fontStyle: 'normal', lineHeight: '0' }}>Etobicoke</p>
                                                <span className=' text-left' >1630 Albion Road, Toronto, Ontario, M9V 5H5</span>
                                            </div>

                                            <div className='mb-3'>
                                                <input type="radio"
                                                    name="location"
                                                    className='radiobtn'
                                                />
                                            </div>
                                        </CardBody>
                                    </Card>
                                    <Card className='mt-3'>
                                        <CardBody className="d-flex align-items-center justify-content-between Addcard1" >

                                            <div >
                                                <p className='text-left ' style={{ fontSize: '16px', fontWeight: 'bold', fontStyle: 'normal', lineHeight: '0' }}>Etobicoke</p>
                                                <span className=' text-left' >1630 Albion Road, Toronto, Ontario, M9V 5H5</span>
                                            </div>

                                            <div className=' mb-3'>
                                                <input type="radio"
                                                    name="location"
                                                    className='radiobtn'
                                                />
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                                <p className='mt-2 text-center text-warning text-decoration-underline fw-medium'>see more results(1)</p>
                            </div>)}

                        {selectedTab === 'By Location' && (
                            <div>
                                <div >
                                    <Card.Body className='card-attantion' >
                                        <span ><MdLocationOff
                                            className='Attantion-icon'
                                            style={{ height: '25px', width: '25px', margin: '7px 5px 2px 2px' }} /></span>
                                        <p className='P-Attantion' >
                                            Attention! Restaurants are shown in an alphabetic order since the geolocation is deactivated
                                        </p>
                                    </Card.Body>
                                </div>
                                <Card >
                                        <CardBody className="d-flex align-items-center justify-content-between Addcard1" >

                                            <div >
                                                <p className='text-left' style={{ fontSize: '16px', fontWeight: 'bold', fontStyle: 'normal', lineHeight: '0' }}>Etobicoke</p>
                                                <span className=' text-left' >1630 Albion Road, Toronto, Ontario, M9V 5H5</span>
                                            </div>

                                            <div className='mb-3'>
                                                <input type="radio"
                                                    name="location"
                                                    className='radiobtn'
                                                />
                                            </div>
                                        </CardBody>
                                    </Card>
                                <div>
                                    <div className='border mt-3 mb-3'></div>
                                    <h5 className='text-center fw-semibold '>Day and hour for pickup</h5>
                                    <div className='d-flex gap-2 mt-3'>
                                        <Form.Select aria-label="Default select example">
                                            <option>Choose City</option>
                                            <option value="1">Surat</option>
                                            <option value="2">baroda</option>
                                            <option value="3">Bhavnagar</option>
                                        </Form.Select>
                                        <Form.Select aria-label="Default select example">
                                            <option>Choose City</option>
                                            <option value="1">Surat</option>
                                            <option value="2">baroda</option>
                                            <option value="3">Bhavnagar</option>
                                        </Form.Select>
                                    </div>
                                    <div className='border mt-3 mb-3'></div>
                                    <div>
                                        Notes for counter
                                        <Card.Body className='rounded-3 border' style={{ minHeight: '60px' }}>

                                        </Card.Body>
                                    </div>

                                </div>

                                <p className='mt-2 text-center text-warning text-decoration-underline fw-medium'>see more results(1)</p>
                            </div>




                        )}
                        {selectedTab === 'By City' && (
                            <div>

                                <Form.Select aria-label="Default select example" >
                                    <option>Choose City</option>
                                    <option value="1">Surat</option>
                                    <option value="2">baroda</option>
                                    <option value="3">Bhavnagar</option>
                                </Form.Select>
                            </div>




                        )}
                    </Modal.Body>
                    ) : (
                       
                        <Modal.Body className='model2 d-flex flex-column model1 orderAddBody rounded-4'>
                        <span className='fs-5 fw-bold text-center' style={{color:' rgb(51, 51, 51)'}}>Enter your Address</span>
                            <div>
                            <Form>
                                    <Form.Label >Address</Form.Label>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            type="text"
                                            placeholder="Enter address"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            style={{borderRight:"none"}}
                                        />
                                          <OverlayTrigger
                                            placement="top"
                                            overlay={<Tooltip  style={{ backgroundColor: 'yellow',position:"fixed" }}>Cilck to search</Tooltip>}
                                            >
                                        <InputGroup.Text className='bg-white'><IoSearch style={{color: "#fecd08"}}/></InputGroup.Text>
                                        </OverlayTrigger>
                                    </InputGroup>
                                    <p className='mt-1 text-center text-warning text-decoration-underline fw-medium'>Address not found?</p>

                                    <Form.Label >Apt#</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </Form>
                            </div>
                        </Modal.Body>
                    )}
                </Modal.Body>
                <Modal.Footer className='Order-add-footer bg bg-warning text-dark' >
                    <span onClick={handleOkClick}>Ok</span>
                </Modal.Footer>
            </Modal >


        </>
    );
};
