

import React from 'react';
import Table from 'react-bootstrap/Table';
import { Row, Button, Col } from 'react-bootstrap';
import "./notification.css";

const NotificationPage = () => {

  const notifications = [
    {
      initial: 'C',
      title: 'Card Authorization Request',
      description: 'Andrew has requested to add you as a family member. On approval, they will be able to manage your card.',
      actions: true,
    },
    {
      initial: 'B',
      title: 'Card Authorization Request',
      description: 'You have reached 90% of your monthly dining out budget. Consider adjusting your spending to stay within budget limits and...',
      time: '30 min',
    },
    {
      initial: 'F',
      title: 'Card Authorization Request',
      description: 'Congratulations! You\'ve made significant progress towards your \'Vacation Fund\' goal. You are now 70% closer to your target....',
      time: '30 min',
    },
    {
      initial: 'U',
      title: 'Card Authorization Request',
      description: 'We\'ve noticed a spike in your online shopping expenses this month. If this is expected, no action is needed. However, if you...',
      time: '30 min',
    },
    {
      initial: 'R',
      title: 'Card Authorization Request',
      description: 'You have several uncategorized transactions in your account. To ensure accurate spending analysis, please take a moment...',
      time: '30 min',
    },
    {
      initial: 'R',
      title: 'Card Authorization Request',
      description: 'You have several uncategorized transactions in your account. To ensure accurate spending analysis, please take a moment...',
      time: '30 min',
    },
    {
      initial: 'R',
      title: 'Card Authorization Request',
      description: 'You have several uncategorized transactions in your account. To ensure accurate spending analysis, please take a moment...',
      time: '30 min',
    },
  ];
  return (
    <>
      <div className='bg-white px-3 py-2 mt-2 rounded-2'>
        <Row className='bg-white mx-2'>
          <Col xs={12} md={6} className='fs_24 fw-semibold my-2 bg-white'>
            Notifications
          </Col>
          <Col xs={12} md={6} className='d-flex justify-content-md-end justify-content-center my-2 bg-white'>
            <div className='d-flex gap-3'>
              <button className='Custom_button fw-medium red_ff fs_16 px-2 rounded-2'>Archive all</button>
              <button className='Custom_button fw-medium red_ff fs_16 px-2 rounded-2'>Mark all as Read</button>
            </div>
          </Col>
        </Row>
        <hr />
        <Row className='d-flex bg-white py-3 mx-2'>
          <Table striped bordered hover className='table-responsive'>
            <tbody>
              {notifications.map((notification, index) => (
                <div key={index} className="mb-3">
                  <tr className='border common-border d-flex justify-content-between rounded-3'>
                    <div className='d-flex gap-2 align-items-center'>
                      <td className='ps-3 '><input className='checkbox' type="checkbox" /></td>
                      <td className={`circle${index % 2} d-flex justify-content-center align-items-center fs_20 rounded-5`}>{notification.initial}</td>
                      <td className='fs_18 fw-medium red_ff'>{notification.title}</td>
                    </div>
                    <td className='d-flex align-items-center text-start fs_16 red_ff'>{notification.description}</td>
                    <td className='d-flex gap-3 justify-content-around'>
                      {notification.actions ? (
                        <>
                          <Button className='Accept-button'>Accept</Button>
                          <Button className='Decline-button'>Decline</Button>
                        </>
                      ) : (
                        <p className='pe-3'>{notification.time}</p>
                      )}
                    </td>
                  </tr>
                </div>
              ))}
            </tbody>
          </Table>
        </Row>
      </div>
    </>
  );
}


export default NotificationPage;
