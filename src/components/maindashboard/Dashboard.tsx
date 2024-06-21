

import React, { useState } from "react";
import { Layout, Menu, Drawer } from "antd";
import { Link, Outlet } from "react-router-dom";
import { Form } from "react-bootstrap";

import logo from "../../assets/images/svg/logo.svg";
import home_icon from "../../assets/images/svg/home_icon.svg";
import Usage_icon from "../../assets/images/svg/usage_icon.svg";
import Subscription_icon from "../../assets/images/svg/Subscription_icon.svg";
import FamilyM_icon from "../../assets/images/svg/FamilyM_icon.svg";
import Offer_icon from "../../assets/images/svg/offere_icon.svg";
import suport_icon from "../../assets/images/svg/support_icon.svg";
import faq_icon from "../../assets/images/svg/faq_icon.svg";
import manu_icon from "../../assets/images/svg/manu_icon.svg";
import black_logo from "../../assets/images/svg/black_logo.svg";
import close_icon from "../../assets/images/svg/close_manu.svg";
import noti_icoin from "../../assets/images/svg/notifi_icon.svg";
import profile from "../../assets/images/svg/profile_icon.svg";

const { Header, Content, Footer, Sider } = Layout;

const Dashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  const handleMenuClick = () => {
    onCloseDrawer();
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={toggleCollapsed}
        breakpoint="lg"
        collapsedWidth="0"
        trigger={null} // Hide the default trigger
        className="sider-responsive"
      >
        <a href="#">
          <img className="px-3 p-4" src={logo} alt="logo" />
        </a>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" onClick={handleMenuClick}>
            <Link to="/home-dashboard">
              <div className="d-flex gap-2 align-items-center">
                <img src={home_icon} alt="home_icon" />
                <span className="mb-0 fs_14 red_ff">Home</span>
              </div>
            </Link>
          </Menu.Item>
          <Menu.Item key="2" onClick={handleMenuClick}>
            <Link to="/usage-dashboard">
              <div className="d-flex gap-2 align-items-center">
                <img src={Usage_icon} alt="Usage_icon" />
                <span className="mb-0 fs_14 red_ff">Usage</span>
              </div>
            </Link>
          </Menu.Item>
          <Menu.Item key="3" onClick={handleMenuClick}>
            <Link to="/subcription-dashboard">
              <div className="d-flex gap-2 align-items-center">
                <img src={Subscription_icon} alt="Subscription_icon" />
                <span className="mb-0 fs_14 red_ff">Subscription</span>
              </div>
            </Link>
          </Menu.Item>
          <Menu.Item key="4" onClick={handleMenuClick}>
            <Link to="/familyMember-dashboard">
              <div className="d-flex gap-2 align-items-center">
                <img src={FamilyM_icon} alt="FamilyM_icon" />
                <span className="mb-0 fs_14 red_ff">Family Member</span>
              </div>
            </Link>
          </Menu.Item>
          <Menu.Item key="5" onClick={handleMenuClick}>
            <Link to="/Myoffers">
              <div className="d-flex gap-2 align-items-center">
                <img src={Offer_icon} alt="Offer_icon" />
                <span className="mb-0 fs_14 red_ff">My Offers</span>
              </div>
            </Link>
          </Menu.Item>
          <Menu.Item key="6" onClick={handleMenuClick}>
            <Link to="/FaqDashboard">
              <div className="d-flex gap-2 align-items-center">
                <img src={faq_icon} alt="faq_icon" />
                <span className="mb-0 fs_14 red_ff">FAQ</span>
              </div>
            </Link>
          </Menu.Item>
          <Menu.Item key="7" onClick={handleMenuClick}>
            <Link to="/Support-Dashboard">
              <div className="d-flex gap-2 align-items-center">
                <img src={suport_icon} alt="home_icon" />
                <span className="mb-0 fs_14 red_ff">Support</span>
              </div>
            </Link>
          </Menu.Item>
        </Menu>
        <Footer className="footer fs_14 ">
          <p className="m-0 p-0 fs_14 red_ff font-light bg-p ps-2">© 2024. Adopt Cashless.</p>
          <p className="bg-p fs_14 red_ff font-light">All rights reserved.</p>
        </Footer>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background w-100  header-responsive">
          <div className="d-flex align-items-center">
            <a href="#">
              <img
                className="pe-3 menu-button"
                onClick={showDrawer}
                src={manu_icon}
                alt="manu_icon"
              />
            </a>
            <a href="#">
              <img
                className="pe-3 menu-button"
                src={black_logo}
                alt="black_logo"
              />
            </a>
          </div>
          <div className="d-lg-flex align-items-center d-flex  w-100 justify-content-between">
            <div className="d-none d-md-flex ">
              <h6 className="mb-0 fs_14  fw-nonrmal red_ff">Hey!</h6>
              <h4 className="mb-0 fs_24 red_ff mt-1">Andrew J.</h4>
            </div>
            <div className="d-flex gap-4 align-items-center ">
              <Form.Select
                className="rounded-5 d-none d-md-flex"
                aria-label="Default select example"
              >
                <option>Family Member Account</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <a href="#">
                <Link to="/notification">
                  <img src={noti_icoin} alt="noti_icoin" />
                </Link>
              </a>
              <div className="d-flex align-items-center gap-1 border bg-white p-1 rounded-5">
                <Link to="/Profile">
                  <img src={profile} alt="profile" />
                </Link>
                <select className="w-50" name="" id="">
                  <option value=""></option>
                  <option value="Logout">Logout</option>
                </select>
              </div>
            </div>
          </div>

        </Header>
        <Drawer
          placement="left"
          closable={true}
          onClose={onCloseDrawer}
          visible={drawerVisible}
          className="drawer-responsive"
        >
          <div className="d-flex align-items-center justify-content-between bg-sidebar">
            <a href="#">
              <img
                width={130}
                className="pt-4 pt-lg-0 ps-4 pb-2"
                src={logo}
                alt="logo"
              />
            </a>
            <a href="#">
              <img
                onClick={onCloseDrawer}
                width={90}
                className="px-3 pt-4 pt-lg-0 px-4 pb-2"
                src={close_icon}
                alt="close_icon"
              />
            </a>
          </div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" onClick={handleMenuClick}>
              <Link to="/home-dashboard">
                <div className="d-flex gap-2 align-items-center">
                  <img src={home_icon} alt="home_icon" />
                  <span className="mb-0 fs_14 red_ff">Home</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="2" onClick={handleMenuClick}>
              <Link to="/usage-dashboard">
                <div className="d-flex gap-2 align-items-center">
                  <img src={Usage_icon} alt="Usage_icon" />
                  <span className="mb-0 fs_14 red_ff">Usage</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="3" onClick={handleMenuClick}>
              <Link to="/subcription-dashboard">
                <div className="d-flex gap-2 align-items-center">
                  <img src={Subscription_icon} alt="Subscription_icon" />
                  <span className="mb-0 fs_14 red_ff">Subscription</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="4" onClick={handleMenuClick}>
              <Link to="/familyMember-dashboard">
                <div className="d-flex gap-2 align-items-center">
                  <img src={FamilyM_icon} alt="FamilyM_icon" />
                  <span className="mb-0 fs_14 red_ff">Family Member</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="5" onClick={handleMenuClick}>
              <Link to="/Myoffers">
                <div className="d-flex gap-2 align-items-center">
                  <img src={Offer_icon} alt="Offer_icon" />
                  <span className="mb-0 fs_14 red_ff">My Offers</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="6" onClick={handleMenuClick}>
              <Link to="/FaqDashboard">
                <div className="d-flex gap-2 align-items-center">
                  <img src={faq_icon} alt="faq_icon" />
                  <span className="mb-0 fs_14 red_ff">FAQ</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="7" onClick={handleMenuClick}>
              <Link to="/Support-Dashboard">
                <div className="d-flex gap-2 align-items-center">
                  <img src={suport_icon} alt="home_icon" />
                  <span className="mb-0 fs_14 red_ff">Support</span>
                </div>
              </Link>
            </Menu.Item>
          </Menu>
          <Footer className="footer">
            <p className="m-0 p-0">© 2024. Adopt Cashless.</p>
            <p>All rights reserved.</p>
          </Footer>
        </Drawer>
        <Content style={{ margin: "0 16px" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
