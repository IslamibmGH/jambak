import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import screens from "../assets/jambakScreens.png";
import screen12 from "../assets/screen12.png";
import screen34 from "../assets/screen34.png";
import Fade from "react-reveal/Fade";

const ScreenSection = () => {
  return (
    <Container
      id="screens"
      fluid
      style={{
        paddingRight: "0px",
        backgroundColor: "#F8FBFD",
      }}
    >
      <Container
        fluid
        className="d-none d-md-block"
        style={{
          paddingTop: "15vh",
        }}
      >
        <Row style={{ textAlign: "-webkit-center" }}>
          <Col>
            <p style={{ ...largeTitle }}>Jambak Screens</p>
            <p style={{ ...largeSubtitle }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "7vh", paddingBottom: "15vh" }}>
          <Col style={{ paddingRight: "0px" }}>
            <Fade bottom>
              <div>
                <img src={screens} alt="" width="100%" />
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
      {/* Small BreakPoint */}
      <Container
        className="d-block d-md-none"
        style={{
          textAlign: "-webkit-center",
          paddingBottom: "5%",
          paddingTop: "20%",
        }}
        fluid
      >
        <Row>
          <Col>
            <p style={{ ...smallTitle }}>Jambak Screens</p>
            <Fade delay={250} duration={2000}>
              <p style={{ ...smallSubtitle }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Fade>
          </Col>
        </Row>
        <Row style={{ paddingTop: "5vh" }}>
          <Col>
            <div style={{ width: "100%" }}>
              <img src={screen12} alt="" width="100%" />
            </div>
          </Col>
        </Row>
        <Row style={{ paddingBottom: "20%" }}>
          <Col>
            <div style={{ width: "100%" }}>
              <img src={screen34} alt="" width="100%" />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

const largeTitle = {
  background: "transparent",
  fontFamily: "Roboto",
  fontWeight: "800",
  fontSize: "3vw",
};

const largeSubtitle = {
  marginTop: "5vh",
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
  textAlign: "center",
};

const smallSubtitle = {
  fontSize: "100%",
  fontWeight: "400",
  textAlign: "center",
};

export default ScreenSection;
