import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import subHero from "../assets/5Asset 9 10 (1).png";
import apple from "../assets/Group 4 (1).png";
import android from "../assets/Group 3 (1).png";
import subHeroBg from "../assets/subHeroBg.png";
import Fade from "react-reveal/Fade";

const SubHero = () => {
  return (
    <Container
      id="download"
      fluid
      style={{ backgroundImage: `url(${subHeroBg})` }}
    >
      <Container className="d-none d-sm-block" fluid>
        <Row style={{ paddingTop: "10%" }}>
          <Col style={{ paddingLeft: "10%" }}>
            <div style={{ ...largeTitle }}>
              <p>Download The App From Various Platforms</p>
            </div>
            <div style={{ ...largeSubtitle }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
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
                  <img src={apple} alt="" width={"100%"} />
                </Button>
                <Button
                  size="lg"
                  style={{
                    ...largeDownloadBtn,
                    padding: "0.5vh 0.50vw",
                  }}
                >
                  <img src={android} alt="" width={"100%"} />
                </Button>
              </Col>
            </Row>
          </Col>
          <Col sm={7}>
            <Fade right>
              <div
                style={{
                  paddingRight: "10vw",
                  paddingBttom: "10vh",
                  width: "100%",
                }}
              >
                <img
                  src={subHero}
                  alt=""
                  style={{
                    width: "100%",
                  }}
                />
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
      {/*
       Smaller BreakPoint 
       */}
      <Container
        className="d-block d-sm-none"
        style={{ paddingBottom: "20%" }}
        fluid
      >
        <Row style={{ paddingTop: "20%", textAlign: "-webkit-center" }}>
          <Col style={{}}>
            <Fade delay={250} duration={2000}>
              <div style={{ ...smallTitle }}>
                <p>Find Events/Activities or even a place to go</p>
              </div>
              <div style={{ ...smallSubtitle }}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam purus nisi, faucibus pretium urna eu.
                </p>
              </div>
            </Fade>
            {/*
           Small Buttons
       */}
            <Row style={{ textAlign: "-webkit-center", marginTop: "20%" }}>
              <Col sm={6}>
                <Button
                  size="lg"
                  style={{
                    marginBottom: "5%",
                    ...largeDownloadBtn2,
                  }}
                >
                  <img src={apple} alt="" width={"100%"} />
                </Button>
              </Col>
              <Col sm={6}>
                <Button
                  size="lg"
                  style={{
                    ...largeDownloadBtn2,
                  }}
                >
                  <img src={android} alt="" width={"100%"} />
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

const largeTitle = {
  background: "transparent",
  fontFamily: "Nunito",
  fontWeight: "700",
  fontSize: "180%",
};

const largeSubtitle = {
  paddingTop: "10px",
  fontSize: "100%",
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
  padding: "0 10%",
};

const smallSubtitle = {
  fontSize: "100%",
  fontWeight: "400",
  textAlign: "center",
  paddingBottom: "10%",
  padding: " 0 5%",
};

const largeDownloadBtn = {
  whiteSpace: "nowrap",
  borderRadius: "2vh",
  background: "black",
  borderColor: "transparent",
};
const largeDownloadBtn2 = {
  whiteSpace: "nowrap",
  borderRadius: "2vh",
  background: "black",
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
  padding: "0.2vh 0.1vw",
  whiteSpace: "nowrap",
  borderRadius: "1vh",
  background: "black",
  borderColor: "transparent",
};

const smallWatchBtn = {
  Width: "50%",
  height: "100%",
  fontSize: "1.3vw",
  padding: "3% 10%",
  whiteSpace: "nowrap",
  borderRadius: "3vh",
  borderWidth: "0.5vh",
  background: "transparent",
  borderColor: "#8D1B3D",
  color: "black",
};

export default SubHero;
