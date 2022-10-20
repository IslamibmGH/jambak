import React from "react";

import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import Item from "./CarouselItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Icon from "../assets/Group 5.png";
import Rectangle from "../assets/Rectangle.png";
import Fade from "react-reveal/Fade";

const CarouselSection1 = () => {
  const lorem = "Lorem ipsum dolor sit amet consectetur";

  return (
    <div
      id="home"
      style={{
        backgroundImage: `url(${Rectangle})`,
        paddingTop: "10%",
        paddingBottom: "10%",
      }}
    >
      <Container>
        <Row>
          <div className="d-none d-md-block">
            <Col>
              <div style={{ ...largeTitle, textAlign: "left", width: "50%" }}>
                <p>Why Jambak</p>
              </div>
              <div
                style={{ ...largeSubtitle, textAlign: "left", width: "50%" }}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </Col>
          </div>
          {/* Small BreakPoint */}
          <div
            className="d-block d-md-none"
            style={{ paddingTop: "20%", paddingBottom: "20%" }}
          >
            <Col>
              <div
                style={{ ...smallTitle, textAlign: "center", width: "100%" }}
              >
                <p>Why Jambak</p>
              </div>
              <Fade delay={250} duration={2000}>
                <div
                  style={{
                    ...smallSubtitle,
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </Fade>
            </Col>
          </div>

          <div className="App" style={{ margin: "5% 0" }}>
            <Fade bottom>
              <Carousel breakPoints={breakPoints} disableArrowsOnEnd={false}>
                <Item title="Benefit One" subtitle={lorem} img={Icon} />
                <Item title="Benefit Two" subtitle={lorem} img={Icon} />
                <Item title="Benefit Three" subtitle={lorem} img={Icon} />
                <Item title="Benefit Four" subtitle={lorem} img={Icon} />
                <Item title="Benefit Five" subtitle={lorem} img={Icon} />
                <Item title="Benefit Six" subtitle={lorem} img={Icon} />
              </Carousel>
            </Fade>
          </div>
        </Row>
      </Container>
    </div>
  );
};

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
];

const largeTitle = {
  background: "transparent",
  fontFamily: "Nunito",
  fontWeight: "800",
  fontSize: "250%",
};

const largeSubtitle = {
  marginTop: "2%",
  fontSize: "110%",
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

export default CarouselSection1;
