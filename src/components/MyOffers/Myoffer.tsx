import React from 'react'
import { Row, Col } from 'react-bootstrap';
import banner from "../../assets/images/svg/banner.svg"
import sale from "../../assets/images/svg/salecard.svg"
import secondsale from "../../assets/images/svg/2ndsalecard.svg"
import thirdsale from "../../assets/images/svg/3rdsalecard.svg"
import fourthsale from "../../assets/images/svg/4thsalecard.svg"
const Myoffer = () => {
    return (
        <div>
            <Row className='pe-4'>
                <img src={banner} alt="" />
            </Row>
            <Row className='mt-3 px-2'>
                <Col>
                    <img src={sale} alt="" />
                </Col>
                <Col>
                    <img src={secondsale} alt="" />
                </Col>
                <Col>
                    <img src={thirdsale} alt="" />
                </Col>
                <Col>
                    <img src={fourthsale} alt="" />
                </Col>

            </Row>
        </div>
    )
}

export default Myoffer
