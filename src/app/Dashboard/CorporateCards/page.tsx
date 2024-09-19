"use client";
import React, { useState } from "react";
import Layout from "@/app/components/Layout/Laytout";
import bar_icon from "../../../../public/assets/images/svg/bar.svg";
import filter_icon from "../../../../public/assets/images/svg/search.svg";
import Image from "next/image";
import "../../Dashboard/CorporateCards/corporate.css";
const CorporateCards = () => {
  const [activeComponent, setActiveComponent] = useState("linkCorporateCard");
  return (
    <>
      <Layout>
        <div className="row px-2 mt-4">
          <div className="col-8">
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
                    <th className=" px-3 fs_16 fw-medium  red-ff-family py-3">
                      Corporate Card
                    </th>
                    <th className=" px-3 fs_16 fw-medium  red-ff-family py-3">
                      Name
                    </th>
                    <th className=" px-3 fs_16 fw-medium  red-ff-family py-3">
                      Available Credit
                    </th>
                    <th className=" px-3 fs_16 fw-medium  red-ff-family py-3">
                      Status
                    </th>
                  </tr>
                  <tr>
                    <td className=" pt-4 ">
                      <p
                        className="px-3 fs_14 pb-2"
                        style={{ color: "#202020" }}
                      >
                        {" "}
                        5668003
                      </p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4  ">
                      <p className="px-3 fs_14 pb-2 fw-medium">Greg Boston</p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2"> $0.00</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <div className="d-flex px-3 align-items-center gap-4">
                        <button
                          className="border-0 px-4 py-2 rounded-2 fw-semibold red_ff fs_14"
                          style={{
                            backgroundColor: "#E7F2EA",
                            color: "#0E8029",
                          }}
                        >
                          Active
                        </button>
                        <button
                          className="border-0 px-4 py-2 rounded-2 red_ff fw-semibold fs_14"
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
                          className="border-0 px-4 py-2 rounded-2 fw-semibold red_ff fs_14"
                          style={{
                            backgroundColor: "#E7F2EA",
                            color: "#0E8029",
                          }}
                        >
                          Active
                        </button>
                        <button
                          className="border-0 px-4 py-2 rounded-2 red_ff fw-semibold fs_14"
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
                          className="border-0 px-4 py-2 rounded-2 fw-semibold red_ff fs_14"
                          style={{
                            backgroundColor: "#E7F2EA",
                            color: "#0E8029",
                          }}
                        >
                          Active
                        </button>
                        <button
                          className="border-0 px-4 py-2 rounded-2 red_ff fw-semibold fs_14"
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
                          className="border-0 px-4 py-2 rounded-2 fw-semibold red_ff fs_14"
                          style={{
                            backgroundColor: "#E7F2EA",
                            color: "#0E8029",
                          }}
                        >
                          Active
                        </button>
                        <button
                          className="border-0 px-4 py-2 rounded-2 red_ff fw-semibold fs_14"
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
                          className="border-0 px-4 py-2 rounded-2 fw-semibold red_ff fs_14"
                          style={{
                            backgroundColor: "#E7F2EA",
                            color: "#0E8029",
                          }}
                        >
                          Active
                        </button>
                        <button
                          className="border-0 px-4 py-2 rounded-2 red_ff fw-semibold fs_14"
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
                          className="border-0 px-4 py-2 rounded-2 fw-semibold red_ff fs_14"
                          style={{
                            backgroundColor: "#E7F2EA",
                            color: "#0E8029",
                          }}
                        >
                          Active
                        </button>
                        <button
                          className="border-0 px-4 py-2 rounded-2 red_ff fw-semibold fs_14"
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
                          className="border-0 px-4 py-2 rounded-2 fw-semibold red_ff fs_14"
                          style={{
                            backgroundColor: "#E7F2EA",
                            color: "#0E8029",
                          }}
                        >
                          Active
                        </button>
                        <button
                          className="border-0 px-4 py-2 rounded-2 red_ff fw-semibold fs_14"
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
                          className="border-0 px-4 py-2 rounded-2 fw-semibold red_ff fs_14"
                          style={{
                            backgroundColor: "#E7F2EA",
                            color: "#0E8029",
                          }}
                        >
                          Active
                        </button>
                        <button
                          className="border-0 px-4 py-2 rounded-2 red_ff fw-semibold fs_14"
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
                          className="border-0 px-4 py-2 rounded-2 fw-semibold red_ff fs_14"
                          style={{
                            backgroundColor: "#E7F2EA",
                            color: "#0E8029",
                          }}
                        >
                          Active
                        </button>
                        <button
                          className="border-0 px-4 py-2 rounded-2 red_ff fw-semibold fs_14"
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
                          className="border-0 px-4 py-2 rounded-2 fw-semibold red_ff fs_14"
                          style={{
                            backgroundColor: "#E7F2EA",
                            color: "#0E8029",
                          }}
                        >
                          Active
                        </button>
                        <button
                          className="border-0 px-4 py-2 rounded-2 red_ff fw-semibold fs_14"
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
          <div className="col-4">
            <div className="card border-0 h-100 p-4">
              <div className="row">
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
                <div className=" mt-3">
                  {activeComponent === "linkCorporateCard" ? (
                    <>
                      <label className=" red_ff" htmlFor="">
                        Select a Unassigned Corporate Card
                      </label>
                      <select
                        className="w-100 mt-2 px-3 py-2 rounded-2"
                        name=""
                        id=""
                      >
                        <option className=" fs_14 red_ff" value="Select Card">
                          Select Card
                        </option>
                      </select>
                      <label className="mt-3 red_ff" htmlFor="">
                        Select an Associate
                      </label>
                      <select
                        className="w-100 mt-2 px-3 py-2 rounded-2"
                        name=""
                        id=""
                      >
                        <option value="Select an Associate">
                          Select an Associate
                        </option>
                      </select>
                    </>
                  ) : (
                    <>hello 1234</>
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
