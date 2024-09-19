"use client";
import React, { useState } from "react";
import and_icon from "../../../../public/assets/images/svg/or_icon.svg";
import cross_icon from "../../../../public/assets/images/svg/cross_icon.svg";
import VerificationCode from "@/app/Dashboard/authPages/VerificationCode";
import { Modal, Container, Form, Button, Card, Image } from "react-bootstrap";
import "../ForgotCredential/forgot.css";
import Link from "next/link";

const ForgotCredential = () => {
  const [isVehicleModalOpen, setIsVehicleModalOpen] = useState<boolean>(false);

  const openVehicleModal = () => {
    setIsVehicleModalOpen(true);
  };

  const closeVehicleModal = () => {
    setIsVehicleModalOpen(false);
  };

  return (
    <Container
      fluid
      className="min-vh-100 d-flex flex-column align-items-center justify-content-center bg_theme"
    >
      <Card className=" p-md-5 p-2 w-100" style={{ maxWidth: "494px" }}>
        <Card.Body className="">
          <Card.Title
            as="h4"
            className="fs_24 text-center red_ff fw-semibold mb-5"
          >
            Forgot Password?
          </Card.Title>

          <Form>
            <Form.Group controlId="formEmailOrMobile" className="mb-4">
              <Form.Label className="red_ff fs_16 fw-normal">
                Registered Email Address*
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Email Address here..."
                className="py-2 px-3 border-2 border rounded-2"
              />
            </Form.Group>
            <Link href="/Dashboard/OtpVerification">
              <Button className="w-100 red_ff bg_blue text-white fs_16 mt-5 fw-semibold py-2 rounded-2 border-0">
                Send OTP
              </Button>
            </Link>
          </Form>
        </Card.Body>
      </Card>

      <VerificationCode
        isModalOpen={isVehicleModalOpen}
        closeModal={closeVehicleModal}
      />
    </Container>
  );
};

export default ForgotCredential;
