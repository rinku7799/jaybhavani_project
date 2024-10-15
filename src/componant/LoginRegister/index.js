import React, { useState, useEffect } from 'react';
import { Modal, Tabs, Tab, Form, Button, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './LoginRegister.css';
import { IoMdClose } from "react-icons/io";
import axios from 'axios';

export const LoginRegister = ({ show, onHide }) => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({
    email_or_phone: '',
    password: '',
    agreement: false,
  });
  const [errors, setErrors] = useState({
    email_or_phone: '',
    password: '',
    agreement: '',
  });
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const checkFormValidity = () => {
      const { email_or_phone, password, phone, agreement } = formData;
      if (activeTab === 'login') {
        return email_or_phone && password;
      } else {
        return phone && password && agreement;
      }
    };

    setFormValid(checkFormValidity());
  }, [formData, activeTab]);

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const numericValue = value.replace(/\D/g, '');

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : (type === 'tel' ? numericValue : value)
    }));
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    const { email_or_phone, password } = formData;
    const errorsCopy = { ...errors };

    errorsCopy.email_or_phone = '';
    errorsCopy.password = '';

    if (!email_or_phone) {
      errorsCopy.email_or_phone = 'email_or_phone is required.';
    }

    if (!password) {
      errorsCopy.password = 'Password is required.';
    }

    setErrors(errorsCopy);

    try {
      const response = await axios.post(
        "https://admin.road2xtechnology.com/api/v1/auth/login",
        {
          email_or_phone: formData.email_or_phone,
          password: formData.password
        }
      );
      if (response.status === 200) {
        const logintoken = JSON.stringify(response.data);
        localStorage.setItem('login Token', logintoken);
        setFormData({
          email_or_phone: '',
          password: '',
          agreement: false,
        });
      }
      console.log("API response:", response.data);

      onHide();
      navigate('/account');
      window.alert('user Login sucessfully')
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Error fetching data:");
    }
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
  
    const { phone, password, agreement } = formData;
    const errorsCopy = { ...errors };
  
    // Reset errors
    errorsCopy.phone = '';
    errorsCopy.password = '';
    errorsCopy.agreement = '';
  
    if (!phone) {
      errorsCopy.phone = 'phone is required.';
    }
  
    if (!password) {
      errorsCopy.password = 'Password is required.';
    }
    if (!password || password.length < 6) {
      errorsCopy.password = 'Password must be at least 6 characters long.';
    }
    if (!phone || !/^\d{10}$/.test(phone)) {
      errorsCopy.number = 'Phone number must be 10 digits long.';
    }
    if (!agreement) {
      errorsCopy.agreement = 'You must agree to the terms.';
    }
  
    setErrors(errorsCopy);
  
    if (!errorsCopy.phone && !errorsCopy.password && !errorsCopy.agreement) {
      console.log('Register form submitted', formData);
      try {
        const response = await axios.post(
          "https://admin.road2xtechnology.com/api/v1/auth/registration",
          {
            f_name: 'Nik Fake',
            l_name: 'Dhim Fake',
            phone: formData.phone,
            password: formData.password
          }
        );
        if (response.status === 200) {
          const responseDataString = JSON.stringify(response.data);
          localStorage.setItem('register Token', responseDataString);
          setFormData({
            email_or_phone: '',
            password: '',
            agreement: false,
          });
          setActiveTab('login');
          window.alert('user Account created sucessfully')
        }
        console.log("API response:", response.data);
  
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Error fetching data:");
      }
    }
  };
  

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton={true} style={{ borderRadius: '20px 20px 0px 0px', background: '#fecd08' }}>
        <Modal.Title className='modal-title'>
          YOUR ACCOUNT
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='px-3' style={{ overflowY: 'scroll', maxHeight: '454px' }}>
        <div>
          <h4 className='pt-2 fw-semibold'>
            Hi there!
          </h4>
          <p className='fw-semibold'>
            Enjoy a hassle-free ordering experience, every time.
          </p>
        </div>

        <Tabs
          id="login-register-tabs"
          activeKey={activeTab}
          onSelect={handleTabSelect}
          className='d-flex justify-content-center LoginReg-tabs'
        >
          <Tab eventKey="login" title="Log in" className='p-2 tab'>
            <Form onSubmit={handleLoginSubmit}>
              <Form.Group controlId="loginphone">
                <Form.Label className='fw-medium'>Phone<span className='text-danger'>*</span> </Form.Label>
                <Form.Control
                  type="tel"
                  name='email_or_phone'
                  placeholder=""
                  value={formData.email_or_phone}
                  onChange={handleInputChange}
                  className='p-2 formControl'
                  required
                />
                <p className='text-danger'>{errors.email_or_phone}</p>
              </Form.Group>
              <Form.Group controlId="loginPassword" className='mt-3'> 
                <Form.Label className='fw-medium'>Password<span className='text-danger'>*</span></Form.Label>
                <Form.Group>
                  <InputGroup className="mb-3">
                    <Form.Control
                      type={passwordVisible ? "text" : "password"}
                      name='password'
                      placeholder=""
                      className='p-2 formControl'
                      value={formData.password}
                      style={{ borderRight: "none" }}
                      onChange={handleInputChange}
                      required
                    />
                    <Button
                      variant="outline-secondary"
                      className='text-dark'
                      style={{ borderLeft: "none", borderColor: "#dee2e6" }}
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                      {passwordVisible ? "Hide" : "Show"}
                    </Button>
                  </InputGroup>
                </Form.Group>
                <p className='text-danger'>{errors.password}</p>
              </Form.Group>
              <p className='text-warning text-end text-decoration-underline mt-2' style={{cursor:'pointer'}}>Forgot password?</p>
              <Form.Group className="mt-3 mb-3" style={{cursor:'pointer'}}>
                <Form.Check
                  required
                  name="agreement"
                  label="Remember my phone address."
                  checked={formData.agreement}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <div>
                This site is protected by reCAPTCHA.
              </div>

            </Form>
          </Tab>
          <Tab
            eventKey="register"
            title="Create an account"
            className='p-2 tab' >
            <Form onSubmit={handleRegisterSubmit}>
              <Form.Group controlId="registerphone" className='mt-3' style={{cursor:'pointer'}}>
                <Form.Label className='fw-medium '>Phone<span className='text-danger'>*</span> </Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  placeholder=""
                  className='p-2 formControl' 
                  value={formData.phone}
                  onChange={handleInputChange}
                  required />
                <p className='text-danger'>{errors.phone} </p>

              </Form.Group>

              <Form.Group controlId="registerPassword " className='mt-3'>
                <Form.Label className='fw-medium '>Password<span className='text-danger'>*</span></Form.Label>
                <Form.Group>
                  <InputGroup className="mb-3">
                    <Form.Control
                      type={passwordVisible ? "text" : "password"}
                      name='password'
                      placeholder=""
                      className='p-2 formControl'
                      value={formData.password}
                      style={{ borderRight: "none" }}
                      onChange={handleInputChange}
                      required
                    />
                    <Button
                      variant="outline-secondary"
                      className='text-dark'
                      style={{ borderLeft: "none", borderColor: "#dee2e6" }}
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                      {passwordVisible ? "Hide" : "Show"}
                    </Button>
                  </InputGroup>
                </Form.Group>
                <p className='text-danger'>{errors.password} </p>
              </Form.Group>

              <Form.Group className="mt-3 mb-3">
                <Form.Check
                  required
                  name="agreement"
                  label="Yes, I have read and agree with the terms of use and consent to my personal information being used and shared with service providers for the purposes set out in the terms of use."
                  checked={formData.agreement}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <div >
                This site is protected by reCAPTCHA.
              </div>
            </Form>
          </Tab>
        </Tabs>
      </Modal.Body>

      {activeTab === 'login' ? (
        <>
          <Modal.Footer className='d-flex justify-content-around bg FooterLR' style={{ borderRadius: '0 0 20px 20px', backgroundColor: formValid ? '#fecd08' : '#fff', }}>
            <span  onClick={handleLoginSubmit}>Login</span>
          </Modal.Footer>
        </>
      ) : (
        <>
          <Modal.Footer className='d-flex justify-content-around bg FooterLR' style={{ borderRadius: '0 0 20px 20px', backgroundColor: formValid ? '#fecd08' : '#fff',cursor:'pointer' }}>
            <span  onClick={handleRegisterSubmit}>Create</span>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
};

export default LoginRegister;