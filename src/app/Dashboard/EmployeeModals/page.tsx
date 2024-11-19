"use client";
import React, { useState } from "react";
import logo from "../../../../public/assets/images/svg/black_logo.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import "../CardNumberModal/cardNumber.css";
import { Select } from "antd";
import Link from "next/link";

const EmployeeWelcomeModal: React.FC = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("");
  const router = useRouter();

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPaymentMethod(e.target.value);
  };

  const countries = [
    { label: "United States", value: "US" },
    { label: "India", value: "IN" },
    { label: "United Arab Emirates", value: "AE" },
    { label: "United Kingdom", value: "UK" },
  ];

  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
  };

  return (
    <div className=" py-5 min-vh-100 d-flex flex-column align-items-center justify-content-center bg_theme">
      <div className="d-flex justify-content-center">
        <div
          className="bg-white w-100 rounded-2 mt-4 py-md-5  px-md-5 p-3 px-3"
          style={{ maxWidth: "500px" }}
        >
          <Image width={200} src={logo} alt="logo" />
          <h5 className="mt-5 red_ff fw-semibold">Welcome to Tap N Go</h5>
          <p className="mt-3 red_ff">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <Link href="/Dashboard/EmployeeModals/EmployeeAccountSetup">
            <button
              className="w-100 mt-3 border-0 py-2 text-white red_ff fw-bold rounded-2"
              style={{ backgroundColor: "#1364F1" }}
            >
              {" "}
              Let’s Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmployeeWelcomeModal;
