"use client";
import Image from "next/image";
import { Outlet } from "react-router-dom";
import React, { ReactNode, useState } from "react";
import { Drawer, Layout, Menu } from "antd";
import { FaAngleDown } from "react-icons/fa6";
import logo from "../../../../public/assets/images/svg/logo.svg";
import home_icon from "../../../../public/assets/images/svg/home_icon.svg";
import usage_icon from "../../../../public/assets/images/svg/usage_icon.svg";
import Faq_icon from "../../../../public/assets/images/svg/faq_icon.svg";
import Support_icon from "../../../../public/assets/images/svg/support_icon.svg";
import Corporate_icon from "../../../../public/assets/images/svg/corpocate_icon.svg";
import Employees_icon from "../../../../public/assets/images/svg/Employees_icon.svg";
import VehicleFleet_icon from "../../../../public/assets/images/svg/VehicleFleet_icon.svg";
import Setting_icon from "../../../../public/assets/images/svg/Setting_icon.svg";
import { Form } from "react-bootstrap";
import Link from "next/link";
import "./dashboard.css";
import { usePathname } from "next/navigation";

const { Header, Content, Footer, Sider } = Layout;

const Admindashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<ReactNode>();
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>("1");
  const pathname = usePathname();
  console.log("pathname", pathname);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  const handleMenuClick = (key: string) => {
    setSelectedMenuItem(key); // Update the selected menu item

    onCloseDrawer();
  };

  return (
    <Layout>
      <div className=" bg-sidebar">
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={toggleCollapsed}
          breakpoint="lg"
          collapsedWidth="0"
          trigger={null}
          className="sider-responsive w-100 bg-sidebar "
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            height: "100vh",
          }}
        >
          <div className="">
            <Link href="#">
              <div className="ps-4">
                <Image
                  className="px-3 p-4 "
                  src={logo}
                  alt="logo"
                  width={200}
                  height={100}
                />
              </div>
            </Link>
            <Menu theme="dark" className="bg-sidebar">
              <Menu.Item
                key="1"
                className={
                  pathname === "/Dashboard/HomeDashboard"
                    ? "active-color text-white"
                    : pathname == "/Dashboard/Postpaidrecharge"
                    ? "active-color text-white"
                    : ""
                }
              >
                <Link href="/Dashboard/HomeDashboard">
                  <div className="d-flex gap-2  align-items-center ps-4">
                    <Image
                      src={home_icon}
                      alt="home_icon"
                      width={16}
                      height={16}
                    />
                    <span className="mb-0 fs_14 red_ff">Home</span>
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item
                key="9"
                className={
                  pathname === "/Dashboard/Employees"
                    ? "active-color text-white"
                    : pathname == "/Dashboard/EmployeeDetails"
                    ? "active-color text-white"
                    : ""
                }
              >
                <Link href="/Dashboard/Employees">
                  <div className="d-flex gap-2  align-items-center ps-4">
                    <Image
                      src={Employees_icon}
                      alt="home_icon"
                      width={16}
                      height={16}
                    />
                    <span className="mb-0 fs_14 red_ff">Employees</span>
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item
                key="8"
                className={
                  pathname === "/Dashboard/CorporateCards"
                    ? "active-color text-white"
                    : ""
                }
              >
                <Link href="/Dashboard/CorporateCards">
                  <div className="d-flex gap-2  align-items-center ps-4">
                    <Image
                      src={Corporate_icon}
                      alt="home_icon"
                      width={16}
                      height={16}
                    />
                    <span className="mb-0 fs_14 red_ff">Corporate Cards</span>
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item
                key="10"
                className={
                  pathname === "/Dashboard/VehicleFleet"
                    ? "active-color text-white"
                    : pathname == "/Dashboard/VehicleDetails"
                    ? "active-color text-white"
                    : ""
                }
              >
                <Link href="/Dashboard/VehicleFleet">
                  <div className="d-flex gap-2  align-items-center ps-4">
                    <Image
                      src={VehicleFleet_icon}
                      alt="home_icon"
                      width={16}
                      height={16}
                    />
                    <span className="mb-0 fs_14 red_ff">Vehicle Fleet </span>
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item
                key="2"
                className={
                  pathname === "/Dashboard/Usages"
                    ? "active-color text-white"
                    : ""
                }
              >
                <Link href="/Dashboard/Usages">
                  <div className="d-flex gap-2  align-items-center ps-4">
                    <Image
                      src={usage_icon}
                      alt="Usage_icon"
                      width={16}
                      height={16}
                    />
                    <span className="mb-0 fs_14 red_ff">Usage</span>
                  </div>
                </Link>
              </Menu.Item>
              {/* <Menu.Item
                key="3"
                className={
                  pathname === "/Dashboard/Subcriptiondashboard"
                    ? "active-color text-white"
                    : ""
                }
              >
                <Link href="/Dashboard/Subcriptiondashboard">
                  <div className="d-flex gap-2  align-items-center ps-4">
                    <Image
                      src={subscription_icon}
                      alt="Subscription_icon"
                      width={16}
                      height={16}
                    />
                    <span className="mb-0 fs_14 red_ff">Subscription</span>
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item
                key="4"
                className={
                  pathname === "/Dashboard/FamilyMember"
                    ? "active-color text-white"
                    : ""
                }
              >
                <Link href="/Dashboard/FamilyMember">
                  <div className="d-flex gap-2  align-items-center ps-4">
                    <Image
                      src={Family_icon}
                      alt="FamilyM_icon"
                      width={16}
                      height={16}
                    />
                    <span className="mb-0 fs_14 red_ff">Family Member</span>
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item
                key="5"
                className={
                  pathname === "/Dashboard/MyOffers"
                    ? "active-color text-white"
                    : ""
                }
              >
                <Link href="/Dashboard/MyOffers">
                  <div className="d-flex gap-2  align-items-center ps-4">
                    <Image
                      src={Offers_icon}
                      alt="Offer_icon"
                      width={16}
                      height={16}
                    />
                    <span className="mb-0 fs_14 red_ff">My Offers</span>
                  </div>
                </Link>
              </Menu.Item> */}
              <Menu.Item
                key="6"
                className={
                  pathname === "/Dashboard/FAQ" ? "active-color text-white" : ""
                }
              >
                <Link href="/Dashboard/FAQ">
                  <div className="d-flex gap-2 align-items-center ps-4">
                    <Image
                      src={Faq_icon}
                      alt="faq_icon"
                      width={16}
                      height={16}
                    />
                    <span className="mb-0 fs_14 red_ff">FAQ</span>
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item
                key="7"
                className={
                  pathname === "/Dashboard/SupportPage"
                    ? "active-color text-white"
                    : ""
                }
              >
                <Link href="/Dashboard/SupportPage">
                  <div className="d-flex gap-2  align-items-center  ps-4">
                    <Image
                      src={Support_icon}
                      alt="Support_icon"
                      width={16}
                      height={16}
                    />
                    <span className="mb-0 fs_14 red_ff">Support</span>
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item
                key="11"
                className={
                  pathname === "/Dashboard/SettingScreen"
                    ? "active-color text-white"
                    : ""
                }
              >
                <Link href="/Dashboard/SettingScreen">
                  <div className="d-flex gap-2  align-items-center  ps-4">
                    <Image
                      src={Setting_icon}
                      alt="Setting_icon"
                      width={16}
                      height={16}
                    />
                    <span className="mb-0 fs_14 red_ff">Settings</span>
                  </div>
                </Link>
              </Menu.Item>
            </Menu>

            <Footer className="footer fs_14 ps-4">
              <p className="m-0 p-0 fs_14 red_ff font-light bg-p ps-2">
                © 2024. Adopt Cashless.
              </p>
              <p className="bg-p fs_14 red_ff font-light">
                All rights reserved.
              </p>
            </Footer>
          </div>
        </Sider>
      </div>
    </Layout>
  );
};

export default Admindashboard;
