"use client";
import React, { useState } from "react";
import Layout from "@/app/components/Layout/Laytout";
import bar_icon from "../../../../public/assets/images/svg/bar.svg";
import filter_icon from "../../../../public/assets/images/svg/search.svg";
import detail_icon from "../../../../public/assets/images/svg/detail_icon.svg";
import edit_icon from "../../../../public/assets/images/svg/edit_icon.svg";
import Image from "next/image";
import "../../Dashboard/CorporateCards/corporate.css";

const page = () => {
  return (
    <>
      <Layout>
        <div className="row px-2 mt-4">
          <div className="">
            <div className="card  border-0  p-4" style={{ minHeight: "83vh" }}>
              <div className="d-flex justify-content-between align-items-center">
                <h5 className=" red_ff fs_24">Vehicle Details</h5>
                <div className="d-flex align-items-center gap-2">
                  <Image src={filter_icon} alt="filter_icon" />
                  <Image src={bar_icon} alt="bar_icon" />
                </div>
              </div>
              <div className="overflow-y-auto" style={{ height: "700px" }}>
                <table className="w-100 mt-3  ">
                  <tr style={{ background: "#F0F0F1" }}>
                    <th className=" px-3 fs_16 fw-medium  text-nowrap red-ff-family py-3">
                      Rego
                    </th>
                    <th className=" px-3 fs_16 fw-medium  text-nowrap red-ff-family py-3">
                      Rego State
                    </th>
                    <th className=" px-3 fs_16 fw-medium  text-nowrap red-ff-family py-3">
                      Rego Expires
                    </th>
                    <th className=" px-3 fs_16 fw-medium  text-nowrap red-ff-family py-3">
                      Make
                    </th>
                    <th className=" px-3 fs_16 fw-medium  text-nowrap red-ff-family py-3">
                      Year
                    </th>
                    <th className=" px-3 fs_16 fw-medium  text-nowrap red-ff-family py-3">
                      Model
                    </th>
                    <th
                      style={{ color: "#F0F0F1" }}
                      className=" px-3 fs_16 fw-medium  text-nowrap red-ff-family py-3"
                    >
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
                        HR31B02
                      </p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4  ">
                      <p className="px-3 fs_14 pb-2 text-nowrap fw-medium">
                        AU
                      </p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">31/03/2025</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">$0.00</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">2024</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">Ferrari</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <div className="d-flex px-3 align-items-center gap-4">
                        <div className="d-flex align-items-center gap-2">
                          <Image width={37} src={edit_icon} alt="filter_icon" />
                          <Image width={37} src={detail_icon} alt="bar_icon" />
                        </div>
                      </div>
                      <div className="border mt-3"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className=" pt-4 ">
                      <p
                        className="px-3 fs_14 pb-2 text-nowrap"
                        style={{ color: "#202020" }}
                      >
                        {" "}
                        HR31B02
                      </p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4  ">
                      <p className="px-3 fs_14 pb-2 text-nowrap fw-medium">
                        AU
                      </p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">31/03/2025</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">$0.00</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">2024</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">Ferrari</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <div className="d-flex px-3 align-items-center gap-4">
                        <div className="d-flex align-items-center gap-2">
                          <Image width={37} src={edit_icon} alt="filter_icon" />
                          <Image width={37} src={detail_icon} alt="bar_icon" />
                        </div>
                      </div>
                      <div className="border mt-3"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className=" pt-4 ">
                      <p
                        className="px-3 fs_14 pb-2 text-nowrap"
                        style={{ color: "#202020" }}
                      >
                        {" "}
                        HR31B02
                      </p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4  ">
                      <p className="px-3 fs_14 pb-2 text-nowrap fw-medium">
                        AU
                      </p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">31/03/2025</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">$0.00</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">2024</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">Ferrari</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <div className="d-flex px-3 align-items-center gap-4">
                        <div className="d-flex align-items-center gap-2">
                          <Image width={37} src={edit_icon} alt="filter_icon" />
                          <Image width={37} src={detail_icon} alt="bar_icon" />
                        </div>
                      </div>
                      <div className="border mt-3"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className=" pt-4 ">
                      <p
                        className="px-3 fs_14 pb-2 text-nowrap"
                        style={{ color: "#202020" }}
                      >
                        {" "}
                        HR31B02
                      </p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4  ">
                      <p className="px-3 fs_14 pb-2 text-nowrap fw-medium">
                        AU
                      </p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">31/03/2025</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">$0.00</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">2024</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">Ferrari</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <div className="d-flex px-3 align-items-center gap-4">
                        <div className="d-flex align-items-center gap-2">
                          <Image width={37} src={edit_icon} alt="filter_icon" />
                          <Image width={37} src={detail_icon} alt="bar_icon" />
                        </div>
                      </div>
                      <div className="border mt-3"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className=" pt-4 ">
                      <p
                        className="px-3 fs_14 pb-2 text-nowrap"
                        style={{ color: "#202020" }}
                      >
                        {" "}
                        HR31B02
                      </p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4  ">
                      <p className="px-3 fs_14 pb-2 text-nowrap fw-medium">
                        AU
                      </p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">31/03/2025</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">$0.00</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">2024</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">Ferrari</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <div className="d-flex px-3 align-items-center gap-4">
                        <div className="d-flex align-items-center gap-2">
                          <Image width={37} src={edit_icon} alt="filter_icon" />
                          <Image width={37} src={detail_icon} alt="bar_icon" />
                        </div>
                      </div>
                      <div className="border mt-3"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className=" pt-4 ">
                      <p
                        className="px-3 fs_14 pb-2 text-nowrap"
                        style={{ color: "#202020" }}
                      >
                        {" "}
                        HR31B02
                      </p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4  ">
                      <p className="px-3 fs_14 pb-2 text-nowrap fw-medium">
                        AU
                      </p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">31/03/2025</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">$0.00</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">2024</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">Ferrari</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <div className="d-flex px-3 align-items-center gap-4">
                        <div className="d-flex align-items-center gap-2">
                          <Image width={37} src={edit_icon} alt="filter_icon" />
                          <Image width={37} src={detail_icon} alt="bar_icon" />
                        </div>
                      </div>
                      <div className="border mt-3"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className=" pt-4 ">
                      <p
                        className="px-3 fs_14 pb-2 text-nowrap"
                        style={{ color: "#202020" }}
                      >
                        {" "}
                        HR31B02
                      </p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4  ">
                      <p className="px-3 fs_14 pb-2 text-nowrap fw-medium">
                        AU
                      </p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">31/03/2025</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">$0.00</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">2024</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">Ferrari</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <div className="d-flex px-3 align-items-center gap-4">
                        <div className="d-flex align-items-center gap-2">
                          <Image width={37} src={edit_icon} alt="filter_icon" />
                          <Image width={37} src={detail_icon} alt="bar_icon" />
                        </div>
                      </div>
                      <div className="border mt-3"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className=" pt-4 ">
                      <p
                        className="px-3 fs_14 pb-2 text-nowrap"
                        style={{ color: "#202020" }}
                      >
                        {" "}
                        HR31B02
                      </p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4  ">
                      <p className="px-3 fs_14 pb-2 text-nowrap fw-medium">
                        AU
                      </p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">31/03/2025</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">$0.00</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">2024</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">Ferrari</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <div className="d-flex px-3 align-items-center gap-4">
                        <div className="d-flex align-items-center gap-2">
                          <Image width={37} src={edit_icon} alt="filter_icon" />
                          <Image width={37} src={detail_icon} alt="bar_icon" />
                        </div>
                      </div>
                      <div className="border mt-3"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className=" pt-4 ">
                      <p
                        className="px-3 fs_14 pb-2 text-nowrap"
                        style={{ color: "#202020" }}
                      >
                        {" "}
                        HR31B02
                      </p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4  ">
                      <p className="px-3 fs_14 pb-2 text-nowrap fw-medium">
                        AU
                      </p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">31/03/2025</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">$0.00</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">2024</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">Ferrari</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <div className="d-flex px-3 align-items-center gap-4">
                        <div className="d-flex align-items-center gap-2">
                          <Image width={37} src={edit_icon} alt="filter_icon" />
                          <Image width={37} src={detail_icon} alt="bar_icon" />
                        </div>
                      </div>
                      <div className="border mt-3"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className=" pt-4 ">
                      <p
                        className="px-3 fs_14 pb-2 text-nowrap"
                        style={{ color: "#202020" }}
                      >
                        {" "}
                        HR31B02
                      </p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4  ">
                      <p className="px-3 fs_14 pb-2 text-nowrap fw-medium">
                        AU
                      </p>{" "}
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">31/03/2025</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">$0.00</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">2024</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <p className="px-3 fs_14 pb-2 text-nowrap">Ferrari</p>
                      <div className="border mt-4"></div>
                    </td>
                    <td className=" pt-4 ">
                      <div className="d-flex px-3 align-items-center gap-4">
                        <div className="d-flex align-items-center gap-2">
                          <Image width={37} src={edit_icon} alt="filter_icon" />
                          <Image width={37} src={detail_icon} alt="bar_icon" />
                        </div>
                      </div>
                      <div className="border mt-3"></div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default page;
