import React, { useState } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import user from "../../assets/images/svg/userimg.svg";
import DownloadCardModal from '../FamilyMember/DownloadCardModal';
import Cards from './Cards';
import SocialMedia from './SocialMedia';
import CarRegistration from './Carregisteration';
import PostpaidAccountModal from './PostpaidAccountModal'; 
import "./profile.css"

type ComponentType = 'Profile' | 'Cards' | 'SocialMedia' | 'CarRegistration';

const Profile = () => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showPostpaidModal, setShowPostpaidModal] = useState(false); 
  const [activeComponent, setActiveComponent] = useState<ComponentType>('Profile');

  const handleCloseDownloadModal = () => setShowDownloadModal(false);
  const handleShowPostpaidModal = () => setShowPostpaidModal(true); 
  const handleClosePostpaidModal = () => setShowPostpaidModal(false); 

  const handleComponentChange = (component: ComponentType) => () => setActiveComponent(component);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Row className="justify-content-center">
        <div className='d-flex flex-wrap gap-3 mt-3 p-0 m-0 ps-3 ms-3'>
          <p className={`fs_16 md:fs_28 red_ff fw-semibold C-pointer m-0 p-0 ${activeComponent === 'Profile' ? 'active' : ''}`} onClick={handleComponentChange('Profile')}>Profile</p>
          <p className={`fs_16 md:fs_28 red_ff fw-semibold C-pointer m-0 p-0  ${activeComponent === 'Cards' ? 'active' : ''}`} onClick={handleComponentChange('Cards')}>Cards</p>
          <p className={`fs_16 md:fs_28 red_ff fw-semibold C-pointer m-0 p-0  ${activeComponent === 'SocialMedia' ? 'active' : ''}`} onClick={handleComponentChange('SocialMedia')}>Social Media</p>
          <p className={` fs_16  red_ff fw-semibold C-pointer m-0 p-0  ${activeComponent === 'CarRegistration' ? 'active' : ''}`} onClick={handleComponentChange('CarRegistration')}>Car Registration</p>
        </div>
      </Row>
      <hr className='p-0 m-0' />

      <Row className="justify-content-center">
        <Col xs={12}>
          {activeComponent === 'Profile' && (
            <Row className="justify-content-center">
              <Col xs={12} md={6} className='d-flex justify-content-around flex-wrap'>
                <div className="me-5 pe-5">
                  <div className='d-flex ps-3 mt-3'>
                    <img src={user} alt="User" className='img-fluid' />
                    <div className='mt-3 ms-3'>
                      <p className='p-0 m-0 mb-2 fs-24 red_ff fw-semibold'>Andrew Jonson</p>
                      <p className='fs-16 fw-medium red_ff'>+01 234 567 890</p>
                    </div>
                  </div>
                  <Form className="mt-5 ps-4 " onSubmit={handleSubmit}>
                    <div className='d-flex flex-column flex-md-row gap-3   md:w-100 ps-3 my-3 '>
                      <Form.Group className="mb-3 w-100 fs-16 red_ff fw-light" controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                      </Form.Group>
                      <Form.Group className="mb-3 w-100 fs-16 red_ff fw-light" controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                      </Form.Group>
                    </div>
                    <div className='d-flex flex-column flex-md-row gap-3 w-100 my-3 ps-3'>
                      <Form.Group className="mb-3 w-100 fs-16 red_ff fw-light" controlId="email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="example@gmail.com" />
                      </Form.Group>
                      <Form.Group className="mb-3 w-100 fs-16 red_ff fw-light" controlId="mobile">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="tel" placeholder="+01 123 456 789" />
                      </Form.Group>
                    </div>
                    <div className='d-flex flex-column flex-md-row gap-3 w-100 my-3 ps-3'>
                      <Form.Group className="mb-3 w-100 fs-16 red_ff fw-light" controlId="dob">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" />
                      </Form.Group>
                      <Form.Group className="mb-3 w-100 fs-16 red_ff fw-light" controlId="corporateCard">
                        <Form.Label>Corporate Card</Form.Label>
                        <Form.Control type="text" placeholder="04683116661" />
                      </Form.Group>
                    </div>
                    <Form.Group className="mb-3 ps-3 w-100 fs-16 red_ff fw-light" controlId="accountType">
                      <Form.Label>Account Type</Form.Label>
                      <Form.Control type="text" placeholder="Prepaid" />
                    </Form.Group>
                    <div className='ps-3 w-100'>
                      <Button type="submit" className='w-100 mt-3'>Save Changes</Button>
                    </div>
                  </Form>
                </div>
              </Col>
              <Col xs={12} md={6} className='mt-4 mt-md-0'>
                <p className='fs-20 red_ff fw-medium mt-4'>Account Details</p>
                <div className='d-flex flex-column gap-3'>
                  <div className='d-flex flex-column'>
                    <p className='p-0 m-0 fs-16 fw-light red_ff'>Account Type</p>
                    <p className='fs-20 red_ff fw-medium'>Prepaid</p>
                  </div>
                  <div className='d-flex flex-column'>
                    <p className='p-0 m-0 fs-16 fw-light red_ff'>Last Updated on</p>
                    <p className='fs-20 red_ff fw-medium'>12-02-2024</p>
                  </div>
                  <Button className='border-0 mb-3 postpaid-button' onClick={handleShowPostpaidModal}>
                    Request Postpaid Account
                  </Button>
                </div>
              </Col>
            </Row>
          )}
          {activeComponent === 'Cards' && (
            <Cards onShowProfile={handleComponentChange('Profile')} />
          )}
          {activeComponent === 'SocialMedia' && (
            <SocialMedia />
          )}
          {activeComponent === 'CarRegistration' && (
            <CarRegistration />
          )}
        </Col>
      </Row>

      <DownloadCardModal show={showDownloadModal} handleClose={handleCloseDownloadModal} />
      <PostpaidAccountModal show={showPostpaidModal} handleClose={handleClosePostpaidModal} /> 
    </>
  );
};

export default Profile;
