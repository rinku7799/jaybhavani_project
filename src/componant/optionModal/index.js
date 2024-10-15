import React, { useEffect, useState } from 'react'
import { Modal, Button, ModalBody, Card, CardImg, CardText, ModalFooter, ButtonGroup } from 'react-bootstrap'
import image2 from '../../componant/assets/81ce27ae-d988-4501-aa84-7333876e3d4a.png'
import image3 from '../../componant/assets/imgpsh_fullsize_anim (1).png'
import image4 from '../../componant/assets/imgpsh_fullsize_anim.png'
import image5 from '../../componant/assets/imgpsh_fullsize_anim (2).png'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import './option.css'

export const OptionModal = ({show,onHide}) => {
  const [showOptmoda, setShowOptModal] = useState(false);

  const handleClose=()=>{
   onHide()
  }
   return (


    <div>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <Modal show={show} onHide={handleClose} >

        <Modal.Header className='option-header ' style={{ background: '#fecd08', borderRadius: '20px 20px 0 0' }} closeButton>
          <Modal.Title >
            OPTION CHOICE
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ overflowY: 'scroll' }} >
          <Modal.Body className='d-flex justify-content-center gap-3  imageBody'>
            <img
              src={image2}
              // src='https://storage.googleapis.com/ueat-assets/81ce27ae-d988-4501-aa84-7333876e3d4a.png' 
              alt='image' style={{ height: '100px', width: '100px' }} />
            <div className='mt-4'>
              <p className=' m-0  jss2298'>SELECTED ITEM</p>
              <p className=' m-0 jss2299 fs-4' >Vadapav in Butter With Cheese</p>
            </div>
          </Modal.Body>

          <Modal.Body className='d-flex justify-content-center gap-3' style={{padding:'40px 0 20px 0',margin:''}}>

            <p className='text-center alian-items center pt-2 mt-1'
              style={{
                borderRadius: '50px',
                height: '40px',
                width: '40px',
                border: '1px solid #a5a5a5',
                color: 'rgb(254, 205, 8)'
              }}>
              1
            </p>
            <div style={{ lineHeight: '0.5' }}>
              <p className='mt-2 fs-5 '  >
                Possible modification
              </p>
              <p style={{
                color: " #a5a5a5 ",
                fontSize: " 17px ",
                fontStyle: "normal ",
                fontWeight: "bold ",

              }}>
                Choice:0 /2
              </p>
            </div>
          </Modal.Body>
          <Modal.Body className='d-flex justify-content-center gap-4 text-center ' style={{padding:'3px 20px 50px 20px'}}>
          <Card>
              <Card.Img variant="top" 
                src={image4}
              // src="https://api.asm.skype.com/v1/objects/0-sa-d6-b4cc9f844a08e520e2f0987d7262c768/views/imgpsh_fullsize_anim"
              >

              </Card.Img>
              <Card.Text className='card-text-p'>
                No Garlic
              </Card.Text>

            </Card>
            <Card>
              <Card.Img variant="top"
                src={image3}
              // src="https://api.asm.skype.com/v1/objects/0-sa-d7-557582f53331b6fe6b45cc755800bfbe/views/imgpsh_fullsize_anim"
              >

              </Card.Img>
              <Card.Text className='card-text-p'>
                No Onion
              </Card.Text>
            </Card>
           
            <Card>
              <Card.Img variant="top"
                src={image5}
              // src="https://api.asm.skype.com/v1/objects/0-sa-d8-6c06a04d350294812251da38740bcff1/views/imgpsh_fullsize_anim"
              >

              </Card.Img>
              <Card.Text className='card-text-p'>
                No modification
              </Card.Text>
            </Card>
          </Modal.Body>

        </Modal.Body>
        <div className='border '></div>
          <div class="d-flex" style={{borderRadius:'20px 20px 0 0'}}>

            <div class=" flex-shrink-1 bg bg-white "  style={{    borderRadius: "0px 0px 0px 20px",padding:" 10px 35px 10px 35px"}}>
            <div className=' d-flex align-items-center gap-3  ' style={{ borderRadius:'20px' ,background:'#efefef',padding:'7px 20px'}}>
              <div className='border border-0' ><AiOutlineMinus /></div>
              <div>1</div>
              <div><AiOutlinePlus /></div>
            </div>
            </div>
            <div class="p-2 w-100 bg bg-warning" style={{    borderRadius: "0px 0px 20px 0px"}}>
               <div className='bg bg-warning d-flex justify-content-center pt-2 ' style={{ height: '5vh', }}>

              Add. $5.19
            </div></div>
          </div>


      </Modal>
    </div>
  )
}


