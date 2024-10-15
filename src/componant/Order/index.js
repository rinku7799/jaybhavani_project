import { Button, CardImg, Col, Form, Modal, ModalBody, Row } from "react-bootstrap";
import '../Order/order.css'
import { useLayoutEffect, useState } from "react";
import img3 from '../../componant/assets/bag_1250555.png'
import carimg from '../../componant/assets/imgpsh_fullsize_anim (4).png'
import { PiPoliceCarThin, PiBagThin } from "react-icons/pi";
import { OrderAddress } from "../OrderAdress";

const Order = () => {
    const [showMOdal1, setShowModal1] = useState(true)
    const [showModal, setShowModal] = useState(false);
    const handleClose =()=>{
        setShowModal1(false)
    }
  const handleOpenModal = () => {
            setShowModal(true); 
            setShowModal1(false);
    };
    
    const closeModal = () => {
        setShowModal(false)
    }

    // console.log("showModal", showModal);

    return (
        <>
            <Modal show={showMOdal1}  
            onHide={handleClose} className=" d-flex  justify-content-around " centered>
                <Modal.Header closeButton className=" d-flex justify-content-center Order-header" >
                    <Modal.Title className="text-center fs-5"  style={{color:'rgb(9, 52, 85)'}}> YOUR ORDER</Modal.Title>
                </Modal.Header>
                <Modal.Body className="fw-bold fs-4  d-flex flex-column p-5 text-center orderBody " >
                    Choose your order type
                    <Row>
                        <Col lg='12'>
                            <div style={{margin:'40px 0', padding:' 0  27px'}} >
                                <div className="d-flex mt-3 justify-content-center gap-4 align-items-center">
                                    <div
                                        className="border border-light-subtle p-3 px-5 Shopbagdiv "
                                        onClick={() => handleOpenModal()}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img src={img3} className="shopbag" />
                                        <h6 className="mt-2 text-takeout" >Takeout</h6>
                                    </div>
                                    {showModal && (
                                        <OrderAddress showModal={showModal} onCloseModal={closeModal} />
                                    )}
                                    <div className="border border-light-subtle p-3 px-5 cardiv"
                                    //   onClick={() => handleOpenModal()}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img src={carimg} className="caricon" />
                                        <h6 className="mt-2  text-takeout" >Delivery</h6>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Modal.Body>

            </Modal>
        </>
    );
}



export default Order;