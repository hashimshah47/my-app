import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import middle_img from "../images/middle-img.png";
import logo from "../images/logo.png";
import "./LandingPage.css";
import SignIn from "./SignIn";
import { useState } from "react";

function LandingPage() {
  const [signin, setSignIn] = useState(false);
  const [landingPage, setLandingPage] = useState(true);

  function handleChange(event) {
    if (event.target.innerText == "Sign In") {
      setSignIn(true);
      setLandingPage(false);
    }
  }

  return (
    <>
      <Container className="wrapper">
        {
          // landingPage &&

          <Row>
            <div className="name-logo">
              <img src={logo} alt="logo" height={200} />
              &nbsp;&nbsp;&nbsp;Decentralized Voting System
            </div>
          </Row>
        }

        <Row>
          {signin && (
            <Col>
              <SignIn />
            </Col>
          )}
          <Col>
            <div className="middle-img">
              <img src={middle_img} alt="mid" height={600} />
            </div>
          </Col>
        </Row>

        {landingPage && (
          <Row>
            <div className="buttons">
              <button className="signin" size="lg" onClick={handleChange}>
                Sign In
              </button>{" "}
              <button className="register" size="lg">
                Register
              </button>{" "}
            </div>
          </Row>
        )}
      </Container>
    </>
  );
}

export default LandingPage;
