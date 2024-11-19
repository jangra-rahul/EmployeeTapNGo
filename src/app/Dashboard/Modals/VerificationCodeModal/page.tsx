"use client";
import React, { useState } from "react";
import { Container, Row, Col, Nav, Tab, Form } from "react-bootstrap";
import logo from "../../../../../public/assets/images/svg/logo.svg";
import line_image from "../../../../../public/assets/images/svg/completed_line.svg";
import cross_icon from "../../../../../public/assets/images/svg/cross_icon.svg";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/app/components/Layout/Laytout";
import "../VerificationCodeModal/verificarion.css";

type TabType = "login" | "register";

const VehcileDetails: React.FC = () => {
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
            style={{ maxWidth: "500px" }}
          >
            <Image
              className="mt-3 me-3 cusor position-absolute top-0 end-0"
              width={15}
              src={cross_icon}
              alt="logo"
            />
            <h5 className="text-center red_ff fw-semibold fs_24">
              Verification Code
            </h5>
            <p className="text-center red_ff" style={{ color: "#666666" }}>
              We have sent the OTP code to +61 xxxx xxx35 for the verification
              process.
            </p>
            <div className="d-flex mt-3 align-items-center gap-2 justify-content-center">
              <input
                className="w-100 fs_40 red_ff rounded-2 fw-bold red_ff text-center "
                style={{
                  maxWidth: "60px",
                  height: "60px",
                  border: "2px solid #BEBEBE",
                }}
                type="text"
              />
              <input
                className="w-100 fs_40 red_ff rounded-2 fw-bold red_ff text-center "
                style={{
                  maxWidth: "60px",
                  height: "60px",
                  border: "2px solid #BEBEBE",
                }}
                type="text"
              />
              <input
                className="w-100 fs_40 red_ff rounded-2 fw-bold red_ff text-center "
                style={{
                  maxWidth: "60px",
                  height: "60px",
                  border: "2px solid #BEBEBE",
                }}
                type="text"
              />
              <input
                className="w-100 fs_40 red_ff rounded-2 fw-bold red_ff text-center "
                style={{
                  maxWidth: "60px",
                  height: "60px",
                  border: "2px solid #BEBEBE",
                }}
                type="text"
              />
              <input
                className="w-100 fs_40 red_ff rounded-2 fw-bold red_ff text-center "
                style={{
                  maxWidth: "60px",
                  height: "60px",
                  border: "2px solid #BEBEBE",
                }}
                type="text"
              />
              <input
                className="w-100 fs_40 red_ff rounded-2 fw-bold red_ff text-center "
                style={{
                  maxWidth: "60px",
                  height: "60px",
                  border: "2px solid #BEBEBE",
                }}
                type="text"
              />
            </div>
            <p className="mb-0 mt-5 cursor-pointer text-center">
              <span className=" cusor color_blue tdn fw-semibold ">
                Resend Code
              </span>
            </p>
            <Link href="/Dashboard/Modals/ChooseAccountTypeModal">
              <button
                className="w-100 mt-3 border-0 py-3 text-white red_ff fw-semibold rounded-2"
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

export default VehcileDetails;
