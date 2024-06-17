import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import Plus from "../../assets/images/svg/secondPlus.svg"
const FrequentlyAskedQuestion: React.FC = () => {
  const [show, setShow] = useState(false);

  const toggleDropdown = () => {
    setShow(!show);
  };

  return (
    <div className='px-3 py-3 bg-white'>
      <h1 className='fs_28 fw-semibold red_ff'>Frequently Asked Question</h1>

      <Row className='py-3'>
        <Col xs={12} md={2} className='mb-4 h-100 p-0 m-0 box_size '>
          <div className='px-3 '> 
            <div className="fs_16 red_ff fw-medium" style={{ position: 'relative' }}>
              <div
                style={{ color: 'blue', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                onClick={toggleDropdown}
              >
                Money Top-Up <FaChevronRight style={{ marginLeft: 'auto' }} />
              </div>
              <Dropdown show={show} drop="down" onToggle={() => setShow(false)}>
                <Dropdown.Toggle id="dropdown-basic-button" as="div" style={{ display: 'none' }} />
                <Dropdown.Menu style={{ position: 'absolute', top: '100%', left: '0' }}>
                  <Dropdown.Item href="#/10">$10</Dropdown.Item>
                  <Dropdown.Item href="#/20">$20</Dropdown.Item>
                  <Dropdown.Item href="#/50">$50</Dropdown.Item>
                  <Dropdown.Item href="#/100">$100</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <hr className='p-0 ' />
            <p className='fs_16 red_ff  p-0  '>Creating New Account</p>
            <hr  className='p-0  '/>
            <p className='fs_16 red_ff p-0  '>My Transactions</p>
            <hr className='p-0  '/>
            <p className='fs_16 red_ff p-0  '>Raising a Ticket</p>
            <hr className='p-0  '/>
            <p className='fs_16 red_ff  p-0  '>General</p>
            <hr className='p-0  '/>
          </div>
        </Col>

        <Col xs={12} md={5} className='mb-4 d-flex flex-column  h-100 justify-content-between'>
          <div className='border border-secondary px-3 py-2 m-0 '>
            <div className='m-0 p-0 mb-0 d-flex justify-content-between'>
              <p className="p-0 m-0 red_ff fs_16 fw-medium">How can I add funds to my account?</p>
              <img className='' src={Plus} alt="" />
            </div>
            <hr />
            <p className=''> To top up your account, navigate to the "Account" or "Profile" <br/> section in the dashboard, and you should find an option for "Add <br/> Funds" or "Top-Up." Follow the on-screen instructions to complete <br/> the transaction using your preferred payment method.</p>
          </div>

          <div className='border border-secondary px-3 py-3  mt-3 '> 
            <div className='m-0 p-0 mb-0 d-flex justify-content-between'>
            <p className='p-0 m-0 red_ff fs_16 fw-medium'>What payment methods are supported for topping up my <br />  account? </p>
            <img className='' src={Plus} alt="" />
            </div>
            </div>
          <div className='border border-secondary px-2 py-3 mt-3 '> 
            <div className='m-0 p-0 mb-0 d-flex justify-content-between '>
            <p className='p-0 m-0 red_ff fs_16 fw-medium'>Is there a minimum or maximum limit for money top-ups?</p>
            <img className='' src={Plus} alt="" />
            </div>
            </div>
          <div className='border border-secondary px-2 py-3 mt-3  '> 
            <div className='m-0 p-0 mb-0 d-flex justify-content-between'>
            <p className='p-0 m-0 red_ff fs_16 fw-medium'>How long does it take for my account to reflect the  newly <br/> added funds? </p>
            <img className='' src={Plus} alt="" />
            </div>
            </div>
          <div className='border border-secondary px-2 py-3 mt-3'> 
            <div className='m-0 p-0 mb-0 d-flex justify-content-between'>
            <p className='p-0 m-0 red_ff fs_16 fw-medium'>Are there any fees associated with topping up my account? </p>
            <img className='' src={Plus} alt="" />
            </div>
            </div>
         
        </Col>

        <Col xs={12} md={5} className='mb-4 d-flex flex-column  h-100 justify-content-between'>
          <div className='border border-secondary px-3 py-2 m-0 '>
            <div className='m-0 p-0 mb-0 d-flex justify-content-between'>
              <p className='p-0 m-0 red_ff fs_16 fw-medium'>How can I add funds to my account?</p>
              <img className='' src={Plus} alt="" />
            </div>
            <hr />
            <p className=''> To top up your account, navigate to the "Account" or "Profile" <br/> section in the dashboard, and you should find an option for "Add <br/> Funds" or "Top-Up." Follow the on-screen instructions to complete <br/> the transaction using your preferred payment method.</p>
          </div>

          <div className='border border-secondary px-3 py-3  mt-3 '> 
            <div className='m-0 p-0 mb-0 d-flex justify-content-between'>
            <p className='p-0 m-0 red_ff fs_16 fw-medium'>What payment methods are  topping up my <br /> account? </p>
            <img className='' src={Plus} alt="" />
            </div>
            </div>
          <div className='border border-secondary px-3 py-3 mt-3 '> 
            <div className='m-0 p-0 mb-0 d-flex justify-content-between '>
            <p className='p-0 m-0 red_ff fs_16 fw-medium'>Is there a minimum or maximum limit for money top-ups?</p>
            <img className='' src={Plus} alt="" />
            </div>
            </div>
          <div className='border border-secondary px-3 py-3 mt-3 '> 
            <div className='m-0 p-0 mb-0 d-flex justify-content-between'>
            <p className='p-0 m-0 red_ff fs_16 fw-medium'>How long does it take for my account to reflect the newly <br/>added funds? </p>
            <img className='' src={Plus} alt="" />
            </div>
            </div>
          <div className='border border-secondary px-3 py-3 mt-3'> 
            <div className='m-0 p-0 mb-0 d-flex justify-content-between'>
            <p className='p-0 m-0 red_ff fs_16 fw-medium'>Are there any fees associated with topping up my account? </p>
            <img className='' src={Plus} alt="" />
            </div>
            </div>
         
        </Col>

       <div className='d-flex justify-content-center align-content-center mt-5 '>
        <p>Didn't get you question answered?  <a href='#'>Contact Us</a>
        </p>
       </div>
      </Row>
    </div>
  );
}

export default FrequentlyAskedQuestion;
