import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Modal } from "react-bootstrap";
import VehicleDetails from "../authPages/VehcileDetails";

const Register = () => {
  const [isVehicleModalOpen, setIsVehicleModalOpen] = useState(false);

  const openVehicleModal = (e: any) => {
    e.preventDefault();
    setIsVehicleModalOpen(true);
  };

  const closeVehicleModal = () => {
    setIsVehicleModalOpen(false);
  };

  return (
    <Container className="mt-4">
      <Form>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group controlId="formFirstName">
              <Form.Label className="fs_16 red_ff color_lightblack fw-normal">
                First Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className=" border px-3 py-2 rounded-2 border-body border-2"
              />
            </Form.Group>
          </Col>

          <Col md={6} className="mb-3">
            <Form.Group controlId="formLastName">
              <Form.Label className="fs_16 red_ff color_lightblack fw-normal">
                Last Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className=" border px-3 py-2 rounded-2 border-body border-2"
              />
            </Form.Group>
          </Col>

          <Col md={12} className="mb-3">
            <Form.Group controlId="formEmailAddress">
              <Form.Label className="fs_16 red_ff color_lightblack fw-normal">
                Email Address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder=""
                className=" border px-3 py-2 rounded-2 border-body border-2"
              />
            </Form.Group>
          </Col>

          <Col md={6} className="mb-3">
            <Form.Group controlId="formMobileNumber">
              <Form.Label className="fs_16 red_ff color_lightblack fw-normal">
                Mobile Number
              </Form.Label>
              <Form.Control
                type="number"
                placeholder=""
                className=" border px-3 py-2 rounded-2 border-body border-2"
              />
            </Form.Group>
          </Col>

          <Col md={6} className="mb-3">
            <Form.Group controlId="formDOB">
              <Form.Label className="fs_16 red_ff color_lightblack fw-normal">
                Date of Birth
              </Form.Label>
              <Form.Control
                type="date"
                placeholder=""
                className=" border px-3 py-2 rounded-2 border-body border-2"
              />
            </Form.Group>
          </Col>

          <Col md={12} className="mb-3">
            <Form.Group controlId="formCorporateCard">
              <Form.Label className="fs_16 red_ff color_lightblack fw-normal">
                Corporate Card
              </Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className=" border px-3 py-2 rounded-2 border-body border-2"
              />
            </Form.Group>
          </Col>
        </Row>

        <Button
          variant="primary"
          type="submit"
          className="w-100 mt-4 py-2 fs-16 fw-semibold red_ff rounded-2"
        >
          Sign Up
        </Button>

        <Form.Group
          controlId="formTAndC"
          className="mt-2 d-flex align-items-center"
        >
          <Form.Check type="checkbox" id="accept" className="me-2" />
          <Form.Label className="fs_14 mt-2 red_ff fw-normal">
            I accept
              T&C
            and
              &nbsp;Terms of Service&nbsp;
            for using this platform
          </Form.Label>
        </Form.Group>

        <p className="red_ff color_lightblack fw-normal mt-3 fs_14 d-flex justify-content-center">
          Already a user?&nbsp;
          <a className="color_blue" href="#">
            Login
          </a>
        </p>
      </Form>

      <VehicleDetails
        isModalOpen={isVehicleModalOpen}
        closeModal={closeVehicleModal}
      />
    </Container>
  );
};

export default Register;
