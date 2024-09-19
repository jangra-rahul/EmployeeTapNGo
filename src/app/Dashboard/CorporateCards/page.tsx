"use client";
import React, { useState } from "react";
import Layout from "@/app/components/Layout/Laytout";
import bar_icon from "../../../../public/assets/images/svg/bar.svg";
import filter_icon from "../../../../public/assets/images/svg/search.svg";
import Image from "next/image";
import "../../Dashboard/CorporateCards/corporate.css";
import { Form } from "react-bootstrap";
const CorporateCards = () => {
  const [activeComponent, setActiveComponent] = useState("linkCorporateCard");
  return (
    <>
      <Layout>
        <div className="row px-2 mt-4">
          <div className="col-lg-8">
            <div className="card  border-0  p-4" style={{ minHeight: "83vh" }}>
              <div className="d-flex justify-content-between align-items-center">
                <h5 className=" red_ff fs_24">Corporate Cards</h5>
                <div className="d-flex align-items-center gap-2">
                  <Image src={filter_icon} alt="filter_icon" />
                  <Image src={bar_icon} alt="bar_icon" />
                </div>
              </div>
              <div className="overflow-y-auto" style={{ height: "700px" }}>
                <table className="w-100 mt-3 h-100 ">
                  <tr style={{ background: "#F0F0F1" }}>
                    <th className=" px-3 fs_16 fw-medium  text-nowrap red-ff-family py-3">
                      Corporate Card
                    </th>
                    <th className=" px-3 fs_16 fw-medium  text-nowrap red-ff-family py-3">
                      Name
                    </th>
                    <th className=" px-3 fs_16 fw-medium  text-nowrap red-ff-family py-3">
                      Available Credit
                    </th>
                    <th className=" px-3 fs_16 fw-medium  text-nowrap red-ff-family py-3">
                      Status
                    </th>
                  </tr>
                  <tr>
                    <td className=" pt-4 ">
                      <p
                        className="px-3 fs_14 pb-2 text-nowrap"
                        style={{ color: "#202020" }}
                      >
                        {" "}
                        5668003
                      </p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4  ">
                      <p className="px-3 fs_14 pb-2 text-nowrap fw-medium">
                        Greg Boston
                      </p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap"> $0.00</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <div className="d-flex px-3 align-items-center gap-4">
                        <button
                          className="border-0 px-4 py-2 text-nowrap rounded-2 fw-semibold red_ff fs_14"
                          style={{
                            backgroundColor: "#E7F2EA",
                            color: "#0E8029",
                          }}
                        >
                          Active
                        </button>
                        <button
                          className="border-0 px-4 py-2 text-nowrap rounded-2 red_ff fw-semibold fs_14"
                          style={{
                            backgroundColor: "#E7EFFE",
                            color: "#1364F1",
                          }}
                        >
                          Unlink Associate
                        </button>
                      </div>
                      <div className="border mt-3"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className=" pt-4 ">
                      <p
                        className="px-3 fs_14 mb-3"
                        style={{ color: "#202020" }}
                      >
                        {" "}
                        5668003
                      </p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4  ">
                      <p className="px-3 fs_14 mb-3 fw-medium">Greg Boston</p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 mb-3"> $0.00</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-3">
                      <div className="d-flex px-3 align-items-center gap-4">
                        <button
                          className="border-0 px-4 py-2 text-nowrap rounded-2 fw-semibold red_ff fs_14"
                          style={{
                            backgroundColor: "#E7F2EA",
                            color: "#0E8029",
                          }}
                        >
                          Active
                        </button>
                        <button
                          className="border-0 px-4 py-2 text-nowrap rounded-2 red_ff fw-semibold fs_14"
                          style={{
                            backgroundColor: "#E7EFFE",
                            color: "#1364F1",
                          }}
                        >
                          Unlink Associate
                        </button>
                      </div>
                      <div className="border mt-3"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className=" pt-4 ">
                      <p
                        className="px-3 fs_14 mb-3"
                        style={{ color: "#202020" }}
                      >
                        {" "}
                        5668003
                      </p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4  ">
                      <p className="px-3 fs_14 mb-3 fw-medium">Greg Boston</p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 mb-3"> $0.00</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-3">
                      <div className="d-flex px-3 align-items-center gap-4">
                        <button
                          className="border-0 px-4 py-2 text-nowrap rounded-2 fw-semibold red_ff fs_14"
                          style={{
                            backgroundColor: "#E7F2EA",
                            color: "#0E8029",
                          }}
                        >
                          Active
                        </button>
                        <button
                          className="border-0 px-4 py-2 text-nowrap rounded-2 red_ff fw-semibold fs_14"
                          style={{
                            backgroundColor: "#E7EFFE",
                            color: "#1364F1",
                          }}
                        >
                          Unlink Associate
                        </button>
                      </div>
                      <div className="border mt-3"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className=" pt-4 ">
                      <p
                        className="px-3 fs_14 mb-3"
                        style={{ color: "#202020" }}
                      >
                        {" "}
                        5668003
                      </p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4  ">
                      <p className="px-3 fs_14 mb-3 fw-medium">Greg Boston</p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 mb-3"> $0.00</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-3">
                      <div className="d-flex px-3 align-items-center gap-4">
                        <button
                          className="border-0 px-4 py-2 text-nowrap rounded-2 fw-semibold red_ff fs_14"
                          style={{
                            backgroundColor: "#E7F2EA",
                            color: "#0E8029",
                          }}
                        >
                          Active
                        </button>
                        <button
                          className="border-0 px-4 py-2 text-nowrap rounded-2 red_ff fw-semibold fs_14"
                          style={{
                            backgroundColor: "#E7EFFE",
                            color: "#1364F1",
                          }}
                        >
                          Unlink Associate
                        </button>
                      </div>
                      <div className="border mt-3"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className=" pt-4 ">
                      <p
                        className="px-3 fs_14 mb-3"
                        style={{ color: "#202020" }}
                      >
                        {" "}
                        5668003
                      </p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4  ">
                      <p className="px-3 fs_14 mb-3 fw-medium">Greg Boston</p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 mb-3"> $0.00</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-3">
                      <div className="d-flex px-3 align-items-center gap-4">
                        <button
                          className="border-0 px-4 py-2 text-nowrap rounded-2 fw-semibold red_ff fs_14"
                          style={{
                            backgroundColor: "#E7F2EA",
                            color: "#0E8029",
                          }}
                        >
                          Active
                        </button>
                        <button
                          className="border-0 px-4 py-2 text-nowrap rounded-2 red_ff fw-semibold fs_14"
                          style={{
                            backgroundColor: "#E7EFFE",
                            color: "#1364F1",
                          }}
                        >
                          Unlink Associate
                        </button>
                      </div>
                      <div className="border mt-3"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className=" pt-4 ">
                      <p
                        className="px-3 fs_14 mb-3"
                        style={{ color: "#202020" }}
                      >
                        {" "}
                        5668003
                      </p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4  ">
                      <p className="px-3 fs_14 mb-3 fw-medium">Greg Boston</p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 mb-3"> $0.00</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-3">
                      <div className="d-flex px-3 align-items-center gap-4">
                        <button
                          className="border-0 px-4 py-2 text-nowrap rounded-2 fw-semibold red_ff fs_14"
                          style={{
                            backgroundColor: "#E7F2EA",
                            color: "#0E8029",
                          }}
                        >
                          Active
                        </button>
                        <button
                          className="border-0 px-4 py-2 text-nowrap rounded-2 red_ff fw-semibold fs_14"
                          style={{
                            backgroundColor: "#E7EFFE",
                            color: "#1364F1",
                          }}
                        >
                          Unlink Associate
                        </button>
                      </div>
                      <div className="border mt-3"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className=" pt-4 ">
                      <p
                        className="px-3 fs_14 mb-3"
                        style={{ color: "#202020" }}
                      >
                        {" "}
                        5668003
                      </p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4  ">
                      <p className="px-3 fs_14 mb-3 fw-medium">Greg Boston</p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 mb-3"> $0.00</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-3">
                      <div className="d-flex px-3 align-items-center gap-4">
                        <button
                          className="border-0 px-4 py-2 text-nowrap rounded-2 fw-semibold red_ff fs_14"
                          style={{
                            backgroundColor: "#E7F2EA",
                            color: "#0E8029",
                          }}
                        >
                          Active
                        </button>
                        <button
                          className="border-0 px-4 py-2 text-nowrap rounded-2 red_ff fw-semibold fs_14"
                          style={{
                            backgroundColor: "#E7EFFE",
                            color: "#1364F1",
                          }}
                        >
                          Unlink Associate
                        </button>
                      </div>
                      <div className="border mt-3"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className=" pt-4 ">
                      <p
                        className="px-3 fs_14 mb-3"
                        style={{ color: "#202020" }}
                      >
                        {" "}
                        5668003
                      </p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4  ">
                      <p className="px-3 fs_14 mb-3 fw-medium">Greg Boston</p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 mb-3"> $0.00</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-3">
                      <div className="d-flex px-3 align-items-center gap-4">
                        <button
                          className="border-0 px-4 py-2 text-nowrap rounded-2 fw-semibold red_ff fs_14"
                          style={{
                            backgroundColor: "#E7F2EA",
                            color: "#0E8029",
                          }}
                        >
                          Active
                        </button>
                        <button
                          className="border-0 px-4 py-2 text-nowrap rounded-2 red_ff fw-semibold fs_14"
                          style={{
                            backgroundColor: "#E7EFFE",
                            color: "#1364F1",
                          }}
                        >
                          Unlink Associate
                        </button>
                      </div>
                      <div className="border mt-3"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className=" pt-4 ">
                      <p
                        className="px-3 fs_14 mb-3"
                        style={{ color: "#202020" }}
                      >
                        {" "}
                        5668003
                      </p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4  ">
                      <p className="px-3 fs_14 mb-3 fw-medium">Greg Boston</p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 mb-3"> $0.00</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-3">
                      <div className="d-flex px-3 align-items-center gap-4">
                        <button
                          className="border-0 px-4 py-2 text-nowrap rounded-2 fw-semibold red_ff fs_14"
                          style={{
                            backgroundColor: "#E7F2EA",
                            color: "#0E8029",
                          }}
                        >
                          Active
                        </button>
                        <button
                          className="border-0 px-4 py-2 text-nowrap rounded-2 red_ff fw-semibold fs_14"
                          style={{
                            backgroundColor: "#E7EFFE",
                            color: "#1364F1",
                          }}
                        >
                          Unlink Associate
                        </button>
                      </div>
                      <div className="border mt-3"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className=" pt-4 ">
                      <p
                        className="px-3 fs_14 mb-3"
                        style={{ color: "#202020" }}
                      >
                        {" "}
                        5668003
                      </p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4  ">
                      <p className="px-3 fs_14 mb-3 fw-medium">Greg Boston</p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 mb-3"> $0.00</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-3">
                      <div className="d-flex px-3 align-items-center gap-4">
                        <button
                          className="border-0 px-4 py-2 text-nowrap rounded-2 fw-semibold red_ff fs_14"
                          style={{
                            backgroundColor: "#E7F2EA",
                            color: "#0E8029",
                          }}
                        >
                          Active
                        </button>
                        <button
                          className="border-0 px-4 py-2 text-nowrap rounded-2 red_ff fw-semibold fs_14"
                          style={{
                            backgroundColor: "#E7EFFE",
                            color: "#1364F1",
                          }}
                        >
                          Unlink Associate
                        </button>
                      </div>
                      <div className="border mt-3"></div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="card border-0 h-100 p-4">
              <div className="row h-100">
                <div className="col-6 px-0 ps-3">
                  <p
                    className={`fs_14 mb-2 text-center fw-semibold red_ff ${
                      activeComponent === "linkCorporateCard"
                        ? "color_blue"
                        : ""
                    }`}
                    style={{ cursor: "pointer" }}
                    onClick={() => setActiveComponent("linkCorporateCard")}
                  >
                    Link Corporate Card
                  </p>
                  <div
                    className=""
                    style={{
                      border:
                        activeComponent === "linkCorporateCard"
                          ? "1px solid #1364F1"
                          : "1px solid #ccc",
                    }}
                  ></div>
                </div>
                <div className="col-6 px-0 pe-3">
                  <p
                    className={`fs_14 mb-2 text-center fw-semibold red_ff ${
                      activeComponent === "addNewAssociates" ? "color_blue" : ""
                    }`}
                    style={{ cursor: "pointer" }}
                    onClick={() => setActiveComponent("addNewAssociates")}
                  >
                    Add New Associates
                  </p>
                  <div
                    className=""
                    style={{
                      border:
                        activeComponent === "addNewAssociates"
                          ? "1px solid #1364F1"
                          : "1px solid #ccc",
                    }}
                  ></div>
                </div>
                <div className=" mt-3 d-flex flex-column justify-content-between h-100">
                  {activeComponent === "linkCorporateCard" ? (
                    <>
                      <div>
                        <label className="red_ff fw-medium" htmlFor="">
                          Select a Unassigned Corporate Card
                        </label>
                        <Form.Select
                          className="w-100 mt-2 px-3 py-2 rounded-2"
                          aria-label="Select a Corporate Card"
                        >
                          <option className="fs_14 red_ff" value="Select Card">
                            Select Card
                          </option>
                        </Form.Select>

                        <label className="mt-3 red_ff fw-medium" htmlFor="">
                          Select an Associate
                        </label>
                        <Form.Select
                          className="w-100 mt-2 px-3 py-2 rounded-2"
                          aria-label="Select an Associate"
                        >
                          <option value="Select an Associate">
                            Select an Associate
                          </option>
                        </Form.Select>
                      </div>
                      <button
                        style={{ backgroundColor: "#1364F1" }}
                        className=" w-100 mb-5 border-0 py-3 rounded-2 text-white fw-semibold"
                      >
                        Link with Associate
                      </button>
                    </>
                  ) : (
                    <>
                      <Form className=" row">
                        <Form.Group
                          controlId="formCorporateCard"
                          className="mb-2 col-6 pe-2"
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
                          className="mb-2 col-6 ps-2"
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
                          className="mb-2 col-12 "
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
                          className="mb-2 col-12 "
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
                          className="mb-2 col-12 "
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
                          className="mb-2 col-12 "
                        >
                          <Form.Label className="fs_14 ps-0 red_ff color_lightblack fw-medium">
                            Car Registration
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="04683116661"
                            className=" border px-3 py-2 rounded-2 border-body border-2"
                          />
                        </Form.Group>
                        <div className="col-12">
                          <label className=" red_ff" htmlFor="">
                            Assign a Corporate Card
                          </label>
                          <Form.Select
                            className=" mt-2 px-3 py-2 rounded-2"
                            aria-label="Select Card"
                          >
                            <option value="Select Card">Select Card</option>
                          </Form.Select>
                        </div>
                      </Form>
                      <button
                        style={{ backgroundColor: "#1364F1" }}
                        className=" w-100 mb-5 border-0 py-3 rounded-2 text-white fw-semibold"
                      >
                        Create
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CorporateCards;
