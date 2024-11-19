import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const WelcomeScreenModal = () => {
  const [showCardNumberModal, setShowCardNumberModal] = useState(false);
  const handleCreditModeModal = () => {
    setShowCardNumberModal(!showCardNumberModal);
  };
  return (
    <>
      <Container className="px-0">
        <h5 className="mt-5 red_ff fw-semibold">Welcome to Tap N Go</h5>
        <p className="mt-3 red_ff">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link href="/Dashboard/Modals/CardNumberModal">
          <button
            className="w-100 mt-3 border-0 py-2 text-white red_ff fw-bold rounded-2"
            style={{ backgroundColor: "#1364F1" }}
          >
            {" "}
            Let’s Get Started
          </button>
        </Link>
      </Container>
    </>
  );
};

export default WelcomeScreenModal;
