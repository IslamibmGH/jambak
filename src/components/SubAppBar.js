import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import LogoImg from "../assets/logo.png";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsArrowUp } from "react-icons/bs";


const SubAppBar = () => {

  const [hoverColor, setHoverColor] = useState("#8D1B3D")
  const [visible, setVisible] = useState(false);

  const changeColor = (state) => {

    if (state === "hovered") {
      setHoverColor("white")
    } else {
      setHoverColor("#8D1B3D")
    }
  }

  const toggleVisible = () => {

    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <Row className="d-none d-lg-block" style={{ backgroundColor: "#FBFBFB" }}>
        <Col>
          <Navbar >
            <Container fluid>

              <Nav>
                <Navbar.Brand
                  href="#home"
                  style={{ margin: "8vh 5vw", width: "12vw" }}
                >
                  <img
                    src={LogoImg}
                    alt=""
                    width="100%"
                  />
                </Navbar.Brand>
              </Nav>
              <Nav>
                <Nav.Link style={{ ...linkStyle }} href="#home">
                  Why Jambak
                </Nav.Link>
                <Nav.Link style={{ ...linkStyle }} href="#features">
                  Features
                </Nav.Link>
                <Nav.Link style={{ ...linkStyle }} href="#screens">
                  Screens
                </Nav.Link>
                <Nav.Link style={{ ...linkStyle }} href="#clients">
                  Happy Clients
                </Nav.Link>
              </Nav>
              <Nav>
                {
                  visible ? 
                  <Button className="goUpBtn" id="goUpBtn"
                  onClick={() => window.scrollTo(0, 0)}
                  onMouseEnter={() => changeColor("hovered")}
                  onMouseLeave={() => changeColor("unhovered")}
                  variant="outline"
                >
                  <BsArrowUp
                    style={{
                      transform: "scale(1.5)"
                    }}
                    color={hoverColor}
                  />
                </Button>
                  : null
                }
                
              </Nav>
              {/* </Navbar.Collapse> */}
            </Container>
          </Navbar>
        </Col>
      </Row>
      {/* Small Navbar */}
      <Row className="d-block d-lg-none" style={{ backgroundColor: "#FBFBFB" }}>
        <Col>
          <Navbar bg="transparent">
            <Container fluid>
              <Nav className="me-auto" style={{margin: "5% 0"}}>
                <Navbar.Brand
                  href="#home"
                  style={{ margin: "0% 5%", width: "75%" }}
                >
                  <img src={LogoImg} alt="" width="100%" />
                </Navbar.Brand>
              </Nav>
              <Nav>{
                  visible ? 
                  <Button className="smGoUpBtn" id="goUpBtn"
                  onClick={() => window.scrollTo(0, 0)}
                  onMouseEnter={() => changeColor("hovered")}
                  onTouchEnd={() => changeColor("unhovered")}
                  onMouseLeave={() => changeColor("unhovered")}
                  variant="outline"

                >
                  <BsArrowUp
                    style={{
                      transform: "scale(1.5)"
                    }}
                    color={hoverColor}
                  />
                </Button>
                  : null
                }
              </Nav>
              {/* </Navbar.Collapse> */}
            </Container>
          </Navbar>
        </Col>
      </Row>
    </>
  );
};

const linkStyle = {
  paddingRight: "5vh",
  fontSize: "2vh",
  whiteSpace: "no-wrap",
  fontWeight: "700",
  color: "black",
};

const largeDownloadBtn = {
  padding: "2vh 5vh",
  margin: "-1vh 3vh",
  whiteSpace: "nowrap",
  borderRadius: "500px",
  borderWidth: "1vh",
  background: "#8D1B3D",
  borderColor: "transparent",
  color: "white",
};


export default SubAppBar;

