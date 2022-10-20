import React from "react";

import Carousel from "react-elastic-carousel";
import Item from "./CarouselItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Icon from "../assets/Group 6.png";
import Fade from "react-reveal/Fade";

const CarouselSection2 = () => {
  const subtitles = [
    "rem ctetur sed doeiusmod tempor incididunt ut labore",
    "Lorpsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore",
    "Lo ipsum dolor sit am, sed doeiusmod tempoecscing elit, sed doeiusmod tempor incididunt ut labore",
    "Loret, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore",
    "Lm ipsum dolor sit amet, condipiscing elit, sed dmpor incididunt ut labore",
    "Lorem ipsum dolor sctetur adipiscing elit, sed doeiusmod ididunt ut labore",
    "ipor sctetur adipig elit, sed dont ut labore",
    "Lorem ipsumtur adipiscng elit, sed doeiusmodore",
  ];

  return (
    <div id="clients" style={{ paddingTop: "10%", paddingBottom: "10%" }}>
      <Container>
        <Row>
          <div className="d-none d-md-block">
            <Col>
              <div style={{ ...largeTitle, textAlign: "left", width: "50%" }}>
                <p>Our Happy Clients</p>
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
                <p>Our Happy Clients</p>
              </div>
              <div
                style={{ ...smallSubtitle, textAlign: "center", width: "100%" }}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </Col>
          </div>

          <div className="App" style={{ margin: "5% 0" }}>
            <Fade bottom>
              <Carousel
                breakPoints={breakPoints}
                disableArrowsOnEnd={false}
                showArrows={false}
              >
                <Item
                  title="Great Quality"
                  subtitle={subtitles[0]}
                  img={Icon}
                />
                <Item
                  title="Amazing product"
                  subtitle={subtitles[1]}
                  img={Icon}
                />
                <Item
                  title="Clean & modern"
                  subtitle={subtitles[2]}
                  img={Icon}
                />
                <Item
                  title="Incredible quality"
                  subtitle={subtitles[3]}
                  img={Icon}
                />
                <Item
                  title="Assured quality"
                  subtitle={subtitles[4]}
                  img={Icon}
                />
                <Item
                  title="Amazing reviews"
                  subtitle={subtitles[5]}
                  img={Icon}
                />
                <Item
                  title="Many benefits"
                  subtitle={subtitles[6]}
                  img={Icon}
                />
                <Item title="Unmatched" subtitle={subtitles[7]} img={Icon} />
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
  { width: 768, itemsToShow: 4 },
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


export default CarouselSection2;
