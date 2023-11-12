import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/IMG_3472_1_1-modified.png";
import Tilt from "react-parallax-tilt";
import pdf from "../../Assets/Black & White Minimalistic Professional Resume.pdf";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            {/*
            <p className="home-about-body">
              I am fluent in classics like
              <i>
                <b className="purple"> C++ and Python. </b>
              </i>
              <br />
              <br />
              I debug more than I code.
              <br />
              <br />
              My pronouns are <i><b>Jack of All Trades / Master of none</b></i>
            </p>
  */}
            <p className="home-about-body">
              I like to code in back-end, For example
              <i>
                <b className="purple"> JavaScript , TypeScript. </b>
              </i>
              <br />
              <br />
              I want to internship in back-end developer.
              <br />
              <br />
              <a href={pdf} className="btn " style={{ backgroundColor: '#c770f0' }} textDecoration="none">This is my resume.</a>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/oak072544"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/*
              <li className="social-icons">
                <a
                  href="https://twitter.com/sukrutrahane"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
*/}
              <li className="social-icons">
                <a
                  href="https://web.facebook.com/Okeno.j.s"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/okeno0v0/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
