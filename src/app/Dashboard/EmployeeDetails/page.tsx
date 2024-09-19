"use client";
import React, { useState } from "react";
import "../Employees/employees.css";
import Image from "next/image";
import profile_icon from "../../../../public/assets/images/svg/profile_icon.svg";
import Layout from "@/app/components/Layout/Laytout";
import edit_icon from "../../../../public/assets/images/svg/edit_icon.svg";
import detail_icon from "../../../../public/assets/images/svg/detail_icon.svg";
import fileuploader from "../../../../public/assets/images/svg/fileuploader_icon.svg";
import { Form } from "react-bootstrap";
import "../HomeDashboard/homedashboard.css";
import pagenation_image from "../../../../public/assets/images/svg/pagenation_img.svg";

const EmployeeDetails = () => {
  const [toggleState, setToggleState] = useState(false);
  return (
    <>
      <Layout>
        <div>
          <div className="row mt-4 ps-2">
            <div className="col-xl-4 pe-4 pe-lg-0 col-md-6">
              <div className="bg-white p-4  rounded-3 border-0">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <Image width={80} src={profile_icon} alt="profile_icon" />
                    <div>
                      <h6 className="mb-0 red_ff fw-medium fs_18">
                        Greg Boston
                      </h6>
                      <p className="mb-0 red_ff fs_14 mt-1">0456829171</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <Image
                      className=" cursor-pointer"
                      width={35}
                      src={edit_icon}
                      alt="edit_icon"
                    />
                    <Image
                      className=" cursor-pointer"
                      width={35}
                      src={detail_icon}
                      alt="detail_icon"
                    />
                  </div>
                </div>
                <Form className=" row mt-3">
                  <Form.Group
                    controlId="formCorporateCard"
                    className="mb-2 col-md-6 pe-2"
                  >
                    <Form.Label className=" fs_14 ps-0 red_ff color_lightblack fw-medium">
                      First Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Greg"
                      className=" border px-3 py-2 rounded-2 border-body border-2"
                    />
                  </Form.Group>

                  <Form.Group
                    controlId="formMobileNumber"
                    className="mb-2 mt-3 mt-md-0 col-md-6 ps-md-2"
                  >
                    <Form.Label className="fs_14 ps-0 red_ff color_lightblack fw-medium">
                      Last Name
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Boston"
                      className=" border px-3 py-2 rounded-2 border-body border-2"
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="formMobileNumber"
                    className="mb-2 col-md-6 mt-2 pe-2"
                  >
                    <Form.Label className="fs_14 ps-0 red_ff color_lightblack fw-medium">
                      Email Address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="example@gmail.com"
                      className=" border px-3 py-2 rounded-2 border-body border-2"
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="formMobileNumber"
                    className="mb-2 col-md-6 mt-2 ps-2"
                  >
                    <Form.Label className="fs_14 ps-0 red_ff color_lightblack fw-medium">
                      Mobile Number
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="0456829171"
                      className=" border px-3 py-2 rounded-2 border-body border-2"
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="formMobileNumber"
                    className="mb-2 col-md-6  mt-2 pe-2"
                  >
                    <Form.Label className="fs_14 ps-0 red_ff color_lightblack fw-medium">
                      Date of Birth
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="05/03/1984"
                      className=" border px-3 py-2 rounded-2 border-body border-2"
                    />
                  </Form.Group>
                  <Form.Group
                    controlId="formMobileNumber"
                    className="mb-2 col-md-6  mt-2 ps-2"
                  >
                    <Form.Label className="fs_14 ps-0 red_ff color_lightblack fw-medium">
                      Linked Vehicle
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="HR31B02"
                      className=" border px-3 py-2 rounded-2 border-body border-2"
                    />
                  </Form.Group>
                </Form>
              </div>
              <div className="bg-white mt-4 rounded-3 border-0 p-3">
                <div className="d-sm-flex align-items-center justify-content-between">
                  <h5 className="fs_16 font_s red_ff mb-0">
                    Linked Corporate Card
                  </h5>
                  <div className="d-flex mt-3 mt-sm-0 text-color align-items-center gap-3">
                    <p className="fs_14 mb-0">Auto Top-up</p>
                    <div className="border rounded-5  m-0 ">
                      <Form className="border-1  rounded-1 p-1 py-0 d-flex justify-content-center">
                        <Form.Check
                          className="fs_14"
                          type="switch"
                          id="custom-switch"
                          label={
                            <span className={toggleState ? "color_blue" : ""}>
                              {toggleState ? "On" : "Off"}
                            </span>
                          }
                          onChange={(event) => {
                            setToggleState(event.target.checked);
                          }}
                        />
                      </Form>
                    </div>
                  </div>
                </div>
                <h5 className=" fs_18 fw-normal red_ff  mt-4">
                  Available Balance
                </h5>
                <div className="row align-items-center">
                  <div className="col-5">
                    <h5 className="red_ff">$520.38</h5>
                  </div>
                  <div className="col-4">
                    <div className="d-flex">
                      <Image src={fileuploader} alt="fileuploader" />
                      <span className=" fs_14 red_ff color_blue">
                        Unlink card
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row flex-wrap mt-3 ">
                  <div className="col-5">
                    <h5 className="red_ff fw-normal mb-2 fs_14">
                      Card display Number
                    </h5>
                    <p className="red_ff fw-semibold">5668003</p>
                  </div>
                  <div className="col-4">
                    <span className=" fs_14 red_ff">Card UID</span>
                    <h5 className=" red_ff fs_14 fw-medium">5668003</h5>
                  </div>
                  <div className="col-3">
                    <span className=" fs_14 red_ff">Status</span>
                    <h5
                      style={{ color: "green" }}
                      className="  red_ff fs_14 fw-medium"
                    >
                      Active
                    </h5>
                  </div>
                </div>
                <div className="d-flex pb-2 gap-4 mt-3">
                  <button
                    style={{ backgroundColor: "#E7EFFE" }}
                    className="px-sm-5 px-3 fs_14  border-0 color_blue fw-medium rounded-2 red_ff py-2"
                  >
                    Add Credit
                  </button>
                  <button
                    style={{ backgroundColor: "#1364F1" }}
                    className="px-sm-5 px-3 fs_14  border-0 text-white rounded-2 red_ff py-2"
                  >
                    Add Credit
                  </button>
                </div>
              </div>
            </div>

            <div className="col-xl-4 pe-4 pe-lg-0 col-md-6 mt-4 mt-md-0">
              <div className="card  d-flex flex-column justify-content-between h-100 border-0 p-4">
                <div>
                  {" "}
                  <div className="d-flex align-items-center justify-content-between">
                    <h5 className=" fs_18 red_ff mb-0">Added Credits</h5>
                    <select
                      className="red_ff px-3 rounded-2 py-2"
                      name=""
                      id=""
                    >
                      <option value="Year">Year</option>
                    </select>
                  </div>
                  <div className="overflow-y-auto">
                    <table className="w-100 mt-3 ">
                      <tr style={{ background: "#F0F0F1" }}>
                        <th className=" px-3 fs_16 fw-medium  text-nowrap red-ff-family py-3">
                          Date
                        </th>
                        <th className=" px-3 fs_16 fw-medium  text-nowrap red-ff-family py-3">
                          Amount
                        </th>
                        <th className=" px-3 fs_16 fw-medium  text-nowrap red-ff-family py-3">
                          Method
                        </th>
                      </tr>
                      <tr>
                        <td className=" pt-4 ">
                          <p
                            className="px-3 fs_14 pb-2 text-nowrap"
                            style={{ color: "#202020" }}
                          >
                            12/06/2024
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4  ">
                          <p className="px-3 fs_14 pb-2 text-nowrap fw-medium">
                            $30.58
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap">
                            {" "}
                            Auto Top-up
                          </p>
                          <div className="border mt-4"></div>
                        </td>
                      </tr>
                      <tr>
                        <td className=" pt-4 ">
                          <p
                            className="px-3 fs_14 pb-2 text-nowrap"
                            style={{ color: "#202020" }}
                          >
                            12/06/2024
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4  ">
                          <p className="px-3 fs_14 pb-2 text-nowrap fw-medium">
                            $30.58
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap"> Manual</p>
                          <div className="border mt-4"></div>
                        </td>
                      </tr>
                      <tr>
                        <td className=" pt-4 ">
                          <p
                            className="px-3 fs_14 pb-2 text-nowrap"
                            style={{ color: "#202020" }}
                          >
                            12/06/2024
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4  ">
                          <p className="px-3 fs_14 pb-2 text-nowrap fw-medium">
                            $30.58
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap">
                            {" "}
                            Auto Top-up
                          </p>
                          <div className="border mt-4"></div>
                        </td>
                      </tr>
                      <tr>
                        <td className=" pt-4 ">
                          <p
                            className="px-3 fs_14 pb-2 text-nowrap"
                            style={{ color: "#202020" }}
                          >
                            12/06/2024
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4  ">
                          <p className="px-3 fs_14 pb-2 text-nowrap fw-medium">
                            $30.58
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap"> Manual</p>
                          <div className="border mt-4"></div>
                        </td>
                      </tr>
                      <tr>
                        <td className=" pt-4 ">
                          <p
                            className="px-3 fs_14 pb-2 text-nowrap"
                            style={{ color: "#202020" }}
                          >
                            12/06/2024
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4  ">
                          <p className="px-3 fs_14 pb-2 text-nowrap fw-medium">
                            $30.58
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap">
                            {" "}
                            Auto Top-up
                          </p>
                          <div className="border mt-4"></div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <Image
                  className="mx-auto mt-4"
                  src={pagenation_image}
                  alt="pagenation_image"
                />
              </div>
            </div>
            <div className="col-xl-4 pe-4 pe-lg-0 col-md-6 mt-4 mt-xl-0">
              <div className="card d-flex flex-column justify-content-between h-100 border-0 p-4">
                <div>
                  {" "}
                  <div className="d-flex align-items-center justify-content-between">
                    <h5 className=" fs_18 red_ff mb-0">Usage</h5>
                    <select
                      className="red_ff px-3 rounded-2 py-2"
                      name=""
                      id=""
                    >
                      <option value="Year">Year</option>
                    </select>
                  </div>
                  <div className="overflow-y-auto">
                    <table className="w-100 mt-3 ">
                      <tr style={{ background: "#F0F0F1" }}>
                        <th className=" px-3 fs_16 fw-medium  text-nowrap red-ff-family py-3">
                          Date
                        </th>
                        <th className=" px-3 fs_16 fw-medium  text-nowrap red-ff-family py-3">
                          Amount
                        </th>
                        <th className=" px-3 fs_16 fw-medium  text-nowrap red-ff-family py-3">
                          Method
                        </th>
                      </tr>
                      <tr>
                        <td className=" pt-4 ">
                          <p
                            className="px-3 fs_14 pb-2 text-nowrap"
                            style={{ color: "#202020" }}
                          >
                            12/06/2024
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4  ">
                          <p className="px-3 fs_14 pb-2 text-nowrap fw-medium">
                            $30.58
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap">
                            {" "}
                            Auto Top-up
                          </p>
                          <div className="border mt-4"></div>
                        </td>
                      </tr>
                      <tr>
                        <td className=" pt-4 ">
                          <p
                            className="px-3 fs_14 pb-2 text-nowrap"
                            style={{ color: "#202020" }}
                          >
                            12/06/2024
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4  ">
                          <p className="px-3 fs_14 pb-2 text-nowrap fw-medium">
                            $30.58
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap"> Manual</p>
                          <div className="border mt-4"></div>
                        </td>
                      </tr>
                      <tr>
                        <td className=" pt-4 ">
                          <p
                            className="px-3 fs_14 pb-2 text-nowrap"
                            style={{ color: "#202020" }}
                          >
                            12/06/2024
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4  ">
                          <p className="px-3 fs_14 pb-2 text-nowrap fw-medium">
                            $30.58
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap">
                            {" "}
                            Auto Top-up
                          </p>
                          <div className="border mt-4"></div>
                        </td>
                      </tr>
                      <tr>
                        <td className=" pt-4 ">
                          <p
                            className="px-3 fs_14 pb-2 text-nowrap"
                            style={{ color: "#202020" }}
                          >
                            12/06/2024
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4  ">
                          <p className="px-3 fs_14 pb-2 text-nowrap fw-medium">
                            $30.58
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap"> Manual</p>
                          <div className="border mt-4"></div>
                        </td>
                      </tr>
                      <tr>
                        <td className=" pt-4 ">
                          <p
                            className="px-3 fs_14 pb-2 text-nowrap"
                            style={{ color: "#202020" }}
                          >
                            12/06/2024
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4  ">
                          <p className="px-3 fs_14 pb-2 text-nowrap fw-medium">
                            $30.58
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap">
                            {" "}
                            Auto Top-up
                          </p>
                          <div className="border mt-4"></div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <Image
                  className="mx-auto mt-4"
                  src={pagenation_image}
                  alt="pagenation_image"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default EmployeeDetails;
