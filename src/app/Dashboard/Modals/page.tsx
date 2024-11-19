"use client";
import React, { useState } from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import logo from "../../../../public/assets/images/svg/white_logo.jpg";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/app/components/Layout/Laytout";
import WelcomeScreenModal from "./WelcomeScreenModals";

type TabType = "login" | "register";

const Page: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>("login");

  const handleTabClick = (tab: TabType) => {
    setSelectedTab(tab);
  };

  return (
    <div className="vh-100 py-3 d-flex flex-column align-items-center justify-content-center bg_theme">
      <Container>
        {/* <Link className="d-flex justify-content-center" href="#">
          <Image src={logo} alt="logo" />
        </Link> */}
        <div className="d-flex justify-content-center">
          <div
            className="bg-white rounded-2 mt-4 py-md-5  px-md-5 p-3"
            style={{ maxWidth: "494px" }}
          >
            <Image width={170} src={logo} alt="logo" />

            <WelcomeScreenModal />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
