import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import "../OtpVerification/otp.css";
import Image from "next/image";
import cross_icon from "../../../../public/assets/images/svg/cross_icon.svg";
import right_img from "../../../../public/assets/images/svg/right_img.svg";

interface PostpaidAccountModalProps {
  show: boolean;
  handleClose: () => void;
}

const PostpaidAccountModal: React.FC<PostpaidAccountModalProps> = ({
  show,
  handleClose,
}) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    handleClose();
    setShowSuccessModal(true); // Open success modal on form submission
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false); // Close success modal
    handleClose(); // Close the main modal as well
  };

  return (
    <>
      {/* Main Postpaid Account Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        dialogClassName="custom-modal-width"
      >
        <Modal.Header closeButton className="border-0">
          <Modal.Title>
            <h5 className="mb-0 fs_22 px-3 red_ff mb-0 fw-semibold">
              Postpaid Account Application
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="border-0 pt-3">
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="creditLimit">
                  <Form.Label className="fs_16 fw-normal red_ff">
                    Credit Limit
                  </Form.Label>
                  <Form.Control className="py-2" type="text" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="billingFrequency">
                  <Form.Label className="fs_16 fw-normal  red_ff">
                    Billing Frequency
                  </Form.Label>
                  <Form.Control className="py-2" as="select">
                    <option className="">Monthly</option>
                    <option>Quarterly</option>
                    <option>Annually</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="primaryPaymentMethod">
                  <Form.Label className="fs_16 fw-normal  red_ff">
                    Primary Payment Method
                  </Form.Label>
                  <Form.Control className="py-2" type="text" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="backupPaymentMethod">
                  <Form.Label className="fs_16 fw-normal  red_ff">
                    Backup Payment Method
                  </Form.Label>
                  <Form.Control className="py-2" type="text" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="termsAndConditions" className="mb-3">
              <Form.Check
                type="checkbox"
                label={
                  <span>
                    Agree to{" "}
                    <a className=" text-decoration-underline" href="#">
                      Terms and Conditions for Auto Debit
                    </a>
                  </span>
                }
              />
            </Form.Group>
            <Button type="submit" className="w-100 mt-3 bg_blue red_ff py-3">
              Submit Request
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Success Modal */}

      <Modal
        className="custom-modal border-0"
        show={showSuccessModal}
        onHide={handleCloseSuccessModal}
        centered
      >
        <div className="position-relative">
          <a className="" href="#">
            <Image
              onClick={handleCloseSuccessModal}
              className="position-absolute mt-4 me-4 end-0 top-0"
              width={15}
              src={cross_icon}
              alt="cross_icon"
            />
          </a>
          <Modal.Header className="flex-column p-4">
            <Modal.Title className="text-center flex-column  d-flex mt-4 red_ff fs_24">
              <div className="d-flex justify-content-center">
                <Image width={70} src={right_img} alt="right_img" />
              </div>
              <h6 style={{ fontWeight: "500" }} className="mt-2 red_ff fs_24">
                Request Successful
              </h6>
            </Modal.Title>
            <p
              style={{ color: "#666666" }}
              className="red_ff fs_16 fw-normal pb-3 text-center mb-0"
            >
              You have successfully submitted request for account update from
              prepaid to postpaid, you will get an email once your request is
              approved.
            </p>
          </Modal.Header>
        </div>
      </Modal>
    </>
  );
};

export default PostpaidAccountModal;
