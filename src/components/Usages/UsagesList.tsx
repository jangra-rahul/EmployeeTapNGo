import React from 'react';
import Share from './svg/share.svg';
import download from './svg/download.svg';
import search  from './svg/search.svg';
import bar from './svg/bar.svg';
import './usages.css';
import  { useState } from "react";
import { Row, Col, Nav, Form } from 'react-bootstrap';
import logo from "../../assets/images/svg/logo.svg";


const UsagesList = () => {
  const data = [
    {
      code: '001491',
      date: '04 Jan 2024',
      name: 'Sagar Malik',
      company: 'Charlie’s Car & Dog Wash PTY LTD',
      status: 'Paid',
      amount: '$1.33',
    },
    {
      code: '001492',
      date: '05 Jan 2024',
      name: 'Sagar Malik',
      company: 'Charlie’s Car & Dog Wash PTY LTD',
      status: 'Paid',
      amount: '$2.45',
    },
    {
      code: '001493',
      date: '06 Jan 2024',
      name: 'Sagar Malik',
      company: 'Charlie’s Car & Dog Wash PTY LTD ',
      status: 'Paid',
      amount: '$3.50',
    },
    {
      code: '001494',
      date: '07 Jan 2024',
      name: 'Sagar Malik',
      company: 'Charlie’s Car & Dog Wash PTY LTD',
      status: 'Paid',
      amount: '$4.75',
    },
    {
      code: '001495',
      date: '08 Jan 2024',
      name: 'Sagar Malik',
      company: 'Charlie’s Car & Dog Wash PTY LTD',
      status: 'Paid',
      amount: '$5.65',
    },
    {
      code: '001496',
      date: '09 Jan 2024',
      name: 'Sagar Malik',
      company: 'Charlie’s Car & Dog Wash PTY LTD',
      status: 'Paid',
      amount: '$6.80',
    },
   
  ];
  const [selectedTab, setSelectedTab] = useState<'Usage' | 'TaxInvoice' | 'Statements'>('Usage');

  const handleTabClick = (tab: 'Usage' | 'TaxInvoice' | 'Statements') => {
    setSelectedTab(tab);
  };
  return (
    <>
    <div className="row">
    <div className="rounded-2 mt-4 py-md-3 px-md-4 p-3">
      <Row className="justify-content-between align-items-center">
        <div className="col-6">
       
          <Row className="d-none d-md-flex">
            <Col sm={4} className="pe-0 text-center" onClick={() => handleTabClick('Usage')}>
              <Nav.Link href="#" className={selectedTab === 'Usage' ? 'active-tab' : ''}>
                <h3 className="red_ff fs_24">Usage</h3>
              </Nav.Link>
              <div className={`mt-2 border-1 border ${selectedTab === 'Usage' ? 'custom_border' : 'border-body'}`}></div>
            </Col>
            <Col sm={4} className="px-0 text-center" onClick={() => handleTabClick('TaxInvoice')}>
              <Nav.Link href="#" className={selectedTab === 'TaxInvoice' ? 'active-tab' : ''}>
                <h3 className="fs_24">Tax Invoice</h3>
              </Nav.Link>
              <div className={`mt-2 border-1 border ${selectedTab === 'TaxInvoice' ? 'custom_border' : 'border-body'}`}></div>
            </Col>
            <Col sm={4} className="px-0 text-center" onClick={() => handleTabClick('Statements')}>
              <Nav.Link href="#" className={selectedTab === 'Statements' ? 'active-tab' : ''}>
                <h3 className="fs_24">Statements</h3>
              </Nav.Link>
              <div className={`mt-2 border-1 border ${selectedTab === 'Statements' ? 'custom_border' : 'border-body'}`}></div>
            </Col>
          </Row>

      
          <Form.Group className="position-relative d-md-none">
  <Form.Control
    as="select"
    value={selectedTab}
    onChange={(e) =>
      handleTabClick(e.target.value as 'Usage' | 'TaxInvoice' | 'Statements')
    }
    className="custom-select"
  >
    <option value="Usage">Usage</option>
    <option value="TaxInvoice">Tax Invoice</option>
    <option value="Statements">Statements</option>
  </Form.Control>
  <div className="arrow-down"></div>
</Form.Group>

        </div>
        <div className="col-6 d-flex gap-3 border-bottom border-2 px-0 justify-content-end">
          <img className="mb-2" width={30} src={search} alt="Search" />
          <img className="mb-2" width={30} src={bar} alt="Bar" />
        </div>
      </Row>
    </div>
</div>
      <div className='table-responsive'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col ' className='red-ff ' >Invoice No.</th>
              <th scope='col' >Date</th>
              <th scope='col' >From</th>
              <th scope='col' >To</th>
              <th scope='col' className='text-success' >Status</th>
              <th scope='col' >Amount</th>
              <th scope='col'></th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td className='text-nowrap'>{row.code}</td>
                <td className='text-nowrap'>{row.date}</td>
                <td className='text-nowrap'>{row.name}</td>
                <td className='text-nowrap'>{row.company}</td>
                <td className='text-success text-nowrap'>{row.status}</td>
                <td className='red-ff fw-medium text-nowrap'>{row.amount}</td>
                <td>
                  <p className='action text-nowrap'>
                    share <img src={Share} alt='share' />
                  </p>
                </td>
                <td>
                  <p className='action text-nowrap'>
                    download <img src={download} alt='download' />
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsagesList;
