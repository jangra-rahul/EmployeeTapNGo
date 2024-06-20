import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (

    <Container className="mt-4 ">
      <Row className="justify-content-center ">
        <Form>
          <Form.Group controlId="formCorporateCard" className="mb-3">
            <Form.Label className="fs_16 red_ff color_lightblack fw-normal">
              Corporate Card
            </Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              className=" border px-3 py-2 rounded-2 border-body border-2"
            />
          </Form.Group>

          <Form.Group controlId="formMobileNumber" className="mb-3">
            <Form.Label className="fs_16 red_ff color_lightblack fw-normal">
              Mobile Number
            </Form.Label>
            <Form.Control
              type="number"
              placeholder=""
              className=" border px-3 py-2 rounded-2 border-body border-2"
            />
          </Form.Group>

          <Form.Group controlId="formDOB" className="mb-3">
            <Form.Label className="fs_16 red_ff color_lightblack fw-normal">
              Date of Birth
            </Form.Label>
            <Form.Control
              type="date"
              className=" border px-3 py-2 rounded-2 border-body border-2"
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-100 mt-4 py-2 fs-16 fw-semibold red_ff rounded-2"
          >
            Log In
          </Button>
        </Form>
        <footer className="mt-3 mb-4">
          <p className="red_ff color_lightblack fw-normal fs_14">
            Forgot Credentials?&nbsp;
            <Link to="/forgot-credential" className="color_blue">
              Click here!
            </Link>
          </p>
        </footer>
      </Row>
    </Container>
  );
};

export default Login;
