"use client";
import React, { useState } from "react";
import Layout from "@/app/components/Layout/Laytout";
import bar_icon from "../../../../public/assets/images/svg/bar.svg";
import filter_icon from "../../../../public/assets/images/svg/search.svg";
import Image from "next/image";
import "../../Dashboard/CorporateCards/corporate.css";
import cross_icon from "../../../../public/assets/images/svg/cross_icon.svg";
import { Dropdown, Form, Modal } from "react-bootstrap";
import "../Employees/employees.css";

const CorporateCards = () => {
  const [activeComponent, setActiveComponent] = useState("linkCorporateCard");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const handleSearchClick = () => {
    setShowSearchBar(!showSearchBar);
  };

  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState<boolean>(false);

  const hendalclickbutton = () => {
    setIsVerifyModalOpen(!isVerifyModalOpen);
  };
  const [sortOrder, setSortOrder] = useState("");

  const handleSort = (order) => {
    setSortOrder(order);
    console.log("Sorting by:", order);
  };
  return (
    <>
      <Layout>
        <div className="row px-2 mt-4">
          <div className="col-lg-8">
            <div className="card  border-0  p-4" style={{ minHeight: "86vh" }}>
              <div className="d-flex mb-3 justify-content-between align-items-center">
                <h5 className=" red_ff fs_24">Corporate Cards</h5>
                <div className="d-flex align-items-center gap-2">
                  {showSearchBar && (
                    <Form.Group className="position-relative">
                      <Form.Control type="search" placeholder="Search" />
                      <div className="arrow-down"></div>
                    </Form.Group>
                  )}
                  <Image
                    className=" cursor-pointer"
                    onClick={handleSearchClick}
                    src={filter_icon}
                    alt="filter_icon"
                  />
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="light"
                      id="dropdown-basic"
                      className="p-0 border-0 bg-transparent"
                    >
                      <Image width={38} src={bar_icon} alt="bar_icon" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => handleSort("A to Z")}>
                        A to Z (Ascending)
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleSort("Z to A")}>
                        Z to A (Descending)
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="overflow-auto" style={{ height: "1003px" }}>
                <table className="w-100 ">
                  <thead
                    style={{
                      position: "sticky",
                      top: "0px",
                      zIndex: 1,
                      backgroundColor: "#F0F0F1",
                      marginTop: "12px",
                    }}
                  >
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
                  </thead>
                  <tbody className="">
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
                            onClick={hendalclickbutton}
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
                            onClick={hendalclickbutton}
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
                            onClick={hendalclickbutton}
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
                            onClick={hendalclickbutton}
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
                            onClick={hendalclickbutton}
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
                            onClick={hendalclickbutton}
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
                            onClick={hendalclickbutton}
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
                            onClick={hendalclickbutton}
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
                            onClick={hendalclickbutton}
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
                  </tbody>
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
          <Modal
            className="custom-modal"
            show={isVerifyModalOpen}
            onHide={hendalclickbutton}
            centered
          >
            <div className="position-relative">
              <a className="" href="#">
                <Image
                  onClick={hendalclickbutton}
                  className="position-absolute mt-3 me-3 end-0 top-0"
                  width={10}
                  src={cross_icon}
                  alt="cross_icon"
                />
              </a>
              <Modal.Header className="flex-column">
                <Modal.Title className="text-center  flex-column d-flex mt-4 red_ff fs_24">
                  Confirm to In-Active
                </Modal.Title>
                <p className="red_ff mt-2 fs_16 fw-normal text-center color_lightblack mb-0">
                  Are you sure to do this?
                </p>
                <div className="d-flex mt-4 align-items-center gap-2">
                  <button
                    onClick={hendalclickbutton}
                    className=" px-5 red_ff py-2 color_blue border-0 rounded-2 text-black"
                    style={{ backgroundColor: "#E7EFFE" }}
                  >
                    Yes
                  </button>
                  <button
                    onClick={hendalclickbutton}
                    className=" px-5 red_ff py-2 border-0 rounded-2 text-white"
                    style={{ backgroundColor: "#1364F1" }}
                  >
                    No
                  </button>
                </div>
              </Modal.Header>
            </div>
          </Modal>
        </div>
      </Layout>
    </>
  );
};

export default CorporateCards;
