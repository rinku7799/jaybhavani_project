import React, { useState, useEffect } from "react";
import "../Header/Header.css";
import { Nav, Navbar, Form, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header2 from "../Header2";
import FoodContainer from "../Food-container";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { BiUserCircle } from "react-icons/bi";
import { LoginRegister } from "../LoginRegister";
import { useNavigate } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";

const Header = () => {
  const navigate = useNavigate();

  const [showLoginModal, setShowLoginModal] = useState(false);
  const isLoggedIn=localStorage.getItem('login Token');
  const [cartItemsCount, setCartItemsCount] = useState(0);

  
  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('login Token');
  };
  

  return (
    <>

      <Navbar
        expand="lg"
        style={{ backgroundColor: " #093455", height: "90px",  }}
        className="navbar"
      >
        <div className="img-con">
          <img
            src="https://storage.googleapis.com/ueat-assets/064e28bc-4519-4b68-9a88-bfc1c665ce2a.png"
            alt="Jay Bhavani Vadapav"
            class="jss72"
           onClick={()=>{navigate('/')}}
           style={{cursor:'pointer'}}
          />
        </div>

      
    
          {cartItemsCount > 0 && (
        <div className="cart-badge">{cartItemsCount}</div>
      )}
        {
          isLoggedIn ? (
            <>

           <Navbar.Collapse id="navbarScroll">
          <div className="header-text" style={{cursor:"pointer"}} onClick={() => { navigate('/account') }}>MY PROFILE</div>
         </Navbar.Collapse>
        <GrCart style={{fontSize:'x-large',color:'white',marginRight:'60px',cursor:'pointer'}} onClick={()=>{
          navigate('/orderpage')
        }} />
              <Navbar.Text className="sign-up1" style={{cursor:'pointer'}}>
                <Nav className="sub-sign-up1">
                  <Nav>
                    <FaRegCircleUser style={{ fontSize: '25px' }} />
                  </Nav>
                  <Nav className="text-sign-in1"> Welcome !</Nav>
                </Nav>
              </Navbar.Text>
            </>
          ) : (
            <>
              <Navbar.Collapse id="navbarScroll">
          <div className="header-text" style={{cursor:"pointer"}} onClick={() => { navigate('/') }}>ONLINE ORDERING</div>
       
        </Navbar.Collapse>
        <GrCart style={{fontSize:'x-large',color:'white',marginRight:'60px',cursor:'pointer'}} onClick={()=>{
          navigate('/orderpage')
        }} />
              <Navbar.Text className="sign-up" style={{cursor:'pointer'}}>
                <Nav className="sub-sign-up" onClick={handleLoginClick}>
                  <Nav>
                    <BiUserCircle style={{ color: "#FFD43B", fontSize: '25px' }} />
                  </Nav>
                  <Nav className="text-sign-in">Sign in</Nav>
                </Nav>
              </Navbar.Text>
            </>
          )
        }
       

      </Navbar>
      <LoginRegister show={showLoginModal} onHide={() => setShowLoginModal(false)} />

</>
  );
};

export default Header;
