"use client";
import React, { useState } from "react";
import { Container, Row, Col, Nav, Tab, Form } from "react-bootstrap";
import logo from "../../../../../public/assets/images/svg/logo.svg";
import cross_icon from "../../../../../public/assets/images/svg/cross_icon.svg";
import success_icon from "../../../../../public/assets/images/svg/right_img.svg";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/app/components/Layout/Laytout";
import "../VerificationCodeModal/verificarion.css";

type TabType = "login" | "register";

const SuccessfulModal: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>("login");

  const handleTabClick = (tab: TabType) => {
    setSelectedTab(tab);
  };

  return (
    <div className=" py-5 min-vh-100  d-flex flex-column align-items-center justify-content-center bg_theme">
      <Container>
        <Link className="d-flex justify-content-center" href="#">
          <Image width={200} src={logo} alt="logo" />
        </Link>
        <div className="d-flex justify-content-center">
          <div
            className="bg-white w-100 position-relative rounded-2 mt-4 py-md-5  px-md-5 p-3 px-3"
            style={{ maxWidth: "418px" }}
          >
            <Image
              className="mt-3 me-3 cusor position-absolute top-0 end-0"
              width={15}
              src={cross_icon}
              alt="logo"
            />
            <div className="d-flex align-items-center justify-content-center mb-2">
              <Image
                className="mt-3  me-3 cusor "
                width={55}
                src={success_icon}
                alt="logo"
              />
            </div>
            <h5 className="text-center mt-3 red_ff fw-semibold fs_24">
              Successful
            </h5>
            <p className="text-center red_ff" style={{ color: "#666666" }}>
              You have successfully setup your Account.
            </p>

            <Link href="/Dashboard/Modals/ChooseAccountTypeModal">
              <button
                className="w-100 mt-3 border-0 py-3 text-white red_ff fw-semibold rounded-2"
                style={{ backgroundColor: "#1364F1" }}
              >
                Go To Dashboard
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SuccessfulModal;
