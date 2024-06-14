import React, { useState } from "react";
import { Col, Form, Nav, Row, Tab } from "react-bootstrap";
import qus_icon from "../../assets/images/svg/qus_icon.svg";
import dowload_icon from "../../assets/images/svg/dowload_icon.svg";
import cercle_img from "../../assets/images/svg/cercle_img.svg";
import blue_image from "../../assets/images/svg/blue_box.svg";
import yellow_image from "../../assets/images/svg/yellow_box.svg";
import Manual from "./Manual";
import Auto from "./Auto";
import Subscription from "./Subscription";

type TabType = "Manual" | "Auto" | "Subscription";

const Home: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>("Manual");

  const handleTabClick = (tab: TabType) => {
    setSelectedTab(tab);
  };

  return (
    <div className="py-4">
      <Row>
        <Col xl={7}>
          <Row>
            <Col md={6}>
              <div className="card d-flex flex-column justify-content-between custom_hight p-md-4 p-3 border-0">
                <div>
                  <p className="fs_20 red_ff mb-0">Current Balance</p>
                  <h3 className="fs_40 red_ff fw-bold">$116.30</h3>
                </div>
                <div className="d-flex align-items-end justify-content-between">
                  <div>
                    <p className="fs_16 red_ff mb-0">Current Balance</p>
                    <h3 className="fs_20 red_ff mb-0 fw-semibold">
                      046 8311 6661
                    </h3>
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <img src={qus_icon} alt="qus_icon" />
                    <img src={dowload_icon} alt="dowload_icon" />
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} className="mt-4 mt-md-0">
              <div className="card d-flex flex-column justify-content-between h-100 p-md-4 p-3 border-0">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="fs_24 red_ff fw-semibold mb-0">Summary</p>
                  <Form.Select
                    className="w-25 py-1"
                    aria-label="Default select example"
                  >
                    <option>Year</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <img src={cercle_img} alt="cercle_img" />
                  <div>
                    <div className="d-flex align-items-center gap-1">
                      <img src={blue_image} alt="blue_image" />
                      <p className="mb-0">Auto</p>
                    </div>
                    <div className="d-flex mt-3 align-items-center gap-1">
                      <img src={yellow_image} alt="yellow_image" />
                      <p className="mb-0">Manual</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} className="mt-4">
              <div className="card p-md-4 p-3 border-0">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="fs_24 fw-semibold source_ff">Recent Usage</h5>
                  <a className="tdn fw-semibold red_ff" href="#">
                    View All
                  </a>
                </div>
                <div className="d-flex mt-3 justify-content-between align-items-center">
                  <div>
                    <p className="mb-0 fs_16 red_ff fw-semibold">
                      Manual Recharge
                    </p>
                    <p className="mb-0 red_ff fs_14">04 January 2024</p>
                  </div>
                  <h6 className="fs_20 red_ff fw-semibold mb-0">$1.33</h6>
                </div>
                <div className="border mt-3"></div>
                <div className="d-flex mt-3 justify-content-between align-items-center">
                  <div>
                    <p className="mb-0 fs_16 red_ff fw-semibold">
                      Manual Recharge
                    </p>
                    <p className="mb-0 red_ff fs_14">04 January 2024</p>
                  </div>
                  <h6 className="fs_20 red_ff fw-semibold mb-0">$1.33</h6>
                </div>
                <div className="border mt-3"></div>
                <div className="d-flex mt-3 justify-content-between align-items-center">
                  <div>
                    <p className="mb-0 fs_16 red_ff fw-semibold">
                      Manual Recharge
                    </p>
                    <p className="mb-0 red_ff fs_14">04 January 2024</p>
                  </div>
                  <h6 className="fs_20 red_ff fw-semibold mb-0">$1.33</h6>
                </div>
                <div className="border mt-3"></div>
                <div className="d-flex mt-3 justify-content-between align-items-center">
                  <div>
                    <p className="mb-0 fs_16 red_ff fw-semibold">
                      Manual Recharge
                    </p>
                    <p className="mb-0 red_ff fs_14">04 January 2024</p>
                  </div>
                  <h6 className="fs_20 red_ff fw-semibold mb-0">$1.33</h6>
                </div>
                <div className="border mt-3"></div>
                <div className="d-flex mt-3 justify-content-between align-items-center">
                  <div>
                    <p className="mb-0 fs_16 red_ff fw-semibold">
                      Manual Recharge
                    </p>
                    <p className="mb-0 red_ff fs_14">04 January 2024</p>
                  </div>
                  <h6 className="fs_20 red_ff fw-semibold mb-0">$1.33</h6>
                </div>
                <div className="border mt-3"></div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xl={5} className="mt-4 mt-xl-0">
          <div className="card h-100 border-0 p-md-4 p-3">
            <div className="d-sm-flex justify-content-between align-items-center">
              <h4>Prepaid Recharge</h4>
              <div className="d-flex mt-3 mt-sm-0 align-items-center gap-3">
                <p className="mb-0">Auto Top-up</p>
                <Form>
                  <Form.Check type="switch" id="custom-switch" />
                </Form>
              </div>
            </div>

            <Row className="mt-4">
              <Col
                xs={4}
                className="pe-0 text-center"
                onClick={() => handleTabClick("Manual")}
              >
                <Nav.Link
                  href="#"
                  className={
                    selectedTab === "Manual" ? "active-tab color_blue" : ""
                  }
                >
                  <h3 className="red_ff fs_16">Manual</h3>
                </Nav.Link>
                {selectedTab === "Manual" ? (
                  <div className="mt-2 custom_border border-body border-1 border"></div>
                ) : (
                  <>
                    <div className="mt-2  border-body border-1 border"></div>
                  </>
                )}
              </Col>
              <Col
                xs={4}
                className="px-0 text-center"
                onClick={() => handleTabClick("Auto")}
              >
                <Nav.Link
                  href="#"
                  className={
                    selectedTab === "Auto" ? "active-tab color_blue" : ""
                  }
                >
                  <h3 className="red_ff fs_16">Auto</h3>
                </Nav.Link>
                {selectedTab === "Auto" ? (
                  <div className="mt-2 custom_border border-1 border"></div>
                ) : (
                  <>
                    <div className="mt-2  border-body border-1 border"></div>
                  </>
                )}
              </Col>
              <Col
                xs={4}
                className="ps-0 text-center"
                onClick={() => handleTabClick("Subscription")}
              >
                <Nav.Link
                  href="#"
                  className={
                    selectedTab === "Subscription"
                      ? "active-tab color_blue"
                      : ""
                  }
                >
                  <h3 className="red_ff fs_16">Subscription</h3>
                </Nav.Link>
                {selectedTab === "Subscription" ? (
                  <div className="mt-2 custom_border border-1 border"></div>
                ) : (
                  <>
                    <div className="mt-2  border-body border-1 border"></div>
                  </>
                )}
              </Col>
            </Row>
            <Tab.Content className="mt-3">
              <Tab.Pane
                eventKey="Manual"
                className={selectedTab === "Manual" ? "show active" : ""}
              >
                <Manual />
              </Tab.Pane>
              <Tab.Pane
                eventKey="Auto"
                className={selectedTab === "Auto" ? "show active" : ""}
              >
                <Auto />
              </Tab.Pane>
              <Tab.Pane
                eventKey="Subscription"
                className={selectedTab === "Subscription" ? "show active" : ""}
              >
                <Subscription />
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
