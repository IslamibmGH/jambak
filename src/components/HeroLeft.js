import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import stars from "../assets/stars.png";
import HeroImg from "../assets/mobileHero.png";
import { BsPlayCircleFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";

const HeroLeft = () => {
  return (
    <Container fluid>
      <div style={{padding: "5%"}}> 
      <Fade delay={250} duration={2000}>
        <Row className="d-none d-sm-block" style={{ marginTop: "8%" }}>
          <Col sm={6} style={{ paddingLeft: "10%" }}>
            <div style={{ maxWidth: "17%", marginBottom: "2%" }}>
              <img src={stars} alt="" style={{ width: "100%" }} />
            </div>
            <div style={{ ...largeTitle }}>
              <p>Find Events/Activities or even a place to go</p>
            </div>
            <div style={{ ...largeSubtitle }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                <br />
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            {/*
           Large Buttons
       */}
            <Row style={{ marginBottom: "20%", marginTop: "7%" }}>
              <Col className="d-flex ">
                <Button
                  size="lg"
                  style={{ marginRight: "5%", ...largeDownloadBtn }}
                >
                  Download App
                </Button>
                <Button style={{ marginRight: "5%", ...largeWatchBtn }}>
                  <BsPlayCircleFill
                    style={{
                      transform: "scale(2)",
                      marginRight: "15%",
                      color: "#8D1B3D",
                      backgroundColor: "white",
                      borderRadius: "100px",
                    }}
                  />
                  Watch Video
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Fade>
      </div>
      {/*
       Smaller BreakPoint 
       */}

      <Container>
      <div style={{padding: "5%"}}> 
        <Fade delay={250} duration={2000}>
          <Row className="d-block d-sm-none" style={{ marginTop: "1%" }}>
            <Col style={{ textAlign: "-webkit-center", paddingLeft: "7%" }}>
              <div
                style={{
                  maxWidth: "30%",
                  marginBottom: "10%",
                  marginTop: "10%",
                }}
              >
                <img src={stars} alt="" style={{ width: "100%" }} />
              </div>
              <div style={{ ...smallTitle }}>
                <p>Find Events/Activities or even a place to go</p>
              </div>
              <div style={{ ...smallSubtitle }}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
              {/*
           Small Buttons
            */}

              <Row style={{ marginBottom: "20%", marginTop: "20%" }}>
                <Col style={{ textAlign: "-webkit-center" }}>
                  <div style={{ alignContent: "center" }}>
                    <Button
                      size="sm"
                      style={{
                        marginRight: "5%",
                        ...smallDownloadBtn,
                        marginBottom: "5%",
                      }}
                    >
                      Download App
                    </Button>
                    <Button
                      style={{
                        marginRight: "5%",
                        ...smallWatchBtn,
                        marginBottom: "5%",
                      }}
                    >
                      <BsPlayCircleFill
                        style={{
                          transform: "scale(2)",
                          marginRight: "15%",
                          color: "#8D1B3D",
                          backgroundColor: "white",
                          borderRadius: "100px",
                        }}
                      />
                      Watch Video
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Fade>
        </div>
      </Container>
    </Container>
  );
};

const largeTitle = {
  background: "transparent",
  fontFamily: "Roboto",
  fontWeight: "700",
  fontSize: "3.8vw",
};

const largeSubtitle = {
  //paddingTop: "5px",
  fontSize: "1.2vw",
  fontWeight: "400",
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

const largeDownloadBtn = {
  Width: "50%",
  height: "100%",
  fontSize: "1.3vw",
  padding: "3% 8%",
  whiteSpace: "nowrap",
  borderRadius: "3vh",
  borderWidth: "0.5vh",
  background: "#8D1B3D",
  borderColor: "transparent",
};

const largeWatchBtn = {
  Width: "50%",
  height: "100%",
  fontSize: "1.3vw",
  padding: "3% 8%",
  whiteSpace: "nowrap",
  borderRadius: "3vh",
  borderWidth: "0.5vh",
  background: "transparent",
  borderColor: "#8D1B3D",
  color: "black",
};

const smallDownloadBtn = {
  //  Width: "20px",
  height: "100%",
  fontSize: "100%",
  padding: "3% 10%",
  whiteSpace: "nowrap",
  borderRadius: "3vh",
  borderWidth: "0.5vh",
  background: "#8D1B3D",
  borderColor: "transparent",
};

const smallWatchBtn = {
  // Width: "50%",
  height: "100%",
  fontSize: "100%",
  padding: "3% 10%",
  whiteSpace: "nowrap",
  borderRadius: "3vh",
  borderWidth: "0.5vh",
  background: "transparent",
  borderColor: "#8D1B3D",
  color: "black",
};

export default HeroLeft;
