"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import cross_icon from "../../../../public/assets/images/svg/cross_icon.svg";
import right_img from "../../../../public/assets/images/svg/right_img.svg";
import wrong_icon from "../../../../public/assets/images/svg/wrong_icon.svg";
import "../OtpVerification/otp.css";
import Link from "next/link";
import logo from "../../../../public/assets/images/svg/logo.svg";

const VerificationCard = () => {
  const [otpValues, setOtpValues] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);
  const [isWrongOtpModalOpen, setIsWrongOtpModalOpen] = useState(false);
  const [showNextScreen, setShowNextScreen] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (index: number, value: string) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
    if (index < otpValues.length - 1 && value !== "") {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleCardSubmit = () => {
    const isFilled = otpValues.every((value) => value !== "");
    if (isFilled) {
      setIsVerifyModalOpen(true);
      // After 5 seconds, show the next screen
      setTimeout(() => {
        setShowNextScreen(true);
        setIsVerifyModalOpen(false);
      }, 5000); // 5 seconds
    } else {
      setOtpValues(["", "", "", "", "", ""]);
      setIsWrongOtpModalOpen(true);
    }
  };

  const closeVerifyModal = () => {
    setIsVerifyModalOpen(false); // Close the verification card if needed
  };

  // Render next screen if showNextScreen is true
  if (showNextScreen) {
    return (
      <div className="min-vh-100 px-3 d-flex flex-column align-items-center justify-content-center bg_theme">
        <Link className="d-flex justify-content-center" href="#">
          <Image src={logo} alt="logo" />
        </Link>
        <div
          className="card w-100 rounded-1 p-md-5 p-3 mt-4"
          style={{ maxWidth: "494px" }}
        >
          <h5 className="text-center fs_24 color_blue red_ff fw-semibold">
            New Password
          </h5>
          <Form className="mt-4">
            <Form.Group controlId="formCorporateCard" className="mb-4">
              <Form.Label className=" fs_16 red_ff color_lightblack fw-medium">
                Enter New Password
              </Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className=" border px-3 py-2 rounded-2 border-body border-2"
              />
            </Form.Group>

            <Form.Group controlId="formMobileNumber" className="mb-3">
              <Form.Label className="fs-6 red_ff color_lightblack fw-medium">
                Confirm New Password
              </Form.Label>
              <Form.Control
                type="number"
                placeholder=""
                className=" border px-3 py-2 rounded-2 border-body border-2"
              />
            </Form.Group>
            <div className="d-flex align-items-center gap-2 mt-2">
              <Image width={20} src={right_img} alt="right_img" />
              <p className="mb-0 red_ff fs_14" style={{ color: "#666666" }}>
                Password must be in 8 Character
              </p>
            </div>
            <Button className="w-100 red_ff bg_blue text-white fs_16 mt-5 py-2 rounded-2 border-0">
              Save
            </Button>
          </Form>
        </div>
        {/* You can replace this content with your actual next screen component */}
      </div>
    );
  }

  return (
    <div className="min-vh-100 px-3 d-flex flex-column align-items-center justify-content-center bg_theme">
      <Link className="d-flex justify-content-center" href="#">
        <Image src={logo} alt="logo" />
      </Link>
      <Card className="p-md-4 mt-4 p-1 w-100" style={{ maxWidth: "470px" }}>
        <Card.Body className="position-relative">
          <Link href="/Dashboard/ForgotCredential">
            <Image
              // onClick={closeCard}
              className="position-absolute mt-2 me-2 end-0 top-0"
              width={15}
              src={cross_icon}
              alt="cross_icon"
            />
          </Link>
          <h6 className="text-center mt-3 fw-semibold red_ff fs_24">
            Verification Code
          </h6>
          <p
            className="red_ff fs_16 mt-2 fw-normal text-center mb-0"
            style={{ color: "#666666" }}
          >
            We have sent the OTP code to{" "}
            <strong className="fw-semibold">xyz@gmail.com</strong> for the
            verification process.
          </p>
          <Container className="mt-3">
            <Row className="text-center">
              {otpValues.map((value, index) => (
                <Col key={index} xs={2} className="px-1">
                  <input
                    style={{ height: "60px" }}
                    ref={(ref: any) => (inputRefs.current[index] = ref)}
                    className="w-100 fs-1 rounded-2 verify_input border-body border border-2 text-center"
                    type="number"
                    maxLength={1}
                    value={value}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                </Col>
              ))}
            </Row>
          </Container>
          <div className="text-center d-flex flex-column mt-5">
            <a href="#" className="color_blue tdn fs_14">
              Resend Code
            </a>
            <Button
              variant="primary"
              className="bg_blue border-0 py-2 rounded-1 fs_16 text-white mt-2"
              onClick={handleCardSubmit}
            >
              Submit
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* Success Modal */}
      <Modal
        className="custom-modal border-0"
        show={isVerifyModalOpen}
        onHide={closeVerifyModal}
        centered
      >
        <div className="position-relative">
          <a className="" href="#">
            <Image
              onClick={closeVerifyModal}
              className="position-absolute mt-4 me-4 end-0 top-0"
              width={15}
              src={cross_icon}
              alt="cross_icon"
            />
          </a>
          <Modal.Header className="flex-column p-5">
            <Modal.Title className="text-center flex-column d-flex mt-3 red_ff fs_24">
              <div className="d-flex justify-content-center">
                <Image width={70} src={right_img} alt="right_img" />
              </div>
              <h6 style={{ fontWeight: "500" }} className="mt-2 red_ff fs_24">
                Verification Successful
              </h6>
            </Modal.Title>
            <p
              style={{ color: "#666666" }}
              className="red_ff fs_16 fw-normal text-center mb-0"
            >
              You have successfully verified your mobile number and email
              address.
            </p>
          </Modal.Header>
        </div>
      </Modal>

      {/* Wrong OTP Modal */}
      <Modal
        className="custom-modal border-0"
        show={isWrongOtpModalOpen}
        onHide={() => setIsWrongOtpModalOpen(false)}
        centered
      >
        <div className="position-relative">
          <a className="" href="#">
            <Image
              onClick={() => setIsWrongOtpModalOpen(false)}
              className="position-absolute mt-4 me-4 end-0 top-0"
              width={15}
              src={cross_icon}
              alt="cross_icon"
            />
          </a>
          <Modal.Header className="flex-column p-md-5 p-3 ">
            <Modal.Title className="text-center flex-column d-flex mt-3 red_ff fs_24">
              <div className="d-flex justify-content-center">
                <Image width={70} src={wrong_icon} alt="wrong_icon" />
              </div>
              <h6 style={{ fontWeight: "500" }} className="mt-3 red_ff fs_24">
                Something Went Wrong
              </h6>
            </Modal.Title>
            <p
              style={{ color: "#666666" }}
              className="red_ff fs_16 fw-normal text-center mb-0"
            >
              Something went wrong while we were verifying your details. Please
              try again.
            </p>
            <a className="tdn color_blue mt-3" href="#">
              Try Again
            </a>
          </Modal.Header>
        </div>
      </Modal>
    </div>
  );
};

export default VerificationCard;
