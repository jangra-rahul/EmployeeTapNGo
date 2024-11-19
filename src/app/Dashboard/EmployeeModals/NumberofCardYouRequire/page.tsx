"use client";
import React, { useState } from "react";
import { Container, Row, Col, Nav, Tab, Form } from "react-bootstrap";
import logo from "../../../../../public/assets/images/svg/logo.svg";
import Image from "next/image";
import Link from "next/link";
import line_image from "../../../../../public/assets/images/svg/completed_line.svg";
import left_image from "../../../../../public/assets/images/svg/left_icon.svg";

type TabType = "login" | "register";

const NumberofCardYouRequire: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>("login");

  const handleTabClick = (tab: TabType) => {
    setSelectedTab(tab);
  };

  return (
    <div className="min-vh-100 py-3 d-flex flex-column align-items-center justify-content-center bg_theme">
      <Container>
        <Link className="d-flex justify-content-center" href="#">
          <Image width={200} src={logo} alt="logo" />
        </Link>
        <div className="d-flex justify-content-center">
          <div
            className="bg-white w-100 rounded-2 mt-4 py-md-5 px-md-5 p-3"
            style={{ maxWidth: "494px" }}
          >
            <Image className="w-100 " src={line_image} alt="line_image" />
            <div className="d-flex gap-3 px-2 mt-4 align-items-start mt-2">
              <Image className="mt-2" src={left_image} alt="line_image" />
              <div>
                <p className="mb-0 fw-bold">Number of Card You Require</p>
                <p style={{ fontStyle: "italic" }} className="red_ff fw-light">
                  Normally 1 Card per Employee
                </p>
              </div>
            </div>
            <Form.Group controlId="formMobileNumber" className="mb-3 mt-3">
              <Form.Control
                type="number"
                placeholder="Enter Number of Card you require"
                className=" border px-3 py-2 rounded-2 border-body border-2"
              />
            </Form.Group>
            <Link href="/Dashboard/EmployeeModals/EmployeeChooseAccountType">
              <button
                className="w-100 my-3 border-0 py-3 text-white red_ff fw-semibold rounded-2"
                style={{ backgroundColor: "#1364F1" }}
              >
                {" "}
                Proceed
              </button>
            </Link>
            {/* <a className="" href="#">
              Don’t have a Card?{" "}
              <span className=" color_blue fw-semibold tdn">Click here!</span>
            </a> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NumberofCardYouRequire;
