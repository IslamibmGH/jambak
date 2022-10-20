import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CarouselItem = ({ title, subtitle, img }) => {
  return (
    <Container>
      <div
        style={{
          //   borderStyle: "solid",
          //   borderWidth: "1px",
          //   borderColor: "rgba(128, 128, 128, 0.2)",
          borderRadius: "10px",
          padding: "10% 5%",
          margin: "5%",
        }}
      >
        <Row>
          <div>
            <img src={img} alt="" style={{ paddingBottom: "10%" }} />
          </div>
        </Row>
        <Row>
          <div style={{ ...largeTitle }}>
            <p>{title}</p>
          </div>
        </Row>
        <Row>
          <div style={{ ...largeSubtitle }}>
            <p>{subtitle}</p>
          </div>
        </Row>
      </div>
    </Container>
  );
};

const largeTitle = {
  background: "transparent",
  fontFamily: "Nunito",
  fontWeight: "800",
  fontSize: "150%",
};

const largeSubtitle = {
  fontSize: "100%",
  fontWeight: "400",
  color: "grey",
};

export default CarouselItem;
