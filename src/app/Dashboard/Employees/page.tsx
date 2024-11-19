"use client";
import React, { useState } from "react";
import Layout from "@/app/components/Layout/Laytout";
import bar_icon from "../../../../public/assets/images/svg/bar.svg";
import filter_icon from "../../../../public/assets/images/svg/search.svg";
import edit_icon from "../../../../public/assets/images/svg/edit_icon.svg";
import detail_icon from "../../../../public/assets/images/svg/detail_icon.svg";
import Image from "next/image";
import "../../Dashboard/CorporateCards/corporate.css";
import { Form, Modal } from "react-bootstrap";
import cross_icon from "../../../../public/assets/images/svg/cross_icon.svg";
import "../Employees/employees.css";
import Link from "next/link";

const Employees = () => {
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState<boolean>(false);

  const hendalclickbutton = () => {
    setIsVerifyModalOpen(!isVerifyModalOpen);
  };
  const [showSearchBar, setShowSearchBar] = useState(false);
  const handleSearchClick = () => {
    setShowSearchBar(!showSearchBar);
  };
  return (
    <>
      <Layout>
        <div className="row px-2 mt-4">
          <div className="col-lg-8">
            <div className="card   border-0  p-4" style={{ minHeight: "86vh" }}>
              <div className="d-flex mb-3 justify-content-between align-items-center">
                <h5 className=" red_ff fs_24">Employees</h5>
                <div className=" d-flex align-items-center gap-3">
                  {showSearchBar && (
                    <Form.Group className="position-relative">
                      <Form.Control type="search" placeholder="Search" />
                      <div className="arrow-down"></div>
                    </Form.Group>
                  )}
                  <div className="d-flex align-items-center gap-2">
                    <Image
                      onClick={handleSearchClick}
                      width={38}
                      src={filter_icon}
                      alt="filter_icon"
                    />
                    <Image width={38} src={bar_icon} alt="bar_icon" />
                  </div>
                </div>
              </div>
              <div className="overflow-auto " style={{ height: "930px" }}>
                <div className="">
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
                      <tr>
                        <th className="px-3 fs_16 fw-medium text-nowrap py-3">
                          Name
                        </th>
                        <th className="px-3 fs_16 fw-medium text-nowrap py-3">
                          Phone Number
                        </th>
                        <th className="px-3 fs_16 fw-medium text-nowrap py-3">
                          Vehicle
                        </th>
                        <th className="px-3 fs_16 fw-medium text-nowrap py-3">
                          Corporate Card
                        </th>
                        <th className="px-3 fs_16 fw-medium text-nowrap py-3">
                          Available Credit
                        </th>
                        <th className="px-3 fs_16 fw-medium text-nowrap py-3">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="mt-3 ">
                      <tr>
                        <td className=" pt-4 ">
                          <p
                            className="px-3 fw-semibold fs_14 pb-2 text-nowrap"
                            style={{ color: "#202020" }}
                          >
                            Greg Boston
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4  ">
                          <p className="px-3 fs_14 pb-2 text-nowrap ">
                            0456829171
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap text-white">
                            5668003
                          </p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap">5668003</p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap">$0.00</p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <div className="d-flex px-3 align-items-center gap-2">
                            <button
                              className="border-0 px-4 py-2 text-nowrap rounded-2 fw-semibold red_ff fs_14"
                              style={{
                                backgroundColor: "#E7F2EA",
                                color: "#0E8029",
                              }}
                            >
                              Active
                            </button>
                            <Image width={35} src={edit_icon} alt="edit_icon" />
                            <Image
                              width={35}
                              src={detail_icon}
                              alt="detail_icon"
                            />
                          </div>
                          <div className="border mt-3"></div>
                        </td>
                      </tr>
                      <tr>
                        <td className=" pt-4 ">
                          <p
                            className="px-3 fw-semibold fs_14 pb-2 text-nowrap"
                            style={{ color: "#202020" }}
                          >
                            Julie Smith
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4  ">
                          <p className="px-3 fs_14 pb-2 text-nowrap ">
                            0456829171
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap color_lightblack">
                            HR31B02
                          </p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap text-white">
                            5668003
                          </p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap">$0.00</p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <div className="d-flex px-3 align-items-center gap-2">
                            <button
                              onClick={hendalclickbutton}
                              className="border-0 px-2 ps-3 py-2 text-nowrap rounded-2 fw-semibold red_ff fs_14"
                              style={{
                                backgroundColor: "#FDE5E8",
                                color: "#EB001B",
                              }}
                            >
                              In- Active
                            </button>
                            <Image width={35} src={edit_icon} alt="edit_icon" />
                            <Image
                              width={35}
                              src={detail_icon}
                              alt="detail_icon"
                            />
                          </div>
                          <div className="border mt-3"></div>
                        </td>
                      </tr>
                      <tr>
                        <td className=" pt-4 ">
                          <p
                            className="px-3 fw-semibold fs_14 pb-2 text-nowrap"
                            style={{ color: "#202020" }}
                          >
                            Sagar Malik
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4  ">
                          <p className="px-3 fs_14 pb-2 text-nowrap ">
                            0456829171
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap color_lightblack">
                            HR31B02
                          </p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap text-white">
                            HR31B02
                          </p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap text-white">
                            $0.00
                          </p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <div className="d-flex px-3 align-items-center gap-2">
                            <button
                              className="border-0 px-4 py-2 text-nowrap rounded-2 fw-semibold red_ff fs_14"
                              style={{
                                backgroundColor: "#E7F2EA",
                                color: "#0E8029",
                              }}
                            >
                              Active
                            </button>
                            <Image width={35} src={edit_icon} alt="edit_icon" />
                            <Image
                              width={35}
                              src={detail_icon}
                              alt="detail_icon"
                            />
                          </div>
                          <div className="border mt-3"></div>
                        </td>
                      </tr>
                      <tr>
                        <td className=" pt-4 ">
                          <p
                            className="px-3 fw-semibold fs_14 pb-2 text-nowrap"
                            style={{ color: "#202020" }}
                          >
                            Sagar Malik
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4  ">
                          <p className="px-3 fs_14 pb-2 text-nowrap ">
                            0456829171
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap color_lightblack">
                            HR31B02
                          </p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap text-white">
                            HR31B02
                          </p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap text-white">
                            $0.00
                          </p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <div className="d-flex px-3 align-items-center gap-2">
                            <button
                              className="border-0 px-4 py-2 text-nowrap rounded-2 fw-semibold red_ff fs_14"
                              style={{
                                backgroundColor: "#E7F2EA",
                                color: "#0E8029",
                              }}
                            >
                              Active
                            </button>
                            <Image width={35} src={edit_icon} alt="edit_icon" />
                            <Image
                              width={35}
                              src={detail_icon}
                              alt="detail_icon"
                            />
                          </div>
                          <div className="border mt-3"></div>
                        </td>
                      </tr>
                      <tr>
                        <td className=" pt-4 ">
                          <p
                            className="px-3 fw-semibold fs_14 pb-2 text-nowrap"
                            style={{ color: "#202020" }}
                          >
                            Greg Boston
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4  ">
                          <p className="px-3 fs_14 pb-2 text-nowrap ">
                            0456829171
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap text-white">
                            5668003
                          </p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap">5668003</p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap">$0.00</p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <div className="d-flex px-3 align-items-center gap-2">
                            <button
                              className="border-0 px-4 py-2 text-nowrap rounded-2 fw-semibold red_ff fs_14"
                              style={{
                                backgroundColor: "#E7F2EA",
                                color: "#0E8029",
                              }}
                            >
                              Active
                            </button>
                            <Image width={35} src={edit_icon} alt="edit_icon" />
                            <Image
                              width={35}
                              src={detail_icon}
                              alt="detail_icon"
                            />
                          </div>
                          <div className="border mt-3"></div>
                        </td>
                      </tr>
                      <tr>
                        <td className=" pt-4 ">
                          <p
                            className="px-3 fw-semibold fs_14 pb-2 text-nowrap"
                            style={{ color: "#202020" }}
                          >
                            Julie Smith
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4  ">
                          <p className="px-3 fs_14 pb-2 text-nowrap ">
                            0456829171
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap color_lightblack">
                            HR31B02
                          </p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap text-white">
                            5668003
                          </p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap">$0.00</p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <div className="d-flex px-3 align-items-center gap-2">
                            <button
                              className="border-0 px-2 ps-3 py-2 text-nowrap rounded-2 fw-semibold red_ff fs_14"
                              style={{
                                backgroundColor: "#FDE5E8",
                                color: "#EB001B",
                              }}
                            >
                              In- Active
                            </button>
                            <Image width={35} src={edit_icon} alt="edit_icon" />
                            <Image
                              width={35}
                              src={detail_icon}
                              alt="detail_icon"
                            />
                          </div>
                          <div className="border mt-3"></div>
                        </td>
                      </tr>
                      <tr>
                        <td className=" pt-4 ">
                          <p
                            className="px-3 fw-semibold fs_14 pb-2 text-nowrap"
                            style={{ color: "#202020" }}
                          >
                            Greg Boston
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4  ">
                          <p className="px-3 fs_14 pb-2 text-nowrap ">
                            0456829171
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap color_lightblack">
                            HR31B02
                          </p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap text-white">
                            5668003
                          </p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap">$0.00</p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <div className="d-flex px-3 align-items-center gap-2">
                            <button
                              className="border-0 px-4 py-2 text-nowrap rounded-2 fw-semibold red_ff fs_14"
                              style={{
                                backgroundColor: "#E7F2EA",
                                color: "#0E8029",
                              }}
                            >
                              Active
                            </button>
                            <Image width={35} src={edit_icon} alt="edit_icon" />
                            <Image
                              width={35}
                              src={detail_icon}
                              alt="detail_icon"
                            />
                          </div>
                          <div className="border mt-3"></div>
                        </td>
                      </tr>
                      <tr>
                        <td className=" pt-4 ">
                          <p
                            className="px-3 fw-semibold fs_14 pb-2 text-nowrap"
                            style={{ color: "#202020" }}
                          >
                            Greg Boston
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4  ">
                          <p className="px-3 fs_14 pb-2 text-nowrap ">
                            0456829171
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap text-white">
                            5668003
                          </p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap">5668003</p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap">$0.00</p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <div className="d-flex px-3 align-items-center gap-2">
                            <button
                              className="border-0 px-4 py-2 text-nowrap rounded-2 fw-semibold red_ff fs_14"
                              style={{
                                backgroundColor: "#E7F2EA",
                                color: "#0E8029",
                              }}
                            >
                              Active
                            </button>
                            <Image width={35} src={edit_icon} alt="edit_icon" />
                            <Image
                              width={35}
                              src={detail_icon}
                              alt="detail_icon"
                            />
                          </div>
                          <div className="border mt-3"></div>
                        </td>
                      </tr>
                      <tr>
                        <td className=" pt-4 ">
                          <p
                            className="px-3 fw-semibold fs_14 pb-2 text-nowrap"
                            style={{ color: "#202020" }}
                          >
                            Greg Boston
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4  ">
                          <p className="px-3 fs_14 pb-2 text-nowrap ">
                            0456829171
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap color_lightblack">
                            HR31B02
                          </p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap text-white">
                            5668003
                          </p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap">$0.00</p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <div className="d-flex px-3 align-items-center gap-2">
                            <button
                              className="border-0 px-4 py-2 text-nowrap rounded-2 fw-semibold red_ff fs_14"
                              style={{
                                backgroundColor: "#E7F2EA",
                                color: "#0E8029",
                              }}
                            >
                              Active
                            </button>
                            <Image width={35} src={edit_icon} alt="edit_icon" />
                            <Image
                              width={35}
                              src={detail_icon}
                              alt="detail_icon"
                            />
                          </div>
                          <div className="border mt-3"></div>
                        </td>
                      </tr>
                      <tr>
                        <td className=" pt-4 ">
                          <p
                            className="px-3 fw-semibold fs_14 pb-2 text-nowrap"
                            style={{ color: "#202020" }}
                          >
                            Greg Boston
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4  ">
                          <p className="px-3 fs_14 pb-2 text-nowrap ">
                            0456829171
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap color_lightblack">
                            HR31B02
                          </p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap text-white">
                            5668003
                          </p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap">$0.00</p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <div className="d-flex px-3 align-items-center gap-2">
                            <button
                              className="border-0 px-4 py-2 text-nowrap rounded-2 fw-semibold red_ff fs_14"
                              style={{
                                backgroundColor: "#E7F2EA",
                                color: "#0E8029",
                              }}
                            >
                              Active
                            </button>
                            <Image width={35} src={edit_icon} alt="edit_icon" />
                            <Image
                              width={35}
                              src={detail_icon}
                              alt="detail_icon"
                            />
                          </div>
                          <div className="border mt-3"></div>
                        </td>
                      </tr>
                      <tr>
                        <td className=" pt-4 ">
                          <p
                            className="px-3 fw-semibold fs_14 pb-2 text-nowrap"
                            style={{ color: "#202020" }}
                          >
                            Greg Boston
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4  ">
                          <p className="px-3 fs_14 pb-2 text-nowrap ">
                            0456829171
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap text-white">
                            5668003
                          </p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap">5668003</p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap">$0.00</p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <div className="d-flex px-3 align-items-center gap-2">
                            <button
                              className="border-0 px-4 py-2 text-nowrap rounded-2 fw-semibold red_ff fs_14"
                              style={{
                                backgroundColor: "#E7F2EA",
                                color: "#0E8029",
                              }}
                            >
                              Active
                            </button>
                            <Image width={35} src={edit_icon} alt="edit_icon" />
                            <Image
                              width={35}
                              src={detail_icon}
                              alt="detail_icon"
                            />
                          </div>
                          <div className="border mt-3"></div>
                        </td>
                      </tr>
                      <tr>
                        <td className=" pt-4 ">
                          <p
                            className="px-3 fw-semibold fs_14 pb-2 text-nowrap"
                            style={{ color: "#202020" }}
                          >
                            Greg Boston
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4  ">
                          <p className="px-3 fs_14 pb-2 text-nowrap ">
                            0456829171
                          </p>{" "}
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap color_lightblack">
                            HR31B02
                          </p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap text-white">
                            5668003
                          </p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <p className="px-3 fs_14 pb-2 text-nowrap">$0.00</p>
                          <div className="border mt-4"></div>
                        </td>
                        <td className=" pt-4 ">
                          <div className="d-flex px-3 align-items-center gap-2">
                            <button
                              className="border-0 px-4 py-2 text-nowrap rounded-2 fw-semibold red_ff fs_14"
                              style={{
                                backgroundColor: "#E7F2EA",
                                color: "#0E8029",
                              }}
                            >
                              Active
                            </button>
                            <Image width={35} src={edit_icon} alt="edit_icon" />
                            <Image
                              width={35}
                              src={detail_icon}
                              alt="detail_icon"
                            />
                          </div>
                          <div className="border mt-3"></div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 ps-lg-2 mt-4 mt-lg-0">
            <div className="card d-flex flex-column justify-content-between border-0 h-100 p-4">
              <div>
                {" "}
                <h4 className=" fs_22 red_ff mb-3">Create a New Employee</h4>
                <Form className=" row">
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
                    className="mb-2 col-12 mt-2"
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
                    className="mb-2 col-12  mt-2"
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
                    className="mb-2 col-12  mt-2"
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

                  <div className="col-12 mt-2">
                    <label className=" red_ff" htmlFor="">
                      Car Registration
                    </label>
                    <Form.Select
                      className=" mt-2 px-3 py-2 rounded-2"
                      aria-label="04683116661"
                    >
                      <option value="04683116661">04683116661</option>
                    </Form.Select>
                  </div>
                  <div className="col-12 mt-3">
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
              </div>
              <Link href="/Dashboard/EmployeeDetails">
                <button
                  style={{ backgroundColor: "#1364F1" }}
                  className=" w-100  border-0 py-3 mt-4 rounded-2 text-white fw-semibold"
                >
                  Create
                </button>
              </Link>
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
      </Layout>
    </>
  );
};

export default Employees;
