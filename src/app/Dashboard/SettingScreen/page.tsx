"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Row, Col, Button, Form } from "react-bootstrap";
import user from "../../../../public/assets/images/svg/userimg.svg";

import Layout from "@/app/components/Layout/Laytout";
import right_icon from "../../../../public/assets/images/svg/right_icon.png";
import "../SettingScreen/setting.css";

type ComponentType = "Profile" | "Cards" | "SocialMedia" | "CarRegistration";

const Profile = () => {
  const [activeComponent, setActiveComponent] =
    useState<ComponentType>("Profile");

  const handleComponentChange = (component: ComponentType) => () =>
    setActiveComponent(component);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Layout>
        <div className="px-3">
          <div className="rounded-3 bg-white " style={{ minHeight: "86vh" }}>
            <Row className="justify-content-center text-nowrap mt-4 rounded-3 ">
              <h5 className=" fs_24 red_ff mb-4 pt-4 px-5">Settings</h5>
              <div className="d-flex flex-wrap gap-md-5 gap-sm-4 gap-3 p-0 m-0 ps-md-5 ps-4 text-nowrap">
                <p
                  className={`text-sm fs_22 red_ff px-4 text-color fw-normal C-pointer m-0 p-0 ${
                    activeComponent === "Profile"
                      ? "active text-primary fw-semibold"
                      : ""
                  }`}
                  onClick={handleComponentChange("Profile")}
                >
                  Company Information
                </p>

                <p
                  className={`text-sm fs_22 red_ff px-4 text-color fw-normal C-pointer m-0 p-0 ${
                    activeComponent === "SocialMedia"
                      ? "active text-primary fw-semibold"
                      : ""
                  }`}
                  onClick={handleComponentChange("SocialMedia")}
                >
                  Preferred Payment
                </p>
                <p
                  className={`text-sm fs_22 red_ff px-4 text-color fw-normal C-pointer m-0 p-0 ${
                    activeComponent === "CarRegistration"
                      ? "active text-primary fw-semibold"
                      : ""
                  }`}
                  onClick={handleComponentChange("CarRegistration")}
                >
                  Login & Security
                </p>
              </div>
              <div className="px-5">
                <div className="text-dark border w-100 mb-0"></div>
              </div>
              <Row>
                <Col xs={12}>
                  {activeComponent === "Profile" && (
                    <Row className=" bg-white mt-2 px-4">
                      <Col xs={12} md={7} className=" ps-md-2 ps-0  ">
                        <div
                          style={{ minHeight: "66vh" }}
                          className="  d-flex flex-column justify-content-between responsive-display  gap-3  my-3"
                        >
                          <Form
                            className="mt-4 text-dark"
                            onSubmit={handleSubmit}
                          >
                            <div className="d-flex flex-column responsive-display flex-md-row gap-3  my-3">
                              <Form.Group
                                className="mb-3 w-100 fs_16 red_ff fw-light"
                                controlId="firstName"
                              >
                                <Form.Label className=" red_ff fw-medium">
                                  Company Name
                                </Form.Label>
                                <div className="bg-white d-flex border pe-3  align-items-center rounded-2">
                                  <Form.Control
                                    className="border-0"
                                    type="text"
                                    placeholder="SA Railway Pty Ltd  "
                                  />
                                  <Image
                                    width={15}
                                    src={right_icon}
                                    alt="right_icon"
                                  />
                                </div>
                              </Form.Group>

                              <Form.Group
                                className="mb-3 w-100 fs_16 red_ff fw-light"
                                controlId="firstName"
                              >
                                <Form.Label className=" red_ff fw-medium">
                                  Business Name
                                </Form.Label>
                                <div className="bg-white d-flex border pe-3  align-items-center rounded-2">
                                  <Form.Control
                                    className="border-0"
                                    type="text"
                                    placeholder="SA Railway  "
                                  />
                                  <Image
                                    width={15}
                                    src={right_icon}
                                    alt="right_icon"
                                  />
                                </div>
                              </Form.Group>
                            </div>
                            <div className="d-flex flex-column responsive-display flex-md-row gap-3 w-100 my-3">
                              <Form.Group
                                className="mb-3 w-100 fs_16 red_ff fw-light"
                                controlId="ABN"
                              >
                                <Form.Label className=" red_ff fw-medium">
                                  ABN
                                </Form.Label>
                                <div className="bg-white d-flex border pe-3  align-items-center rounded-2">
                                  <Form.Control
                                    className="border-0"
                                    type="text"
                                    placeholder="11 111 111 111  "
                                  />
                                  <Image
                                    width={15}
                                    src={right_icon}
                                    alt="right_icon"
                                  />
                                </div>
                              </Form.Group>
                              <Form.Group
                                className="mb-3 w-100 fs_16 red_ff fw-light"
                                controlId="ACN"
                              >
                                <Form.Label className=" red_ff fw-medium">
                                  ACN
                                </Form.Label>
                                <div className="bg-white d-flex border pe-3  align-items-center rounded-2">
                                  <Form.Control
                                    className="border-0"
                                    type="text"
                                    placeholder="11 111 111 111  "
                                  />
                                  <Image
                                    width={15}
                                    src={right_icon}
                                    alt="right_icon"
                                  />
                                </div>
                              </Form.Group>
                            </div>
                            <div className="d-flex flex-column responsive-display flex-md-row gap-3 w-100 my-3 ">
                              <Form.Group
                                className="mb-3 w-100 fs_16 red_ff fw-light"
                                controlId="Primary Contact Name"
                              >
                                <Form.Label className=" red_ff fw-medium">
                                  Primary Contact Name
                                </Form.Label>
                                <div className="bg-white d-flex border pe-3  align-items-center rounded-2">
                                  <Form.Control
                                    className="border-0"
                                    type="text"
                                    placeholder="Greg Boston "
                                  />
                                  <Image
                                    width={15}
                                    src={right_icon}
                                    alt="right_icon"
                                  />
                                </div>
                              </Form.Group>
                              <Form.Group
                                className="mb-3 w-100 fs_16 red_ff fw-light"
                                controlId="Primary Contact Name"
                              >
                                <Form.Label className=" red_ff fw-medium">
                                  Primary Contact Email
                                </Form.Label>
                                <div className="bg-white d-flex border pe-3  align-items-center rounded-2">
                                  <Form.Control
                                    className="border-0"
                                    type="text"
                                    placeholder="Greg Boston "
                                  />
                                  <Image
                                    width={15}
                                    src={right_icon}
                                    alt="right_icon"
                                  />
                                </div>
                              </Form.Group>
                            </div>
                            <div className="d-flex flex-column flex-md-row gap-3 w-100 my-3">
                              {/* Billing Address */}
                              <Form.Group
                                className="mb-3 w-100 fs-16 fw-light"
                                controlId="BillingAddress"
                              >
                                <Form.Label className="fw-medium">
                                  Billing Address
                                </Form.Label>
                                <div className="bg-white position-relative d-flex border pe-3 align-items-center rounded-2">
                                  <textarea
                                    className="border-0 px-3 py-1 w-100"
                                    rows={6} // Adjusted to show all lines
                                    placeholder={`Main Street
Adelaide
SA
AU
5000`}
                                  ></textarea>
                                  <Image
                                    className="position-absolute top-0 end-0 mt-2 me-3"
                                    width={15}
                                    src={right_icon}
                                    alt="Check icon"
                                  />
                                </div>
                              </Form.Group>

                              {/* Mailing Address */}
                              <Form.Group
                                className="mb-3 w-100 fs-16 fw-light"
                                controlId="MailingAddress"
                              >
                                <Form.Label className="fw-medium">
                                  Mailing Address
                                </Form.Label>
                                <div className="bg-white position-relative d-flex border pe-3 align-items-center rounded-2">
                                  <textarea
                                    className="border-0 px-3 py-1 w-100"
                                    rows={6} // Adjusted to show all lines
                                    placeholder={`Main Street
Adelaide
SA
AU
5000`}
                                  ></textarea>
                                  <Image
                                    className="position-absolute top-0 end-0 mt-2 me-3"
                                    width={15}
                                    src={right_icon}
                                    alt="Check icon"
                                  />
                                </div>
                              </Form.Group>
                            </div>
                          </Form>
                          <div className=" mb-4 pb-3 mt-5 col-6 text-dark">
                            <Button type="submit" className="w-100 py-3 mt-3">
                              Update Changes
                            </Button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  )}
                  {/* {activeComponent === "Cards" && <>hello</>} */}
                  {activeComponent === "SocialMedia" && (
                    <>
                      <div
                        className="px-4 my-4 d-flex flex-column justify-content-start  "
                        style={{ minHeight: "64vh" }}
                      >
                        <div
                          className="px-4 my-4 d-flex flex-column justify-content-center  align-items-center "
                          style={{ minHeight: "57vh" }}
                        >
                          <p className="text-center">
                            No payment methods are available.
                          </p>
                        </div>
                        <div className="row gap-4">
                          <button
                            className="red_ff col-md-3 color_blue fw-medium px-5 py-2 border-0 rounded-2"
                            style={{ backgroundColor: "#E7EFFE" }}
                          >
                            Add Bank Account
                          </button>
                          <button
                            className="red_ff col-md-3 mt-4 mt-md-0 fw-medium text-white px-5 py-2 border-0 rounded-2"
                            style={{ backgroundColor: "#1364F1" }}
                          >
                            Add Card
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                  {activeComponent === "CarRegistration" && (
                    <>
                      {" "}
                      <div
                        style={{ minHeight: "66vh" }}
                        className=" mt-4 px-4  d-flex flex-column justify-content-between responsive-display  gap-3  my-3"
                      >
                        <div>
                          <div className="">
                            <Form.Group
                              className="mb-2 col-md-4 fs_16 red_ff fw-light"
                              controlId="firstName"
                            >
                              <Form.Label className=" red_ff fw-medium">
                                Current Password
                              </Form.Label>
                              <div className="bg-white d-flex border pe-3  align-items-center rounded-2">
                                <Form.Control
                                  className="border-0"
                                  type="text"
                                  placeholder="Current Password "
                                />
                              </div>
                            </Form.Group>

                            <Form.Group
                              className="mb-3 mt-3 col-md-4 fs_16 red_ff fw-light"
                              controlId="firstName"
                            >
                              <Form.Label className=" red_ff fw-medium">
                                New Password
                              </Form.Label>
                              <div className="bg-white d-flex border pe-3  align-items-center rounded-2">
                                <Form.Control
                                  className="border-0"
                                  type="text"
                                  placeholder="New Password  "
                                />
                              </div>
                            </Form.Group>
                            <Form.Group
                              className="mb-3 mt-3 col-md-4 fs_16 red_ff fw-light"
                              controlId="firstName"
                            >
                              <Form.Label className=" red_ff fw-medium">
                                Re-Enter the New Password
                              </Form.Label>
                              <div className="bg-white d-flex border pe-3  align-items-center rounded-2">
                                <Form.Control
                                  className="border-0"
                                  type="text"
                                  placeholder="New Password  "
                                />
                              </div>
                            </Form.Group>
                          </div>
                          <div className="d-flex align-items-center gap-2">
                            <Image
                              width={20}
                              src={right_icon}
                              alt="right_icon"
                            />
                            <span className=" red_ff mb-0">
                              Password Should be in 8 Character
                            </span>
                          </div>
                        </div>
                        <button
                          className="mt-5 text-white red_ff col-4 border-0 rounded-2 py-2  mb-4"
                          style={{ backgroundColor: "#1364F1" }}
                        >
                          Change Password
                        </button>
                      </div>
                    </>
                  )}
                </Col>
              </Row>
            </Row>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Profile;
