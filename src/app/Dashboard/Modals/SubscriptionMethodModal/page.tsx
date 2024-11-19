"use client";
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Tab,
  Form,
  Card,
  Button,
} from "react-bootstrap";
import logo from "../../../../../public/assets/images/svg/logo.svg";
import Image from "next/image";
import Link from "next/link";
import "../../Subcriptiondashboard/subcription.css";
import Tick from "../../../../../public/assets/images/svg/tick.svg";
import left_icon from "../../../../../public/assets/images/svg/left_icon.svg";

type TabType = "login" | "register";

const SubscriptionMethodModal: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>("login");

  const handleTabClick = (tab: TabType) => {
    setSelectedTab(tab);
  };

  const [isSelect, setIsSelect] = useState<Number>(0);
  const data = [
    {
      heading: "Starter Plan",
      price: "$49",
      month: "/Month",
      info: "Basic Reporting",
      info1: "Email Reminders",
      info2: "Budgeting Tools",
      info3: "Expense Tracking",
      info4: "Customer Support",
      plan: "Upgrade Now",
      isActive: true,
    },
    {
      heading: "Basic Plan",
      price: "$99",
      month: "/Month",
      info: "Expense Tracking",
      info1: "Basic Reporting",
      info2: "Budgeting Tools",
      info3: "Email Reminders",
      info4: "Customer Support",
      plan: "Upgrade Now",
    },
    {
      heading: "Premium Plan",
      price: "$199",
      month: "/Month",
      info: "Automatic Transaction Import",
      info1: "Advanced Analytics",
      info2: "Customizable Dashboards",
      info3: "Expense Tracking",
      info4: "Financial Goal Tracking",
      plan: "Upgrade Now",
      Popular: "Popular",
    },
    {
      heading: "Platinum Plan",
      price: "$229",
      month: "/Month",
      info: "Real-Time Data Sync",
      info1: "AI-Powered Insights",
      info2: "Expense Forecasting",
      info3: "Multi-Currency Support",
      info4: "Exclusive Financial Workshops",
      plan: "Upgrade Now",
    },
  ];

  return (
    <div className=" py-5 min-vh-100  d-flex flex-column align-items-center justify-content-center bg_theme">
      <Container>
        <Link className="d-flex justify-content-center" href="#">
          <Image width={200} src={logo} alt="logo" />
        </Link>
        <Row className="justify-content-center p-2 bg-white rounded-2 mt-4 p-4">
          <div className="d-flex align-items-center gap-3 py-2">
            <Image width={10} src={left_icon} alt="left_icon" />
            <h6 className="mb-0">Subscription Plans</h6>
          </div>
          {data.map((row, index) => (
            <Col key={index} sm={6} xl={3} className="mb-4 px-1 px-md-2 ">
              <Card className="bg-color p-md-3 h-100 border-0">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between align-items-center">
                      <Card.Title className="fs_20 fw-medium red_ff dashboard-text-color    ">
                        {row.heading}
                      </Card.Title>
                      {row.Popular ? (
                        <>
                          <Card.Title className="fs_20 fw-medium red_ff dashboard-text-color    ">
                            <span
                              className="fs_13 red_ff px-2 py-1 fw-semibold rounded-2"
                              style={{
                                backgroundColor: "#E3F4E7",
                                color: "#0E8029",
                              }}
                            >
                              {row.Popular}
                            </span>
                          </Card.Title>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="d-flex align-items-end mar-bot-2 mb-2">
                      <p className="fs_40 mb-0 fw-semibold red_ff dashboard-text-color">
                        {row.price}
                      </p>
                      <p className="mb-2 ps-1 fs_16 red_ff fw-normal dashboard-text-color">
                        {row.month}
                      </p>
                    </div>
                    <hr />
                    <Card.Text className="pt-3">
                      <p className="d-flex gap-md-3 gap-2 pt-3 red_ff fs_16 fw-normal dashboard-text-color ">
                        <Image src={Tick} alt="tick" width={20} />
                        {row.info}
                      </p>
                      <p className="d-flex gap-md-3 gap-2  pt-3 red_ff fs_16 fw-normal dashboard-text-color ">
                        <Image src={Tick} alt="tick" width={20} />
                        {row.info1}
                      </p>
                      <p className="d-flex gap-md-3 gap-2 pt-3 red_ff fs_16 fw-normal dashboard-text-color ">
                        <Image src={Tick} alt="tick" width={20} />
                        {row.info2}
                      </p>
                      <p className="d-flex gap-md-3 gap-2 pt-3 red_ff fs_16 fw-normal dashboard-text-color">
                        <Image src={Tick} alt="tick" width={20} />
                        {row.info3}
                      </p>
                      <p className="d-flex gap-md-3 gap-2 pt-3 red_ff fs_16 fw-normal dashboard-text-color">
                        <Image src={Tick} alt="tick" width={20} />
                        {row.info4}
                      </p>
                    </Card.Text>
                  </div>
                  {/* <div className="d-flex justify-content-center mt-5 pt-5 red_ff">
                    {isSelect === index ? (
                      <>
                        <div className="fs_14 w-100 text-center  ">
                          <span className="w-100 d-flex justify-content-center">
                            <p
                              className="text-center fw-semibold fs_16 red_ff "
                              style={{
                                borderBottom: "2px solid #1364F1",
                                color: "#1364F1",
                              }}
                            >
                              Cancel
                            </p>
                          </span> */}

                  <Link href="/Dashboard/Modals/AddPaymentMethodModal">
                    <button
                      style={{ backgroundColor: "#1364F1" }}
                      className="fs_14 w-100 text-dark text-white fw-semibold fw-smedium red_ff fs_16  border-0 rounded-3 py-2 text-center"
                    >
                      Select Plan
                    </button>
                  </Link>
                  {/* </div>
                      </>
                    ) : (
                      <>
                        {" "}
                        <Link
                          href="/Dashboard/Payment"
                          passHref
                          className="w-100"
                        >
                          <Button
                            variant="primary"
                            onClick={() => setIsSelect(index)}
                            className="w-100 "
                          >
                            {row.plan}
                          </Button>
                        </Link>
                      </>
                    )} */}
                  {/* </div> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SubscriptionMethodModal;
