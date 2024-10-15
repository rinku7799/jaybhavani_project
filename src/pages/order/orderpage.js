import { Tabs, Tab } from "react-bootstrap";
import { useState } from "react";
import './orderpage.css';
import { IoCheckmarkCircle } from "react-icons/io5";
import img11 from '../../componant/assets/imgpsh_fullsize_anim (10).png'
import Header from "../../componant/Header";
import { Footer } from "../../componant/footer";

const OrderHistory = () => {
  const [key, setKey] = useState("Running");

  // Define an array of orders  
  const orders = [
    { id: 100028, status: "Pending", button: "Details", button1: "Track Order" },
    { id: 100027, status: "Pending", button: "Details", button1: "Track Order" },
    { id: 100026, status: "Pending", button: "Details", button1: "Track Order" },
    { id: 100024, status: "Confirmed", button: "Details", button1: "Track Order" },
    { id: 100023, status: "Confirmed", button: "Details", button1: "Track Order" },
    { id: 100021, status: "Confirmed", button: "Details", button1: "Track Order" },
    { id: 100020, status: "Pending", button: "Details", button1: "Track Order" },
    { id: 100019, status: "Out of Delivery", button: "Details", button1: "Track Order" },
    { id: 100017, status: "Confirmed", button: "Details", button1: "Track Order" },
    { id: 100016, status: "Confirmed", button: "Details", button1: "Track Order" },
    { id: 100010, status: "Confirmed", button: "Details", button1: "Track Order" },
    { id: 100008, status: "Confirmed", button: "Details", button1: "Track Order" },
    { id: 100006, status: "Pending", button: "Details", button1: "Track Order" },
    { id: 100005, status: "Confirmed", button: "Details", button1: "Track Order" },
    { id: 100004, status: "Confirmed", button: "Details", button1: "Track Order" },
    { id: 100003, status: "Confirmed", button: "Details", button1: "Track Order" },
    { id: 100002, status: "Confirmed", button: "Details", button1: "Track Order" }
  ];
  const orders1 = [
    { id: 100025, status: "Delivered"},
    { id: 100018, status: "Canceled"},
    { id: 100007, status: "Delivered"},
    { id: 100001, status: "Failed"},
  ];

const showTrackOrderIds = [100003, 100005, 100002,100004,100008,100016]; 

  return (
    <>
     <Header/>
         <div className="container">
             <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 color tabs1 mt-2"
          >
           
            <Tab eventKey="Running" title="Running" className="w-100 tab1">
              <div className="row ">
                {orders.map((order) => (
                  <div key={order.id} className="col-12 col-sm-12 col-mb-6 col-lg-6 ">
                   <div className="main shadow rounded-4 pb-4 p-3 mt-3 ms-3">
                   <div className="d-flex ">
                      <img
                        src={img11}
                        alt=""
                        width={"80px"}
                        height={"80px"}
                        className="p-2"
                        style={{backgroundColor:"#efefef", borderRadius:"5px"}}
                      />
                      <p className="ms-3">
                        order ID : {order.id} <span  style={{color: "#fecd08"}}>(Take Away)</span>
                        <p>1 item</p>
                        <p  style={{color: "#fecd08",marginTop:"-15px"}}><IoCheckmarkCircle /><span className="ms-1">{order.status}</span></p>
                      </p>
                    </div>
                    <button className="btn border" style={{width:"245px", borderRadius:"10px"}}>{order.button}</button>
                    {showTrackOrderIds.includes(order.id) && (
                      <button className="btn ms-3 track"style={{width:"245px",backgroundColor:"#fecd08", borderRadius:"10px"}}>{order.button1}</button>
                    )}
                   </div>
                  </div>
                ))}
              </div>
            </Tab>
            <Tab eventKey="History" title="History" className="w-100 tab1 text-dark">
            <div className="row">
                {orders1.map((order) => (
                  <div key={order.id} className="col-12 col-sm-12 col-mb-6 col-lg-6 ">
                   <div className="main shadow rounded-4 pb-4 p-3 mt-3 ms-3">
                  <div className="d-flex">
                    <img
                        src={img11}
                        alt=""
                        width={"80px"}
                        height={"80px"}
                        className="p-2"
                        style={{backgroundColor:"#efefef", borderRadius:"5px"}}
                      />
                      <p  className="ms-3">
                        order ID : {order.id} <span  style={{color: "#fecd08"}}>(Take Away)</span>
                        <p>1 item</p>
                        <p  style={{color: "#fecd08",marginTop:"-15px"}}><IoCheckmarkCircle /><span className="ms-1">{order.status}</span></p>
                      </p>
                    </div>
                    <button className="btn border " style={{width:"250px", borderRadius:"10px"}}>Details</button></div>
                  </div>
                ))}
              </div>
            </Tab>
          </Tabs>
         </div>
      <Footer/>
    </>
   
  );
};

export default OrderHistory;
