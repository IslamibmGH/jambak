import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import stars from "../assets/stars.png";
import { BsPlayCircleFill } from "react-icons/bs";
import phoneAsset1 from "../assets/5Asset 1.png";
import checkMark from "../assets/checkMark.png";
import screens from "../assets/screensCropped.png";
import Fade from "react-reveal/Fade";

const AppFeatures1 = () => {
  return (
    <Container id="features" fluid>
      <Container className="d-none d-md-block" fluid>
        <Row style={{ margin: "5%" }}>
          <Col sm={6}>
            <Fade left>
              <div style={{ width: "30vw" }}>
                <img src={phoneAsset1} alt="" width="100%" />
              </div>
            </Fade>
          </Col>
          <Col sm={6} className="flex-column" style={{ alignSelf: "center" }}>
            <div style={{ ...largeTitle }}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div style={{ ...largeSubtitle }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                <br />
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            {/* Check Marks */}
            <Row>
              <Col>
                <Row>
                  <Col xs={2}>
                    <div style={{ width: "3vw" }}>
                      <img src={checkMark} alt="" width="100%" style={{}} />
                    </div>
                  </Col>
                  <Col className="flex-column" style={{ alignSelf: "center" }}>
                    <p
                      style={{
                        fontSize: "1.3vw",
                        fontWeight: "500",
                        padding: "0.5vw",
                      }}
                    >
                      Unlimited Features
                    </p>
                  </Col>
                </Row>
                <Row style={{ marginTop: "3vh" }}>
                  <Col xs={2}>
                    <div style={{ width: "3vw" }}>
                      <img src={checkMark} alt="" width="100%" style={{}} />
                    </div>
                  </Col>
                  <Col className="flex-column" style={{ alignSelf: "center" }}>
                    <p
                      style={{
                        fontSize: "1.3vw",
                        fontWeight: "500",
                        padding: "0.5vw",
                      }}
                    >
                      Unlimited Features
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col xs={2}>
                    <div style={{ width: "3vw" }}>
                      <img src={checkMark} alt="" width="100%" style={{}} />
                    </div>
                  </Col>
                  <Col className="flex-column" style={{ alignSelf: "center" }}>
                    <p
                      style={{
                        fontSize: "1.3vw",
                        fontWeight: "500",
                        padding: "0.5vw",
                      }}
                    >
                      Unlimited Features
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {/*
       Smaller BreakPoint 
       */}
      <Container className="d-block d-md-none" style={{}} fluid>
        <Row style={{ marginTop: "20%" }}>
          <Col style={{}}>
            <Fade delay={250} duration={2000}>
              <div style={{ ...smallTitle }}>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div style={{ ...smallSubtitle }}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>

              {/* Check Marks */}
              <Row style={{}}>
                <Col style={{}}>
                  <p
                    style={{
                      fontSize: "100%",
                      fontWeight: "500",
                      textAlign: "left",
                      paddingLeft: "2%",
                    }}
                  >
                    <li> Unlimited Features </li>
                  </p>
                </Col>
              </Row>
            </Fade>
            <Col
              style={{
                textAlign: "-webkit-center",
              }}
            >
              <div style={{ width: "100%" }}>
                <img src={screens} alt="" width="100%" />
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

const largeTitle = {
  background: "transparent",
  fontFamily: "Nunito",
  fontWeight: "800",
  fontSize: "3vw",
};

const largeSubtitle = {
  marginTop: "7vh",
  fontSize: "1.1vw",
  fontWeight: "400",
  color: "grey",
};

const smallTitle = {
  marginTop: "1vh",
  background: "transparent",
  fontFamily: "Roboto",
  fontWeight: "700",
  fontSize: "150%",
  textAlign: "left",
  paddingLeft: "2%",
};

const smallSubtitle = {
  fontSize: "100%",
  fontWeight: "400",
  textAlign: "left",
  paddingBottom: "2%",
  paddingLeft: "2%",
};

export default AppFeatures1;
