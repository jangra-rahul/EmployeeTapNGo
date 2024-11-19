"use client";
import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import logo from "../../../../../public/assets/images/svg/logo.svg";
import line_image from "../../../../../public/assets/images/svg/completed_line.svg";
import left_image from "../../../../../public/assets/images/svg/left_icon.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const VehcileDetails: React.FC = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("");
  const router = useRouter();

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPaymentMethod(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedPaymentMethod === "card") {
      router.push("/Dashboard/EmployeeModals/EmployeeCardPayment");
    } else {
      router.push("/Dashboard/EmployeeModals/PostpaidAddEmployeeModal");
    }
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
            <Image className="w-100 " src={line_image} alt="line_image" />
            <div className="d-flex gap-3 px-2 mt-4 align-items-center mt-2">
              <Image src={left_image} alt="line_image" />
              <p className="mb-0 fw-bold">Add Payment Method</p>
            </div>
            <div className="row mt-4 px-2">
              <Form.Group controlId="formMobileNumber" className="mb-3 col-12 ">
                <Form.Label className="fs-6 red_ff color_lightblack fw-medium">
                  Credit Limit Request per Card
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  className=" border px-3 py-2 rounded-2 border-body border-2"
                />
              </Form.Group>
              <Form.Group
                controlId="formBillingFrequency"
                className="mb-3 col-12 "
              >
                <Form.Label className="fs-6 red_ff color_lightblack fw-medium">
                  Billing Frequency
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  className=" border px-3 py-2 rounded-2 border-body border-2"
                />
              </Form.Group>
              <h5 className=" fs-6 fw-semibold">Add Primary Payment Method</h5>
              <div className="d-flex align-items-center gap-5">
                <div className="d-flex align-items-center gap-2 mt-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="applePay"
                    onChange={handlePaymentChange}
                    className="form-check-input"
                  />
                  <p className="mb-0 pt-1">Apple Pay</p>
                </div>
                <div className="d-flex align-items-center gap-2 mt-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    onChange={handlePaymentChange}
                    className="form-check-input"
                  />
                  <p className="mb-0 pt-1">Card Payment</p>
                </div>
              </div>
              <h5 className=" fs-6 mt-4 red_ff fw-semibold">
                Add Backup Payment Method
              </h5>
              <div className="d-flex align-items-center gap-5">
                <div className="d-flex align-items-center gap-2 mt-1">
                  <input
                    type="radio"
                    name="backupPaymentMethod"
                    value="applePayBackup"
                    className="form-check-input"
                  />
                  <p className="mb-0 pt-1">Apple Pay</p>
                </div>
                <div className="d-flex align-items-center gap-2 mt-2">
                  <input
                    type="radio"
                    name="backupPaymentMethod"
                    value="cardBackup"
                    className="form-check-input"
                  />
                  <p className="mb-0 pt-1">Card Payment</p>
                </div>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-100 mt-4 border-0 py-3 text-white red_ff fw-semibold rounded-2"
              style={{ backgroundColor: "#1364F1" }}
            >
              Submit
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default VehcileDetails;
