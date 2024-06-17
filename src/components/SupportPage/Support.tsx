import React, { useState } from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';

type Notification = {
  id: number;
  type: string;
  title: string;
  message: string;
  actions: { label: string; variant: string }[];
  time: string;
  read: boolean;
};

const Support: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'C',
      title: 'Card Authorization Request',
      message:
        'Andrew Has requested to add you as family member, on approval of it you they will be able to manage your card.',
      actions: [
        { label: 'Accept', variant: 'outline-success' },
        { label: 'Decline', variant: 'outline-danger' },
      ],
      time: '',
      read: false,
    },
    {
      id: 2,
      type: 'B',
      title: 'Budget Threshold Reached',
      message:
        'You have reached 90% of your monthly dining out budget. Consider adjusting your spending to stay within budget limits and...',
      actions: [],
      time: '30 Min ago',
      read: false,
    },
    {
      id: 3,
      type: 'F',
      title: 'Financial Goal Progress',
      message:
        "Congratulations! You've made significant progress towards your 'Vacation Fund' goal. You are now 70% closer to your target....",
      actions: [],
      time: '30 Min ago',
      read: false,
    },
    {
      id: 4,
      type: 'U',
      title: 'Unusual Spending Patterns',
      message:
        "We've noticed a spike in your online shopping expenses this month. If this is expected, no action is needed. However, if you ...",
      actions: [],
      time: '30 Min ago',
      read: false,
    },
    {
      id: 5,
      type: 'R',
      title: 'Reminder to Categorize Expenses',
      message:
        'You have several uncategorized transactions in your account. To ensure accurate spending analysis, please take a moment ...',
      actions: [],
      time: '30 Min ago',
      read: false,
    },
    {
      id: 6,
      type: 'B',
      title: 'Budget Threshold Reached',
      message:
        'You have reached 90% of your monthly dining out budget. Consider adjusting your spending to stay within budget limits and...',
      actions: [],
      time: '30 Min ago',
      read: false,
    },
    {
      id: 7,
      type: 'F',
      title: 'Financial Goal Progress',
      message:
        "Congratulations! You've made significant progress towards your 'Vacation Fund' goal. You are now 70% closer to your target....",
      actions: [],
      time: '30 Min ago',
      read: false,
    },
    {
      id: 8,
      type: 'U',
      title: 'Unusual Spending Patterns',
      message:
        "We've noticed a spike in your online shopping expenses this month. If this is expected, no action is needed. However, if you ...",
      actions: [],
      time: '30 Min ago',
      read: false,
    },
  ]);

  const handleRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const handleArchive = () => {
    setNotifications([]);
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, read: true }))
    );
  };

  return (
    <div className='px-3 py-3 bg-white'>
      <Row className='mb-3 ' >
        <Col className='d-flex justify-content-between'>
          <p className='fs-4 fw-semibold text-primary'>Notifications</p>
          <div className='d-flex gap-2'>
            <Button onClick={handleArchive} className='btn-secondary'>
              Archive all
            </Button>
            <Button onClick={markAllAsRead}>Mark all as Read</Button>
          </div>
        </Col>
      </Row>
      {notifications.map((notification, index) => (
        <div className='px-3 main_hover_box'>

      
        <Row 
          key={notification.id}
          className={`py-2 border-bottom border border-box ps-4 px-3  hover_box${notification.read ? 'text-muted' : ''}`}
          style={{ marginBottom: '10px' }}
        >
          <Col xs='auto' className='d-flex align-items-center'>
            <Form.Check
              type='checkbox'
              checked={notification.read}
              onChange={() => handleRead(notification.id)}
              className='me-2'
            />
          </Col>
          <Col xs='auto' className='d-flex align-items-center'>
            <span
              className={`rounded-circle d-flex justify-content-center align-items-center text-${
                notification.type === 'C' ? 'white' : 'black'
              } fs-12 bg-${
                notification.type === 'C'
                  ? 'primary'
                  : notification.type === 'B'
                  ? 'light'
                  : notification.type === 'F'
                  ? 'light'
                  : notification.type === 'U'
                  ? 'light'
                  : notification.type === 'R'
                  ? 'light'
                  : 'light'
              }`}
              style={{ width: '30px', height: '30px', marginRight: '10px' }}
            >
              {notification.type}
            </span>
          </Col>
          <Col xs={8} md={9}>
          <div className='d-flex justify-content-between gap-3 '>
            
            <p className='mb-1 fw-semibold red_ff mb-0'>{notification.title}</p>
            <p className='mb-1 fw-medium  red_ff mb-0'>{notification.message}</p>
          </div>
          </Col>
          <Col xs={12} md={2} className='d-flex flex-column align-items-md-end justify-content-center '>
            {index !== 0 && <p className='mb-0'>{notification.time}</p>}
            {notification.actions.length > 0 && (
              <div className='d-flex gap-2'>
                {notification.actions.map((action) => (
                  <Button
                    key={action.label}
                    variant={action.variant}
                    className='px-2 py-1'
                    size='sm'
                  >
                    {action.label}
                  </Button>
                ))}
              </div>
            )}
          </Col>
        </Row>
        </div>
      ))}
    </div>
    
  );
};

export default Support;
