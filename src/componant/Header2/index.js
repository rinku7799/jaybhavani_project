import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../Header2/Header2.css";
import {
  faBagShopping,
  faChevronRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PiPoliceCarThin, PiBagThin } from 'react-icons/pi';
import { HiOutlineUserCircle } from "react-icons/hi2"
import { OrderAddress } from "../OrderAdress";
import { LoginRegister } from "../LoginRegister";
import img3 from '../../componant/assets/bag_1250555.png'
import Order from "../Order";

const Header2 = () => {
  const isLoggedIn=localStorage.getItem('login Token');
  const [showModal, setShowModal] = useState(false);
  // const [orderAddressModealVisible, setOrderAddressModealVisible] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(showModal);
    console.log('hello')
  };
  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  return (
    <>
      <div className="header2">
        <div className="sub-header">
          <div className="text2">Your order</div>
          {
            isLoggedIn ?(
              ''
            ):(
              <>
                   <div className="header2-sign-up">
              <div>
                <HiOutlineUserCircle style={{ color: "#093455", fontSize: '16px', marginBottom: '5px' }} />
              </div>
              <div className="header2-text-sign-up nav-link" onClick={handleLoginClick}> Sign in</div>
            </div>
            <LoginRegister show={showLoginModal} onHide={() => setShowLoginModal(false)} />
              </>
         
            )
          }
        
        </div>
        <div className="box1">
          <div className="text1">Your Order</div>
          <div className="location">
            <button className="location-button">
              <div className="button-address">
                <div className="button-location">
                  <div className="text3">Select an order Type</div>
                  {/* <div className="text4">
                    1630 albion Road,Toronto,Ontaric,M9V
                  </div> */}
                </div>
              </div>
              <div className="button-angle" onClick={handleOpenModal}>
                <FontAwesomeIcon
                  size="lg"
                  icon={faChevronRight}
                  className="iconright"

                />
                {/* <Order modelCode={1}/> */}
                {showModal && ( 
                  <OrderAddress showModal={showModal} onCloseModal={() => { handleCloseModal() }} />
            )}   
              </div>
            </button>
          </div>
        </div>
        <div className="box2">
          <div className="sub-box2">
            <div className="sub-sub-box2">
              <div className="text1">Pickup time</div>
              {/* onClick={handleClick} */}
              <div className="select">

                <select className="selection" style={{cursor:'pointer'}}>
                  <option value="">Today</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>

              </div>
              <div className="select">

                <select className="selection" style={{cursor:'pointer'}}>
                  <option value="">12:30 PM</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header2;
