import React from 'react';
import { Row, Col, Modal, Button } from 'react-bootstrap';
import banner from "../../assets/images/svg/banner.svg";
import sale from "../../assets/images/svg/salecard.svg";
import secondsale from "../../assets/images/svg/2ndsalecard.svg";
import thirdsale from "../../assets/images/svg/3rdsalecard.svg";
import fourthsale from "../../assets/images/svg/4thsalecard.svg";
import resposiveImage from "../../assets/images/svg/banner-resposive.svg";
import group123 from "../../assets/images/svg/Group 3636s.png"
const Myoffer = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Row className='pe-2'>
        <picture>
          <source srcSet={resposiveImage} media="(max-width: 768px)" />
          <img src={banner} alt="" onClick={handleModalOpen} />
        </picture>
      </Row>
      <Row className='mt-3 gap-2 m-0 p-0 gap-md-0'>
        <Col className='sm:mb-3 m-0 p-0  mb-md-5 '>  
          <img src={sale} alt="" />
        </Col>
        <Col className='sm:mb-3 m-0 p-0   mb-md-5'> 
          <img src={secondsale} alt="" />
        </Col>
        <Col className='sm:mb-3 m-0 p-0  mb-md-5'> 
          <img src={thirdsale} alt="" />
        </Col>
        <Col className='sm:mb-3 m-0 p-0  mb-md-5'> 
          <img src={fourthsale} alt="" />
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Discount Coupon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className='w-100' src={group123} alt="" />
       <h4 className='fs_16 red_ff fw-medium mt-3'>Details</h4>
          <p className='fs_14 red_ff fw-normal mt-2'>1.   Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p className='fs_14 red_ff fw-normal mt-2'>2. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p className='fs_14 red_ff fw-normal mt-2'>3.  Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className='w-100 fs_16 fw-medium red_ff' onClick={handleModalClose}>
            Activate this Offer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Myoffer;