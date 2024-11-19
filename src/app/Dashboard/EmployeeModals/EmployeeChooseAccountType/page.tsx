"use client";
import React, { useState, useCallback } from "react";
import { Container, Image } from "react-bootstrap";
import Link from "next/link";
import logo from "../../../../../public/assets/images/svg/logo.svg"; // Corrected path
import line_image from "../../../../../public/assets/images/svg/completed_line.svg";
import left_image from "../../../../../public/assets/images/svg/left_icon.svg";

type AccountType = "prepaid" | "postpaid" | "Subscriptions";

const EmployeeChooseAccountType: React.FC = () => {
  const [selectedAccountType, setSelectedAccountType] =
    useState<AccountType | null>(null);

  // Using useCallback to prevent unnecessary re-renders
  const handleSelectAccountType = useCallback((accountType: AccountType) => {
    setSelectedAccountType(accountType);
  }, []);

  // Determine the route based on the selected account type
  const getRoute = () => {
    switch (selectedAccountType) {
      case "prepaid":
        return "/Dashboard/EmployeeModals/DirectorsInformationModal";
      case "postpaid":
        return "/Dashboard/EmployeeModals/PostPaidDirectorsInformationModal";
      // Example for subscriptions
      default:
        return "#"; // fallback
    }
  };

  return (
    <div className="py-5 min-vh-100 d-flex flex-column align-items-center justify-content-center bg_theme">
      <Container>
        <Link className="d-flex justify-content-center" href="#">
          <Image width={200} src={logo} alt="logo" />
        </Link>
        <div className="d-flex justify-content-center">
          <div
            className="bg-white w-100 position-relative rounded-2 mt-4 py-md-5  px-md-5 p-3 px-3"
            style={{ maxWidth: "500px" }}
          >
            <Image className="w-100" src={line_image} alt="line_image" />
            <div className="d-flex gap-3 mt-4 align-items-center mt-2">
              <Image src={left_image} alt="left_image" />
              <p className="mb-0 fw-bold">Choose Account Type</p>
            </div>

            {/* Prepaid Account Type */}
            <label
              className={`border-2 rounded-2 mt-4 w-100 p-3 cursor-pointer ${
                selectedAccountType === "prepaid"
                  ? "border-primary border"
                  : "border"
              }`}
              onClick={() => handleSelectAccountType("prepaid")}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0 fs_16 fw-semibold">Prepaid</h5>
                <input
                  type="radio"
                  checked={selectedAccountType === "prepaid"}
                  readOnly
                  className="form-check-input"
                />
              </div>
            </label>

            {/* Postpaid Account Type */}
            <label
              className={`border-2 rounded-2 mt-4 w-100 p-3 cursor-pointer ${
                selectedAccountType === "postpaid"
                  ? "border-primary border"
                  : "border"
              }`}
              onClick={() => handleSelectAccountType("postpaid")}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0 fs_16 fw-semibold">Postpaid</h5>
                <input
                  type="radio"
                  checked={selectedAccountType === "postpaid"}
                  readOnly
                  className="form-check-input"
                />
              </div>
            </label>

            {/* Proceed Button */}
            <Link href={getRoute()}>
              <button
                className="w-100 mt-3 border-0 py-3 text-white red_ff fw-semibold rounded-2"
                style={{ backgroundColor: "#1364F1" }}
                disabled={!selectedAccountType} // disable button if no type selected
              >
                Proceed
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EmployeeChooseAccountType;
