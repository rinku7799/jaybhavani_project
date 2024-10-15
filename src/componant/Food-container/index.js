import React, { useState , useEffect} from "react";
import "../Food-container/FoodConatiner.css";
import {
  faCartShopping,
  faChevronRight,
  faMinus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdDeleteOutline } from "react-icons/md";
import img1 from '../assets/38c4920a-0dc3-40a6-9b6d-17be1c7791fd.jpg'
import img6 from '../assets/imgpsh_fullsize_anim (5).png'
import { Link, useNavigate } from "react-router-dom";
import { OptionModal } from "../optionModal";
import Header2 from "../Header2";
import Offcanvas from 'react-bootstrap/Offcanvas';
import axios from "axios";
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

const FoodContainer = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [subFoodItems, setSubFoodItems] = useState([]);
  const [showoptionModal, setShowoptionModal] = useState(false);

  const handleItemClick = (index) => {
    setSubFoodItems(prevItems => {
      const updatedItems = [...prevItems];
      updatedItems[index].isOpen = !updatedItems[index].isOpen;
      return updatedItems;
    });
  };


  const handleOptionClick = () => {
    setShowoptionModal(true);
  };
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://admin.road2xtechnology.com/api/v1/categories",
        );
        console.log("API response:", response.data);
        setSubFoodItems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <>
       <Header2 />
       <div className="food-container">
        <div className="row">
          <div className="col-8 col-xxl-8 col-xl-8 col-md-8 food-container-box-1">
          {subFoodItems.map((item, index) => (
              <div className="sub-food-container-box-1" key={index}>
                <div
                  className="sub-food-container-sub-box-1-duplicate"
                  onClick={() => handleItemClick(index)}
                  style={{
                    backgroundColor: item.isOpen ? "#ffffff" : "#efefef",
                    color: item.isOpen ? "#fecd08" : "black",
                  }}
                >
                  <div className="sub-food-container-sub-box-text-duplicate">
                    <div className="text">{item.name}</div>
                    <div
                      className={`caret ${item.isOpen ? "up" : "down"}`}
                    ></div>
                  </div>
                </div>

                {item.isOpen && (
                  <>
                    <hr />
                    <div className="row sub-food-container-sub-box-2 border">
                      <div className="sub-food-container-sub-sub-box-1-img col-6">
                        <img src={item.image} alt={item.name} />
                      </div>
                      {item.isOpen && item.subItems && item.subItems.map((subItem, subIndex) => (
                        <div
                          className="sub-food-container-sub-sub-box-1 col-6"
                          key={subIndex}
                        >
                          <div className="sub-food-container-sub-sub-box-1-con">
                            <div className="sub-food-container-sub-sub-box-1-con-p">
                              <div className="flex">
                                <div>
                                  <div className="flex-text1">
                                    {subItem.name}
                                  </div>
                                  <div className="flex-text2">
                                    {subItem.description}
                                  </div>
                                </div>
                                <div className="amount">{subItem.price}</div>
                              </div>
                              <div className="plus" onClick={handleOptionClick}>
                                <FontAwesomeIcon
                                  icon={faPlus}
                                  style={{ color: "#000000" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        {/* ................................box2....................................................... */}
        <div className="col-4 col-xxl-4 col-xl-4 col-md-4 food-container-box-2">
        <div className="food-container-box-2-width">
            <div className="food-container-box-2-flex" >
              <div className="food-container-box-2-cart-1-div" >
                
                <div className="food-container-box-2-cart-1-text1">
                  ORDER READY FOR
                </div>
                <div className="food-container-box-2-cart-1-text2">
                  12:30 PM
                </div>
                <div className="food-container-box-2-cart-1-text3">
                  (in 9 hours)
                </div>
              </div>
              <div className="food-container-box-2-cart-2-div">
                <div className="food-container-box-2-cart-2-div-1">
                  <div className="food-container-box-2-cart-2-div-1-flex">
                    <div className="food-container-box-2-cart-2-div-1-flex-flex2">
                      <div className="food-container-box-2-cart-2-div-1-flex-flex2-flex3">
                        <div className="food-container-box-2-cart-2-div-1-flex-flex2-flex3-flex-4">
                          <div className="food-container-box-2-cart-2-div-1-text">
                            Vadapav in Butter with Cheese
                          </div>
                          <div className="food-container-box-2-cart-2-div-1-amount">
                            $6.67
                          </div>
                        </div>
                        <div className="food-container-box-2-cart-2-div-1-text2">
                        </div>
                        <div className="food-container-box-2-cart-2-div-1-text3" onClick={handleOptionClick}>
                          Modify
                        </div>
                        <OptionModal show={showoptionModal} onHide={()=>setShowoptionModal(false)}/>
                      </div>
                    </div>
                    <div className="food-container-box-2-cart-2-div-2-flex-flex2">
                      <div className="food-container-box-2-cart-2-div-2-flex-flex2-flex3">
                        <button className="food-container-box-2-cart-2-div-2-button1">
                          <FontAwesomeIcon
                            icon={faMinus}
                            style={{ color: "#050505" }}
                          />
                        </button>
                        <div>1</div>
                        <button className="food-container-box-2-cart-2-div-2-button2 ">
                          <FontAwesomeIcon
                            icon={faPlus}
                            style={{ color: "#050505" }}
                          />
                        </button>
                      </div>
                      <button className="food-container-box-2-cart-2-div-2-button3">
                        <MdDeleteOutline 
                        style ={{color: '#000000',fontSize:'23px',background:'#efefef',borderRadius:'50px'}}

                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="food-container-box-2-cart-2-div-2">
                  <div className="food-container-box-2-cart-2-div-2-sub-div">
                    <div className="food-container-box-2-cart-2-div-2-sub-div-text1">
                      PROMOTIONS
                    </div>
                    <button className="food-container-box-2-cart-2-div-2-sub-div-button">
                      <div className="food-container-box-2-cart-2-div-2-sub-div-text2"onClick={handleShow}>
                        Add a promotion
                      </div>
                    </button>
                  </div>
                </div>
                <div className="food-container-box-2-cart-2-div-3">
                  <div className="food-container-box-2-cart-2-div-3-sub-div">
                    <div className="food-container-box-2-cart-2-div-3-sub-div-text">
                      SUGGESTIONS
                    </div>
                    <div className="food-container-box-2-cart-2-div-3-sub-div-button-con">
                      <button className="food-container-box-2-cart-2-div-3-sub-div-buttons">
                        <img
                          className="food-container-box-2-cart-2-div-3-sub-div-buttons-img"
                          src={img1}
                        />
                        <div className="food-container-box-2-cart-2-div-3-sub-div-buttons-flex">
                          <div className="food-container-box-2-cart-2-div-3-sub-div-buttons-text">
                            <div className="food-container-box-2-cart-2-div-3-sub-div-buttons-amount">
                              $5.34
                            </div>
                            <div className="food-container-box-2-cart-2-div-3-sub-div-buttons-text-1">
                              Regular Peri Peri Fries
                            </div>
                          </div>
                          <div className="plus">
                          <FontAwesomeIcon
                            icon={faPlus}
                            style={{ color: "#000000" }}
                          />
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="food-container-box-2-cart-2-div-4">
                  <div className="food-container-box-2-cart-2-div-4-sub-div">
                    <div className="food-container-box-2-cart-2-div-4-sub-div-1">
                      <div className="food-container-box-2-cart-2-div-4-sub-div-1-text1">
                        SUB-TOTAL
                      </div>
                      <div className="food-container-box-2-cart-2-div-4-sub-div-1-text2">
                        $6.19
                      </div>
                    </div>
                    <div className="food-container-box-2-cart-2-div-4-sub-div-1">
                      <div className="food-container-box-2-cart-2-div-4-sub-div-1-text1">
                        HST
                      </div>
                      <div className="food-container-box-2-cart-2-div-4-sub-div-1-text2">
                        $0.80
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="food-container-box-2-cart-3-div">
                <div className="food-container-box-2-cart-3-div-text1">
                  TOTAL
                </div>
                <div className="food-container-box-2-cart-3-div-text2">
                  $0.00
                </div>
              </div>
              <div className="food-container-box-2-cart-5-div">
              <button className="pay-button" >
                <div className="pay-button-text d-flex " style={{ color: 'rgb(9, 52, 85)' }}>Pay<span> <FontAwesomeIcon
                    size="md"
                    icon={faChevronRight}
                  /></span> </div>
              </button>
            </div>
              {/* <div className="food-container-box-2-cart-4-div">
                <div className="food-container-box-2-cart-4-div-text-1">
                  Online ordering powered by
                </div>
                <Link className="nav-link" to='https://ueat.io/en/' >
                  <img src={img6} style={{height:'25px',width:'80px'}}/>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
        </div>
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Body className="p-0">
                        <div className='offcanvas-upersec'>
                                <button className='btnuper border border-secondary' onClick={handleClose}>
                                    <span><MdOutlineKeyboardArrowLeft /></span>
                                    <span className='fw-normal' style={{ fontSize: '14px', padding: '8px 5px 8px 0px' }}>Back   </span>
                                </button>
                                <p className='offcanvas-upersec-title'>Add a promotion</p>
                            </div>
                            <div className="border p-4 d-flex flex-column text-center align-items-center" style={{width:"100%", backgroundColor:"#F1F1F1"}}> 
                              <p className="h5 fw-bolder">Got a code?</p>
                              <div class="input-group mb-3  border border-secondary-subtle bg-white" style={{borderRadius:"7px"}}>
                              <span class="input-group-text bg-white" id="basic-addon1" style={{border:"none",color:"gray"} }>#</span>
                              <input type="text" style={{width:"80%",border:"none"}} className="p-1 focus "/>
                              </div>
                            </div>
                            <div className='bg bg-warning d-flex justify-content-center pt-2 ' style={{ height: '6vh', position: 'absolute', bottom: '0px', width: '100%' }}>
                              Add
                            </div>
                        </Offcanvas.Body>
                        </Offcanvas>

      </div>
    </>
  );
};

export default FoodContainer;
