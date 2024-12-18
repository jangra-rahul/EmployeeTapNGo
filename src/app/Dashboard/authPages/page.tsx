"use client";
import React, { useState } from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import logo from "../../../../public/assets/images/svg/logo.svg";
import Login from "./Login";
import Register from "./Register";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/app/components/Layout/Laytout";

type TabType = "login" | "register";

const LoginAndSignupHeader: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>("login");

  const handleTabClick = (tab: TabType) => {
    setSelectedTab(tab);
  };

  return (
    <div className="vh-100 position-relative py-3 d-flex flex-column align-items-center justify-content-center bg_theme">
      <Container>
        <Link className="d-flex justify-content-center" href="#">
          <Image src={logo} alt="logo" />
        </Link>
        <div className="d-flex justify-content-center">
          <div
            className="bg-white rounded-2 mt-4 py-md-5  px-md-5 p-3"
            style={{ maxWidth: "494px" }}
          >
            {/* <Row className="pt-5">
          <Col
            sm={6}
            className="pe-0 text-center"
            onClick={() => handleTabClick("login")}
          >
            <Nav.Link
              href="#"
              className={
                selectedTab === "login" ? "active-tab text-blue " : ""
              }
            >
              <p className="red_ff fs_24 fw-normal text-color text-dark">Login</p>
            </Nav.Link>
            {selectedTab === "login"  ? (
              <div className="mt-2 custom_border border-body border-1 border"></div>
            ) : (
              <div className="mt-2 border-body border-1 border"></div>
            )}
          </Col>
          <Col
            sm={6}
            className="ps-0 text-center"
            onClick={() => handleTabClick("register")}
          >
            <Nav.Link
              href="#"
              className={
                selectedTab === "register" ? "active-tab color_blue" : ""
              }
            >
              <p className="red_ff fs_24 fw-normal text-color text-dark">Register</p>
            </Nav.Link>
            {selectedTab === "register" ? (
              <div className="mt-2 custom_border border-body border-1 border"></div>
            ) : (
              <div className="mt-2 border-body border-1 border"></div>
            )}
          </Col>
        </Row>
        <Tab.Content className="mt-3">
          <Tab.Pane
            eventKey="login"
            className={selectedTab === "login" ? "show active" : ""}
          >
            <Login />
          </Tab.Pane>
          <Tab.Pane
            eventKey="register"
            className={selectedTab === "register" ? "show active" : ""}
          >
            <Register />
          </Tab.Pane>
        </Tab.Content> */}
            <Login />
          </div>
        </div>
      </Container>
      <div className="position-absolute start-0 bottom-0 ps-sm-5 mx-sm-1 mx-3 pb-3">
        <p style={{ color: "#C0C5CD" }}>
          Copyright © 2024. Tap N Go Pvt Ltd All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LoginAndSignupHeader;
