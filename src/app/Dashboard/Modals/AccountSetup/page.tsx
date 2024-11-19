"use client";
import React, { useState } from "react";
import { Container, Row, Col, Nav, Tab, Form } from "react-bootstrap";
import logo from "../../../../../public/assets/images/svg/logo.svg";
import line_image from "../../../../../public/assets/images/svg/completed_line.svg";
import left_image from "../../../../../public/assets/images/svg/left_icon.svg";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/app/components/Layout/Laytout";
import "../CardNumberModal/cardNumber.css";

type TabType = "login" | "register";

const AccountSetup: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>("login");

  const handleTabClick = (tab: TabType) => {
    setSelectedTab(tab);
  };

  return (
    <div className=" min-vh-100 py-5 d-flex flex-column align-items-center justify-content-center bg_theme">
      <Container>
        <Link className="d-flex justify-content-center" href="#">
          <Image width={200} src={logo} alt="logo" />
        </Link>
        <div className="d-flex justify-content-center">
          <div
            className="bg-white w-100 rounded-2 mt-4 py-md-5  px-md-5 p-3 px-3"
            style={{ maxWidth: "900px" }}
          >
            <Image className="w-100 " src={line_image} alt="line_image" />
            <div className="d-flex gap-3 px-2 mt-4 align-items-center mt-2">
              <Image src={left_image} alt="line_image" />
              <p className="mb-0 fw-bold">Hi, Jhon Let’s Setup your Account</p>
            </div>
            <div className="row mt-4 px-2">
              <Form.Group controlId="formMobileNumber" className="mb-3 col-6 ">
                <Form.Label className="fs-6 red_ff color_lightblack fw-medium">
                  First Name
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  className=" border px-3 py-2 rounded-2 border-body border-2"
                />
              </Form.Group>
              <Form.Group controlId="formMobileNumber" className="mb-3 col-6 ">
                <Form.Label className="fs-6 red_ff color_lightblack fw-medium">
                  Last Name
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  className=" border px-3 py-2 rounded-2 border-body border-2"
                />
              </Form.Group>
              <Form.Group controlId="formMobileNumber" className="mb-3 col-6 ">
                <Form.Label className="fs-6 red_ff color_lightblack fw-medium">
                  Phone Number
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  className=" border px-3 py-2 rounded-2 border-body border-2"
                />
              </Form.Group>
              <Form.Group controlId="formMobileNumber" className="mb-3 col-6 ">
                <Form.Label className="fs-6 red_ff color_lightblack fw-medium">
                  Date of Birth
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  className=" border px-3 py-2 rounded-2 border-body border-2"
                />
              </Form.Group>
              <Form.Group controlId="formMobileNumber" className="mb-3 col-6 ">
                <Form.Label className="fs-6 red_ff color_lightblack fw-medium">
                  Personal Address
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  className=" border px-3 py-2 rounded-2 border-body border-2"
                />
              </Form.Group>
              <Form.Group controlId="formMobileNumber" className="mb-3 col-6 ">
                <Form.Label className="fs-6 red_ff color_lightblack fw-medium">
                  Mailing Address
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  className=" border px-3 py-2 rounded-2 border-body border-2"
                />
              </Form.Group>
              <Form.Group controlId="formMobileNumber" className="mb-3 col-6 ">
                <Form.Label className="fs-6 red_ff color_lightblack fw-medium">
                  Email Address
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  className=" border px-3 py-2 rounded-2 border-body border-2"
                />
              </Form.Group>
            </div>
            <div className="d-flex px-2 mt-3 align-items-center gap-2">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label form="vehicle1">
                I agree to the{" "}
                <span className=" color_blue fw-semibold tdn">
                  Terms & Conditions.
                </span>
              </label>
            </div>
            <Link href="/Dashboard/Modals/VehcileDetails">
              <button
                className="w-100 my-3 border-0 py-3 text-white red_ff fw-semibold rounded-2"
                style={{ backgroundColor: "#1364F1" }}
              >
                Proceed
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AccountSetup;
