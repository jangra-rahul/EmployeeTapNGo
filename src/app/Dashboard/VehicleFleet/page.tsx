"use client";
import Layout from "@/app/components/Layout/Laytout";
import Image from "next/image";
import React, { useState } from "react";
import edit from "../../../../public/assets/images/svg/pensil_icon.svg";
import account_icon from "../../../../public/assets/images/svg/account_icon.svg";
import history_icon from "../../../../public/assets/images/svg/history_img.svg";
import history_icon1 from "../../../../public/assets/images/svg/VehicleFleet_icon1.svg";
import history_icon2 from "../../../../public/assets/images/svg/VehicleFleet_icon2.svg";
import history_icon3 from "../../../../public/assets/images/svg/VehicleFleet_icon3.svg";
import "../VehicleFleet/vehiclefleet.css";
import { Accordion, Form } from "react-bootstrap";
import Link from "next/link";

const VehicleFleet = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    // if (file) {
    //   setSelectedImage(URL.createObjectURL(file));
    // }
  };
  return (
    <>
      <Layout>
        <div className="px-2 mt-4">
          <div className="row">
            <div className="col-xl-8">
              <div className="card h-100 border-0 p-4">
                <div className="d-flex align-items-center justify-content-between">
                  <h5 className="fs_24 red_ff mb-0">
                    Vehicle Details - HR31B02
                  </h5>
                  <Link href="/Dashboard/VehicleDetails">
                    <div className="d-flex cusor align-items-center gap-1">
                      <Image src={edit} alt="edit" />
                      <span className="tdn color_blue">Edit</span>
                    </div>
                  </Link>
                </div>
                <div className="border my-4"></div>
                <h6 className=" fs_18 red_ff mb-0">Vehicle Registration</h6>
                <div className="row mt-3">
                  <Form.Group controlId="Rego" className="mb-2 col-md-5  mt-2">
                    <Form.Label className="fs_14 ps-0 red_ff color_lightblack fw-medium">
                      Rego
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="HR31B02"
                      className=" border px-3 py-2 rounded-2 border-body border-2"
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="RegoState"
                    className="mb-2 col-md-5  mt-2"
                  >
                    <Form.Label className="fs_14 ps-0 red_ff color_lightblack fw-medium">
                      Rego State
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="AU"
                      className=" border px-3 py-2 rounded-2 border-body border-2"
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="RegoExpires"
                    className="mb-2 col-md-5  mt-2"
                  >
                    <Form.Label className="fs_14 ps-0 red_ff color_lightblack fw-medium">
                      Rego Expires
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      className=" border px-3 py-2 rounded-2 border-body border-2"
                    />
                  </Form.Group>
                  <div className="col-md-5 mt-2">
                    <h5 className=" fs_16 red_ff fw-normal">
                      Reminder for Renewal
                    </h5>
                    <div className="d-flex mt-3 align-items-center gap-4">
                      <div className="d-flex align-items-center">
                        <input
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                        />
                        <label className=" red_ff ps-2 fs_14">Yes</label>
                      </div>

                      <div className="d-flex align-items-center">
                        <input
                          className=""
                          type="radio"
                          id="no"
                          name="fav_language"
                          value="no"
                        />
                        <label className=" red_ff ps-2 fs_14">No</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 mt-3">
                    <input
                      type="file"
                      id="imageUpload"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleImageChange}
                    />
                    <button
                      onClick={() =>
                        document.getElementById("imageUpload")?.click()
                      }
                      style={{
                        border: "1px dashed #1364F1",
                        backgroundColor: "#E7EFFE",
                      }}
                      className="w-100 fw-medium color_blue red_ff py-2 rounded-2"
                    >
                      + Add Image
                    </button>
                  </div>
                </div>
                <div className="border my-4"></div>
                <h6 className=" fs_18 red_ff mb-0">Vehicle Details</h6>
                <div className="row mt-3">
                  <Form.Group controlId="Rego" className="mb-2 col-md-5  mt-2">
                    <Form.Label className="fs_14 ps-0 red_ff color_lightblack fw-medium">
                      Make
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      className=" border px-3 py-2 rounded-2 border-body border-2"
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="RegoState"
                    className="mb-2 col-md-5  mt-2"
                  >
                    <Form.Label className="fs_14 ps-0 red_ff color_lightblack fw-medium">
                      Year
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      className=" border px-3 py-2 rounded-2 border-body border-2"
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="RegoExpires"
                    className="mb-2 col-md-5  mt-2"
                  >
                    <Form.Label className="fs_14 ps-0 red_ff color_lightblack fw-medium">
                      Model
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      className=" border px-3 py-2 rounded-2 border-body border-2"
                    />
                  </Form.Group>
                </div>
              </div>
            </div>
            <div className="col-xl-4 mt-4 mt-xl-0">
              <div className="card h-100 border-0 p-4">
                <div className="d-flex align-items-center justify-content-between">
                  <h5 className="fs_18 red_ff mb-0">System Information</h5>
                  <div className="d-flex gap-1 align-items-center">
                    <Image src={account_icon} alt="account_icon" />
                    <span className=" fw-medium fs_16 red_ff tdn color_blue">
                      Account
                    </span>
                  </div>
                </div>
                <h5 className="mt-4 red_ff  fs_18 mb-0">Vehicle History</h5>
                <Accordion defaultActiveKey="0" className="mt-4">
                  <Accordion.Item className="border-0 " eventKey="0">
                    <Accordion.Header className=" justify-content-between w-100">
                      <div className="d-flex  align-items-center gap-3">
                        <Image src={history_icon} alt="history_icon" />
                        <div>
                          <h6 className="mb-0 red_ff">HRB25</h6>
                          <p className="mb-0 red_ff">AU</p>
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body className="border-0">
                      <div className="d-flex ps-5 mt-3 justify-content-between align-items-center gap-3">
                        <div className="d-flex align-items-center gap-2">
                          <Image
                            width={30}
                            src={history_icon}
                            alt="history_icon"
                          />
                          <div>
                            <h6 className="mb-0 red_ff">Adam</h6>
                            <p className="mb-0 red_ff">#1524524</p>
                          </div>
                        </div>
                        <p className=" fs_14 red_ff">03/05/24 - 05/10/24</p>
                      </div>{" "}
                      <div className="border my-2 ms-5"></div>
                      <div className="d-flex ps-5 mt-3 justify-content-between align-items-center gap-3">
                        <div className="d-flex align-items-center gap-2">
                          <Image
                            width={30}
                            src={history_icon}
                            alt="history_icon"
                          />
                          <div>
                            <h6 className="mb-0 red_ff">Adam</h6>
                            <p className="mb-0 red_ff">#1524524</p>
                          </div>
                        </div>
                        <p className=" fs_14 red_ff">03/05/24 - 05/10/24</p>
                      </div>{" "}
                      <div className="border my-2 ms-5"></div>
                      <div className="d-flex ps-5 mt-3 justify-content-between align-items-center gap-3">
                        <div className="d-flex align-items-center gap-2">
                          <Image
                            width={30}
                            src={history_icon}
                            alt="history_icon"
                          />
                          <div>
                            <h6 className="mb-0 red_ff">Adam</h6>
                            <p className="mb-0 red_ff">#1524524</p>
                          </div>
                        </div>
                        <p className=" fs_14 red_ff">03/05/24 - 05/10/24</p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <div className="border my-3"></div>

                  <Accordion.Item className="border-0 " eventKey="1">
                    <Accordion.Header className=" justify-content-between w-100">
                      <div className="d-flex  align-items-center gap-3">
                        <Image src={history_icon1} alt="history_icon" />
                        <div>
                          <h6 className="mb-0 red_ff">HRB25</h6>
                          <p className="mb-0 red_ff">AU</p>
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body className="border-0">
                      <div className="d-flex ps-5 mt-3 justify-content-between align-items-center gap-3">
                        <div className="d-flex align-items-center gap-2">
                          <Image
                            width={30}
                            src={history_icon}
                            alt="history_icon"
                          />
                          <div>
                            <h6 className="mb-0 red_ff">Adam</h6>
                            <p className="mb-0 red_ff">#1524524</p>
                          </div>
                        </div>
                        <p className=" fs_14 red_ff">03/05/24 - 05/10/24</p>
                      </div>{" "}
                      <div className="border my-2 ms-5"></div>
                      <div className="d-flex ps-5 mt-3 justify-content-between align-items-center gap-3">
                        <div className="d-flex align-items-center gap-2">
                          <Image
                            width={30}
                            src={history_icon}
                            alt="history_icon"
                          />
                          <div>
                            <h6 className="mb-0 red_ff">Adam</h6>
                            <p className="mb-0 red_ff">#1524524</p>
                          </div>
                        </div>
                        <p className=" fs_14 red_ff">03/05/24 - 05/10/24</p>
                      </div>{" "}
                      <div className="border my-2 ms-5"></div>
                      <div className="d-flex ps-5 mt-3 justify-content-between align-items-center gap-3">
                        <div className="d-flex align-items-center gap-2">
                          <Image
                            width={30}
                            src={history_icon}
                            alt="history_icon"
                          />
                          <div>
                            <h6 className="mb-0 red_ff">Adam</h6>
                            <p className="mb-0 red_ff">#1524524</p>
                          </div>
                        </div>
                        <p className=" fs_14 red_ff">03/05/24 - 05/10/24</p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <div className="border my-3"></div>

                  <Accordion.Item className="border-0 " eventKey="2">
                    <Accordion.Header className=" justify-content-between w-100">
                      <div className="d-flex  align-items-center gap-3">
                        <Image src={history_icon2} alt="history_icon" />
                        <div>
                          <h6 className="mb-0 red_ff">HRB25</h6>
                          <p className="mb-0 red_ff">AU</p>
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body className="border-0">
                      <div className="d-flex ps-5 mt-3 justify-content-between align-items-center gap-3">
                        <div className="d-flex align-items-center gap-2">
                          <Image
                            width={30}
                            src={history_icon}
                            alt="history_icon"
                          />
                          <div>
                            <h6 className="mb-0 red_ff">Adam</h6>
                            <p className="mb-0 red_ff">#1524524</p>
                          </div>
                        </div>
                        <p className=" fs_14 red_ff">03/05/24 - 05/10/24</p>
                      </div>{" "}
                      <div className="border my-2 ms-5"></div>
                      <div className="d-flex ps-5 mt-3 justify-content-between align-items-center gap-3">
                        <div className="d-flex align-items-center gap-2">
                          <Image
                            width={30}
                            src={history_icon}
                            alt="history_icon"
                          />
                          <div>
                            <h6 className="mb-0 red_ff">Adam</h6>
                            <p className="mb-0 red_ff">#1524524</p>
                          </div>
                        </div>
                        <p className=" fs_14 red_ff">03/05/24 - 05/10/24</p>
                      </div>{" "}
                      <div className="border my-2 ms-5"></div>
                      <div className="d-flex ps-5 mt-3 justify-content-between align-items-center gap-3">
                        <div className="d-flex align-items-center gap-2">
                          <Image
                            width={30}
                            src={history_icon}
                            alt="history_icon"
                          />
                          <div>
                            <h6 className="mb-0 red_ff">Adam</h6>
                            <p className="mb-0 red_ff">#1524524</p>
                          </div>
                        </div>
                        <p className=" fs_14 red_ff">03/05/24 - 05/10/24</p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <div className="border my-3"></div>

                  <Accordion.Item className="border-0 " eventKey="3">
                    <Accordion.Header className=" justify-content-between w-100">
                      <div className="d-flex  align-items-center gap-3">
                        <Image src={history_icon3} alt="history_icon" />
                        <div>
                          <h6 className="mb-0 red_ff">HRB25</h6>
                          <p className="mb-0 red_ff">AU</p>
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body className="border-0">
                      <div className="d-flex ps-5 mt-3 justify-content-between align-items-center gap-3">
                        <div className="d-flex align-items-center gap-2">
                          <Image
                            width={30}
                            src={history_icon}
                            alt="history_icon"
                          />
                          <div>
                            <h6 className="mb-0 red_ff">Adam</h6>
                            <p className="mb-0 red_ff">#1524524</p>
                          </div>
                        </div>
                        <p className=" fs_14 red_ff">03/05/24 - 05/10/24</p>
                      </div>{" "}
                      <div className="border my-2 ms-5"></div>
                      <div className="d-flex ps-5 mt-3 justify-content-between align-items-center gap-3">
                        <div className="d-flex align-items-center gap-2">
                          <Image
                            width={30}
                            src={history_icon}
                            alt="history_icon"
                          />
                          <div>
                            <h6 className="mb-0 red_ff">Adam</h6>
                            <p className="mb-0 red_ff">#1524524</p>
                          </div>
                        </div>
                        <p className=" fs_14 red_ff">03/05/24 - 05/10/24</p>
                      </div>{" "}
                      <div className="border my-2 ms-5"></div>
                      <div className="d-flex ps-5 mt-3 justify-content-between align-items-center gap-3">
                        <div className="d-flex align-items-center gap-2">
                          <Image
                            width={30}
                            src={history_icon}
                            alt="history_icon"
                          />
                          <div>
                            <h6 className="mb-0 red_ff">Adam</h6>
                            <p className="mb-0 red_ff">#1524524</p>
                          </div>
                        </div>
                        <p className=" fs_14 red_ff">03/05/24 - 05/10/24</p>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default VehicleFleet;
