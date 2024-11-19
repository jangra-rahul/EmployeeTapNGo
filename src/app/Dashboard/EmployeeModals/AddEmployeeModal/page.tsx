"use client";
import React, { useState } from "react";
import { Container, Form, Modal, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../../public/assets/images/svg/logo.svg";
import line_image from "../../../../../public/assets/images/svg/completed_line.svg";
import left_image from "../../../../../public/assets/images/svg/left_icon.svg";
import cross_icon from "../../../../../public/assets/images/svg/cross_icon.svg";
import wrong_icon from "../../../../../public/assets/images/svg/wrong_icon.svg";
import "../DirectorsInformationModal/information.css";

const Page: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    mobileNumber: "",
    email: "",
    portalAccess: "",
    department: "",
  });

  const handleProceedClick = () => {
    // Check if any required fields are empty
    const {
      firstName,
      lastName,
      dateOfBirth,
      mobileNumber,
      email,
      department,
    } = formData;
    if (
      !firstName ||
      !lastName ||
      !dateOfBirth ||
      !mobileNumber ||
      !email ||
      !department
    ) {
      setIsModalOpen(true); // Open modal if validation fails
    } else {
      // Proceed with form submission or navigation
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-vh-100 py-5 d-flex flex-column align-items-center justify-content-center bg_theme">
      <Container>
        <Link className="d-flex justify-content-center" href="#">
          <Image width={200} src={logo} alt="logo" />
        </Link>
        <div className="d-flex justify-content-center">
          <div
            className="bg-white w-100 rounded-2 mt-4 py-md-5 px-md-5 p-3 px-3"
            style={{ maxWidth: "900px" }}
          >
            <Image className="w-100" src={line_image} alt="line_image" />
            <div className="d-flex gap-3 px-2 mt-4 align-items-center">
              <Image src={left_image} alt="left_icon" />
              <p className="mb-0 fw-bold">Add Employee</p>
            </div>
            <div className="row mt-4 px-2">
              <Form.Group controlId="formFirstName" className="mb-3 col-6">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  // onChange={handleInputChange}
                  className="border px-3 py-2 rounded-2 border-body border-2"
                />
              </Form.Group>
              <Form.Group controlId="formLastName" className="mb-3 col-6">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  // onChange={handleInputChange}
                  className="border px-3 py-2 rounded-2 border-body border-2"
                />
              </Form.Group>
              <Form.Group controlId="formDateOfBirth" className="mb-3 col-6">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="text"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  // onChange={handleInputChange}
                  className="border px-3 py-2 rounded-2 border-body border-2"
                />
              </Form.Group>
              <Form.Group controlId="formMobileNumber" className="mb-3 col-6">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  // onChange={handleInputChange}
                  className="border px-3 py-2 rounded-2 border-body border-2"
                />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-3 col-6">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={formData.email}
                  // onChange={handleInputChange}
                  className="border px-3 py-2 rounded-2 border-body border-2"
                />
              </Form.Group>
              <Form.Group controlId="formPortalAccess" className="mb-3 col-6">
                <div className="d-flex flex-column">
                  <Form.Label>Portal Access</Form.Label>
                  <select
                    name="portalAccess"
                    value={formData.portalAccess}
                    // onChange={handleInputChange}
                    className="py-2 rounded-2 border-body border border-2"
                  >
                    <option value="">--Select Access--</option>
                    <option value="Admin">Admin</option>
                    <option value="Employee">Employee</option>
                  </select>
                </div>
              </Form.Group>
              <Form.Group controlId="formDepartment" className="mb-3 col-6">
                <Form.Label>Department</Form.Label>
                <Form.Control
                  type="text"
                  name="department"
                  value={formData.department}
                  // onChange={handleInputChange}
                  className="border px-3 py-2 rounded-2 border-body border-2"
                />
              </Form.Group>
            </div>

            <span className="color_blue fw-semibold tdn">
              +Add Another Employee
            </span>

            <Button
              onClick={handleProceedClick}
              className="w-100 my-3 border-0 py-3 text-white red_ff fw-semibold rounded-2"
              style={{ backgroundColor: "#1364F1" }}
            >
              Proceed
            </Button>
          </div>
        </div>
      </Container>

      {/* Modal */}
      <Modal
        className="custom-modal border-0"
        show={isModalOpen}
        onHide={() => setIsModalOpen(false)}
        centered
      >
        <div className="position-relative">
          <Image
            onClick={() => setIsModalOpen(false)}
            className="position-absolute mt-4 me-4 end-0 top-0"
            width={15}
            src={cross_icon}
            alt="cross_icon"
          />
          <Modal.Header className="flex-column p-md-5 p-3">
            <Modal.Title className="text-center align-items-center flex-column d-flex mt-3 red_ff fs_24">
              <Image width={70} src={wrong_icon} alt="wrong_icon" />
              <h6 className="mt-3 red_ff fs_24 fw-semibold">
                Something Went Wrong
              </h6>
            </Modal.Title>
            <p className="red_ff fs_16 fw-normal text-center mb-0">
              Your email address is already registered. Please add unique email
              address.
            </p>
            <Button className="mt-3" onClick={() => setIsModalOpen(false)}>
              Try Again
            </Button>
          </Modal.Header>
        </div>
      </Modal>
    </div>
  );
};

export default Page;
