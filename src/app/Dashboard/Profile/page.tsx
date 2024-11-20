"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Row, Col, Button, Form } from "react-bootstrap";
import user from "../../../../public/assets/images/svg/userimg.svg";
import DownloadCardModal from "../FamilyMember/DownloadCardModal";
import Cards from "./Cards";
import SocialMedia from "./SocialMedia";
import CarRegistration from "./Carregisteration";
import PostpaidAccountModal from "./PostpaidAccountModal";
import "./profile.css";
import Layout from "@/app/components/Layout/Laytout";
import edit_icon from "../../../assets/images/svg/edit_img.svg";

type ComponentType = "Profile" | "Cards" | "SocialMedia" | "CarRegistration";

const Profile = () => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showPostpaidModal, setShowPostpaidModal] = useState(false);
  const [activeComponent, setActiveComponent] =
    useState<ComponentType>("Profile");

  const handleCloseDownloadModal = () => setShowDownloadModal(false);
  const handleShowPostpaidModal = () => setShowPostpaidModal(true);
  const handleClosePostpaidModal = () => setShowPostpaidModal(false);

  const handleComponentChange = (component: ComponentType) => () =>
    setActiveComponent(component);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Layout>
        <div className="px-3">
          <div className="rounded-3 bg-white" style={{ minHeight: "86vh" }}>
            <Row className="justify-content-center  text-nowrap  mt-4 rounded-3 ">
              <div className="px-4">
                <h5 className="red_ff pt-4 mb-3 fs_24">Profile</h5>
                <div className="border"></div>
              </div>
              <Row className="">
                <Col xs={12}>
                  {/* {activeComponent === "Profile" && ( */}
                  <Row className="justify-content-center bg-white  ps-md-3 ps-2">
                    <Col
                      xs={12}
                      md={6}
                      className="d-flex   ps-0 border-end border-end-3 border-2 justify-content-start flex-wrap"
                    >
                      <div className="w-100">
                        <div className="d-flex gap-3 mt-4 pt-3">
                          <div className="position-relative">
                            <Image
                              src={user}
                              alt="User"
                              className="Image-fluid"
                            />
                            <Image
                              src={edit_icon}
                              alt="edit_icon"
                              className="edit_icon cursor-pointer position-absolute bottom-0"
                              style={{ right: "-7px", cursor: "pointer" }}
                            />
                          </div>
                          <div className="mt-3 ms-3">
                            <p className="p-0 m-0 fs_24 red_ff fw-semibold text-dark">
                              Andrew Jonson
                            </p>
                            <p
                              style={{ color: "#585858" }}
                              className="fs_16 fw-medium red_ff"
                            >
                              +01 234 567 890
                            </p>
                          </div>
                        </div>

                        <div className="col-md-10">
                          <Form
                            className="mt-5 text-dark"
                            onSubmit={handleSubmit}
                          >
                            <div className="row responsive-display    my-3">
                              <Form.Group
                                className="mb-3 col-md-6 col-12 fs_16 red_ff fw-light"
                                controlId="firstName"
                              >
                                <Form.Label className="red_ff fw-medium">
                                  First Name
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="First Name"
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3 col-md-6 col-12 fs_16 red_ff fw-light"
                                controlId="lastName"
                              >
                                <Form.Label className="red_ff fw-medium">
                                  Last Name
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Last Name"
                                />
                              </Form.Group>
                            </div>
                            <div className="d-flex flex-column responsive-display flex-md-row gap-3 w-100 my-3 ">
                              <Form.Group
                                className="mb-3 w-100 fs_16 red_ff fw-light"
                                controlId="email"
                              >
                                <Form.Label className="red_ff fw-medium">
                                  Email Address
                                </Form.Label>
                                <Form.Control
                                  type="email"
                                  placeholder="example@gmail.com"
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3 w-100 fs_16 red_ff fw-light"
                                controlId="mobile"
                              >
                                <Form.Label className="red_ff fw-medium">
                                  Mobile Number
                                </Form.Label>
                                <Form.Control
                                  type="tel"
                                  placeholder="+01 123 456 789"
                                />
                              </Form.Group>
                            </div>
                            <div className="d-flex flex-column responsive-display flex-md-row gap-3 w-100 my-3">
                              <Form.Group
                                className="mb-3 w-100 fs_16 red_ff fw-light"
                                controlId="dob"
                              >
                                <Form.Label className="red_ff fw-medium">
                                  Date of Birth
                                </Form.Label>
                                <Form.Control type="date" />
                              </Form.Group>
                              <Form.Group
                                className="mb-3 w-100 fs_16 red_ff fw-light"
                                controlId="corporateCard"
                              >
                                <Form.Label className="red_ff fw-medium">
                                  Corporate Card
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="04683116661"
                                />
                              </Form.Group>
                            </div>
                            <div className="d-flex flex-column responsive-display flex-md-row gap-3 w-100 my-3">
                              <Form.Group
                                className="mb-3 responsive-display  w-50 fs_16 red_ff fw-light"
                                controlId="accountType"
                              >
                                <Form.Label className="red_ff fw-medium">
                                  Account Type
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Prepaid"
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3 responsive-display  w-50 fs_16 red_ff fw-light"
                                controlId="LevelofAccess"
                              >
                                <Form.Label className="red_ff fw-medium">
                                  Level of Access
                                </Form.Label>
                                <Form.Control type="text" placeholder="" />
                              </Form.Group>
                            </div>
                            <div className="mb-3  w-100 text-dark">
                              <Button type="submit" className="w-100 py-3 mt-3">
                                Save Changes
                              </Button>
                            </div>
                            <div className="pb-4">
                              <span className=" text-decoration-underline my-2 color_blue red_ff fw-semibold">
                                Close Account
                              </span>
                            </div>
                          </Form>
                        </div>
                      </div>
                    </Col>
                    <Col
                      xs={12}
                      md={6}
                      className="mt-4 pt-3 mt-md-0 ps-md-5 ps-3 text-dark"
                    >
                      <p className="fs_20 red_ff fw-semibold mt-4">
                        Account Details
                      </p>
                      <div className="d-flex gap-5  flex-wrap">
                        <div className="d-flex flex-column text-start">
                          <p className="p-0 m-0 fs-16 fw-light red_ff text-nowrap">
                            Account Type
                          </p>
                          <p className="fs-20 red_ff fw-semibold">Prepaid</p>
                        </div>
                        <div className="d-flex flex-column">
                          <p className="p-0 m-0 fs-16 fw-light red_ff text-nowrap">
                            Last Updated on
                          </p>
                          <p className="fs-20 red_ff fw-semibold">12-02-2024</p>
                        </div>
                        <button
                          className="border-0 fs_14 mb-3 fw-medium px-3 py-1 rounded-2 postpaid-button"
                          onClick={handleShowPostpaidModal}
                        >
                          Request Postpaid Account
                        </button>
                      </div>
                    </Col>
                  </Row>
                  {/* // )} */}
                  {/* {activeComponent === "Cards" && (
                    <Cards onShowProfile={handleComponentChange("Profile")} />
                  )}
                  {activeComponent === "SocialMedia" && <SocialMedia />}
                  {activeComponent === "CarRegistration" && <CarRegistration />} */}
                </Col>
              </Row>
            </Row>

            <DownloadCardModal
              show={showDownloadModal}
              handleClose={handleCloseDownloadModal}
            />
            <PostpaidAccountModal
              show={showPostpaidModal}
              handleClose={handleClosePostpaidModal}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Profile;
