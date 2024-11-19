"use client";
import React, { useState } from "react";
import { Container, Row, Col, Nav, Tab, Form } from "react-bootstrap";
import logo from "../../../../../public/assets/images/svg/logo.svg";
import line_image from "../../../../../public/assets/images/svg/completed_line.svg";
import left_image from "../../../../../public/assets/images/svg/left_icon.svg";
import Image from "next/image";
import Link from "next/link";
import "../DirectorsInformationModal/information.css";
import bottom_icon from "../../../../assets/images/svg/bottom_icon.svg";

type TabType = "login" | "register";

const Page: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>("login");

  const handleTabClick = (tab: TabType) => {
    setSelectedTab(tab);
  };

  return (
    <div className=" py-5 min-vh-100 d-flex flex-column align-items-center justify-content-center bg_theme">
      <Container>
        <Link className="d-flex justify-content-center" href="#">
          <Image width={200} src={logo} alt="logo" />
        </Link>
        <div className="d-flex justify-content-center">
          <div
            className="bg-white w-100 rounded-2 mt-4 py-md-5  px-md-5 p-3 px-3"
            style={{ maxWidth: "500px" }}
          >
            {/* <Image className="w-100 " src={line_image} alt="line_image" /> */}
            <div className="d-flex gap-3 px-2 align-items-center">
              <Image src={left_image} alt="line_image" />
              <p className="mb-0 fw-bold">Terms and Conditions</p>
            </div>
            <div
              className="px-2 mt-3  pe-4 overflow-y-auto"
              style={{ height: "330px" }}
            >
              <p style={{ color: "#585858" }} className="mb-2">
                By accessing and using the companys cashless portal, you agree
                to comply with and be bound by the following terms and
                conditions of use.
              </p>
              <p style={{ color: "#585858" }}>
                By accessing and using the companys cashless portal.
              </p>
              <ul className="">
                <li className="list_style" style={{ color: "#585858" }}>
                  <p style={{ color: "#585858" }}>
                    You agree to comply with and be bound by the following
                    terms.
                  </p>
                </li>
                <li className="list_style" style={{ color: "#585858" }}>
                  <p style={{ color: "#585858" }}>
                    You agree to comply with and be bound by the following terms
                    and conditions of use.
                  </p>
                </li>
                <li className="list_style" style={{ color: "#585858" }}>
                  <p style={{ color: "#585858" }}>
                    You agree to comply with and be bound by the following
                    terms.
                  </p>
                </li>
                <li className="list_style" style={{ color: "#585858" }}>
                  <p style={{ color: "#585858" }}>
                    You agree to comply with and be bound by the following terms
                    and conditions of use.
                  </p>
                </li>
              </ul>
            </div>
            <div className="position-relative w-100">
              <div className="border mb-5 mt-5 w-100"></div>
              <Image
                style={{ top: "-20px" }}
                className=" position-absolute  end-50 "
                src={bottom_icon}
                alt="bottom_icon"
              />
            </div>

            <Link href="/Dashboard/Modals/PostpaidSuccessfull">
              <button
                className="w-100 mt-3 border-0 py-3 text-white red_ff fw-semibold rounded-2"
                style={{ backgroundColor: "#1364F1" }}
              >
                Submit
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
