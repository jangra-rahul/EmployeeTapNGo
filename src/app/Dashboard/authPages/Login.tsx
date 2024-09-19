import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const Login = () => {
  return (
    <Container className="">
      <h5 className="text-center fs_24 red_ff color_lightblack fw-bold">
        Login
      </h5>
      <Row className="justify-content-center mt-4">
        <Form className="mt-2">
          <Form.Group controlId="formCorporateCard" className="mb-4">
            <Form.Label className=" fs_16 red_ff color_lightblack fw-medium">
              User Name
            </Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              className=" border px-3 py-2 rounded-2 border-body border-2"
            />
          </Form.Group>

          <Form.Group controlId="formMobileNumber" className="mb-3">
            <Form.Label className="fs-6 red_ff color_lightblack fw-medium">
              Password
            </Form.Label>
            <Form.Control
              type="number"
              placeholder=""
              className=" border px-3 py-2 rounded-2 border-body border-2"
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-100 mt-3 py-2 fs-16 fw-semibold red_ff rounded-2"
          >
            Log In
          </Button>
        </Form>
        <footer className="mt-3">
          <p className="red_ff color_lightblack fw-medium fs-14">
            Forgot Password?&nbsp;
            <Link href="/Dashboard/ForgotCredential" className="color_blue">
              Click here!
            </Link>
          </p>
        </footer>
      </Row>
    </Container>
  );
};

export default Login;
