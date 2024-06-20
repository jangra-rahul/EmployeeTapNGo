import React from 'react';
import { Row, Col } from 'react-bootstrap';
import banner from "../../assets/images/svg/banner.svg";
import sale from "../../assets/images/svg/salecard.svg";
import secondsale from "../../assets/images/svg/2ndsalecard.svg";
import thirdsale from "../../assets/images/svg/3rdsalecard.svg";
import fourthsale from "../../assets/images/svg/4thsalecard.svg";
import resposiveImage from "../../assets/images/svg/banner-resposive.svg";

const Myoffer = () => {
  return (
    <div>
      <Row className='pe-4'>
        <picture>
          <source srcSet={resposiveImage} media="(max-width: 768px)" />
          <img src={banner} alt="" />
        </picture>
      </Row>
      <Row className='mt-3 gap-3 gap-md-0 px-2'>
        <Col className='sm:mb-3 mb-md-5   my-md-2'>  
          <img src={sale} alt="" />
        </Col>
        <Col className='sm:mb-3 mb-md-5'> 
          <img src={secondsale} alt="" />
        </Col>
        <Col className='sm:mb-3 mb-md-5'> 
          <img src={thirdsale} alt="" />
        </Col>
        <Col className='sm:mb-3 mb-md-5'> 
          <img src={fourthsale} alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default Myoffer;