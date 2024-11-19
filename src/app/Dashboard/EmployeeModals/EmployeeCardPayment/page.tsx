"use client";
import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import logo from "../../../../../public/assets/images/svg/logo.svg";
import line_image from "../../../../../public/assets/images/svg/completed_line.svg";
import left_image from "../../../../../public/assets/images/svg/left_icon.svg";
import Image from "next/image";
import visa from "../../../../assets/images/svg/visa.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Select } from "antd";
import "../EmployeeCardPayment/cardPayment.css";

const CardPaymentModal: React.FC = () => {
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
      <Container>
        <Link className="d-flex justify-content-center" href="#">
          <Image width={200} src={logo} alt="logo" />
        </Link>
        <div className="d-flex justify-content-center">
          <div
            className="bg-white w-100 rounded-2 mt-4 py-md-5  px-md-5 p-3 px-3"
            style={{ maxWidth: "500px" }}
          >
            {/* <Image className="w-100 " src={line_image} alt="line_image" /> */}
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex gap-3 px-2 align-items-center mt-2">
                <Image src={left_image} alt="line_image" />
                <p className="mb-0 fw-bold">Card Payment</p>
              </div>
              <a className="tdn color_blue fs_13" href="#">
                Add Bank Account
              </a>
            </div>
            <div className="row mt-4 ">
              <Form.Group controlId="formMobileNumber" className="mb-3 col-12 ">
                <Form.Label className="fs-6 red_ff color_lightblack fw-medium">
                  Card Number
                </Form.Label>

                <div className="d-flex bg-white border border-1 p-2 justify-content-between align-items-center rounded-3 ">
                  <input
                    type="text"
                    id="cardNumber"
                    className="form-control border-0"
                    placeholder="1234 5678 0123 4567"
                  />

                  <Image src={visa} alt="" />
                </div>
              </Form.Group>
              <Form.Group
                controlId="formBillingFrequency"
                className="mb-3 col-6 "
              >
                <Form.Label className="fs-6 red_ff color_lightblack fw-medium">
                  Expiration Date
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="MM / YY"
                  className=" border px-3 py-2 rounded-2 border-body border-2"
                />
              </Form.Group>
              <Form.Group
                controlId="formBillingFrequency"
                className="mb-3 col-6 "
              >
                <Form.Label className="fs-6 red_ff color_lightblack fw-medium">
                  CVC
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="CVC"
                  className=" border px-3 py-2 rounded-2 border-body border-2"
                />
              </Form.Group>
              <Form.Group controlId="formCountry" className="mb-3 col-12 ">
                <Form.Label className="fs-6 red_ff color_lightblack fw-medium">
                  Country
                </Form.Label>
                <Select
                  className="w-100 border-2  border border-body rounded-3"
                  showSearch
                  placeholder="Select a country"
                  optionFilterProp="children"
                  onChange={handleCountryChange}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={countries}
                />
              </Form.Group>
            </div>
            <p className=" red_ff mt-1 mb-0">
              By providing your card information, you allow Tap N Go to charge
              your card for future payments in accordance with their terms.
            </p>
            <Link href="/Dashboard/Modals/AddBanckAccountModal">
              <button
                className="w-100 mt-4 border-0 py-3 text-white red_ff fw-semibold rounded-2"
                style={{ backgroundColor: "#1364F1" }}
              >
                Pay Now
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CardPaymentModal;
