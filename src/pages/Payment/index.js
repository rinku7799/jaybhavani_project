import React, { useState } from "react";
import './payment.css'
import img7 from '../../componant/assets/imgpsh_fullsize_anim (6).png'
import img8 from '../../componant/assets/imgpsh_fullsize_anim (7).png'
import img9 from '../../componant/assets/imgpsh_fullsize_anim (8).png'
import Header from "../../componant/Header";
import { Button, Card, Form } from "react-bootstrap";
import { OrderAddress } from "../../componant/OrderAdress";
import img10 from '../../componant/assets/imgpsh_fullsize_anim (9).png'
import img6 from '../../componant/assets/imgpsh_fullsize_anim (5).png'
import { MdKeyboardArrowRight ,} from "react-icons/md";
import { IoChevronBack } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const PaymentContainer = () => {
  const navigate= useNavigate()
  const [showModal, setShowModal] = useState(false);
  const [showorderModal, setShoworderModal] = useState(false);
  
  const handleOpenModal = () => {
    setShowModal(true);
    setShoworderModal(true)
  };
  const handleCloseModal = () => {
    console.log('hello')
    setShowModal(false);
    setShoworderModal(false)

  };
  return (
    <>
      <Header />

      <div className="row" >
        <div className="col-3 coldiv3 border border-end first-sec p-3"  >
          <div className=" jss6504">
            <img src={img7} alt="img" style={{ height: '50px', width: '150px' }} />
          </div>
          <div style={{ border: '1px dashed #D3D3D3' }}></div>
          <p className="jss3583">Your personal information</p>

          <div style={{ borderBottom: '1px dashed #D3D3D3', height: '443px' }}>

          </div>
          <p className="jss3583">Your order information</p>
        </div>
        <div className=" col-5 coldiv5 col-md-9  col-xl-5 border  px-0 py-0"  >
          <div className="mainDiv ">

            <p className="tip-text">TIP FOR THE COUNTER</p>
            <div className="d-flex justify-content-between  " >
              <button className="border border-warning" style={{ width: '45px', height: '45px', background: 'none', borderRadius: "90%" }}> 0%</button>
              <button className="border border-warning" style={{ width: '45px', height: '45px', background: 'none', borderRadius: "90%" }}> 10%</button>
              <button className="border border-warning" style={{ width: '45px', height: '45px', background: 'none', borderRadius: "90%" }}> 15%</button >
              <button className="border border-warning" style={{ width: '45px', height: '45px', background: 'none', borderRadius: "90%" }}>18%</button >
              <button className="border border-warning" style={{ width: '45px', height: '45px', background: 'none', borderRadius: "90%", fontSize: '15px' }}> other</button >
            </div>
            <div className="totaldiv">
              Total <span className="text-warning">$1.80</span>
            </div>
            <div className="cardinfo-text">
              <p >
                CREDIT CARD INFORMATIONS
              </p>
              <p className="require-text">
                <span className="text-danger">*</span>Required fields
              </p>
            </div>
            <div className="card-div gap-5">
              <Button className="border border-dark-subtle" > <img src={img8} className="visa-img" /></Button>
              <Button className="border border-dark-subtle" > <img src={img9} className="visalogo-img" /></Button>
            </div>
            <div className="mt-2 jss3515" >
              <label >
                Cardholder's Name<span className="text-danger">*</span> </label>
              <input type="text" className="form-control border-subtel " style={{ padding: '12px' }} id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className=" carddetaildiv mt-2">
              <div className="col-7 -1 gap-2 jss3515">
                <label>
                  Card Number<span className="text-danger">*</span> </label>
                <input type="text" className="form-control border-subtel " style={{ padding: '12px' }} placeholder="name@example.com" />
              </div>

              <div className=" col-4 coldiv4 jss3515">
                <label>
                  CVV/CVC<span className="text-danger">*</span> </label>
                <input type="text" className="form-control border-subtel " style={{ padding: '12px' }} placeholder="name@example.com" />
              </div>
            </div>
            <div className="col-5 coldiv5 jss3515">
              <label>
                Expiration date<span className="text-danger">*</span> </label>
              <input type="text" className="form-control border-subtel " style={{ padding: '12px' }} placeholder="name@example.com" />
            </div>

            <div class="form-check jss3515">
              <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label mx-3" for="flexCheckDefault">
                Do you want to save this card?
              </label>
            </div>
          </div>

          <div style={{ border: '1px dashed #efefef' }}></div>
          <div className="formdiv jss3515">
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Firstname<span className="text-danger">*</span></Form.Label>
                <Form.Control type="email" style={{ padding: '12px' }} placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Lastname<span className="text-danger">*</span></Form.Label>
                <Form.Control type="email" style={{ padding: '12px' }} placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email<span className="text-danger">*</span></Form.Label>
                <Form.Control type="email" style={{ padding: '12px' }} placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Phone number<span className="text-danger">*</span></Form.Label>
                <Form.Control type="email" style={{ padding: '12px' }} placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  name="terms"
                  label="Receive a confirmation of your order by sms"
                />
                <span className="fst-italic text-body-secondary mx-4">Cellphone only</span>
              </Form.Group>
            </Form>
          </div>
          <div style={{ border: '1px dashed #efefef' }}></div>
          <div className="order-sec">
            <Card style={{ width: 'auto' }}>
              <Card.Body className="d-flex justify-content-around">
                <div>
                  <img src={img10} style={{ height: '25px', width: '23px', marginTop: '5px' }} />
                </div>
                <div>
                  <p style={{
                    marginBottom: '2px', color: ' #fecd08',
                    fontStyle: "normal", fontWeight: "bold",
                    fontSize: '17px'
                  }}>Takeout</p>
                  {/* textOverflow: "ellipsis", */}
                  <span style={{
                    color: ' #6a6c6e',
                    fontSize: "15px", fontStyle: "normal", fontWeight: "bold",
                  }}>1630 Albion Road, Toronto, Ontario, M9V 5H5</span>
                  {/* textOverflow: "ellipsis", */}
                </div>
                <div onClick={handleOpenModal}>
                  <MdKeyboardArrowRight style={{ height: '53px', width: '23px', color: 'rgba(0, 0, 0, 0.26)' }} />
                </div>
              </Card.Body>
            </Card>
            {/* {showModal && (
              <OrderAddress showModal={showorderModal} onCloseModal={handleCloseModal} />
            )} */}
            <div className="mt-2 jss3515">
              Notes for counter
              <Card.Body className='rounded-3 border' style={{ minHeight: '60px' }}>

              </Card.Body>
              <span className="fst-italic text-body-secondary">optional</span>
            </div>

          </div>
          <div style={{ border: '1px solid #efefef' }}></div>
        </div>
        <div className="col-4 coldiv4" >
          <Card  style={{ borderRadius: '20px',margin:'20px 30px' }}>
            <Card.Body style={{ background: '#efefef', borderRadius: '20px 20px 0 0' }}>
              <p className="card-text1">ORDER READY FOR</p>
              <p className="card-text2">1:00 PM</p>
              <p className="card-text3 ">(in 2 days)</p>
            </Card.Body>
            <Card.Body className="card-text4" >
              <div className="d-flex justify-content-between" >
                <div className="d-flex justify-content-between">
                  <div style={{marginRight:"1.5rem"}} >1x</div>
                  <div>Bombay Vadapav (Dry)</div>
                </div>

                <div>    $4.99  </div>
              </div>
              <div style={{ border: '1px groove  ##efefef' }}></div>
              <div className="d-flex justify-content-between align-items-center mt-3 ">
                <p>SUB-TOTAL</p>
                <p>
                  $4.99</p>
              </div>
              <div className="d-flex justify-content-between align-items-center ">
                <p>HST</p>
                <p>
                  $0.65</p>
              </div>
            </Card.Body>
            <Card.Body className ="card-text5" >
            <div className="d-flex justify-content-between align-items-center mt-3 ">
                <p>Total</p>
                <p style={{color:' #fecd08'}}>
                  $5.64</p>
              </div>
            </Card.Body>
          <div className="d-flex justify-content-center card-text6" onClick={()=>{navigate('/orderpage')}} >
            <span>  <IoChevronBack style={{  width: '23px' }} /></span>
            <p>Edit</p>
          </div>
          </Card>
          <div>
                <p className="text-center mt-3">Online ordering powered by</p>
                <Link className="nav-link text-center" style={{marginTop:'-12px'}} to='https://ueat.io/en/' >
                  <img src={img6} style={{height:'25px',width:'80px'}}/>
                </Link>
              </div>
        </div>
              
      </div>

      <div className="row">
        <div className="col-3 coldiv3 border border-end" style={{background:'#efefef'}}>   </div>
        <div className=" col-5 coldiv5 border border-end ">
          <div>
            <Form.Group style={{ padding: "20px 70px", }}>
              <Form.Check
                required
                name="agreement"
                label={
                  <span>
                    Yes, I have read and agree with the <span style={{ color: '#fecd08', textDecoration: 'underline' }}>terms of use</span> and consent to my personal information being used and shared with service providers for the purposes set out in the terms of use.
                  </span>
                }

              />
            </Form.Group>
            <div className="text-center " style={{background:'#fecd08'}}>
              Pay<span>  <MdKeyboardArrowRight style={{ height: '53px', width: '23px' }} /></span>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default PaymentContainer;
