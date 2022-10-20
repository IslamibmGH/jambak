import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import LogoImg from "../assets/logo.png";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AppBar = () => {
  const [navbar, setNavbar] = useState(false);
  const [smNavbar, setSmNavbar] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [listening, setListening] = useState(false)

  const setNav = () => {

    if (window.scrollY >= window.document.getElementById("navigationBar").clientHeight) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }

    if (window.scrollY >= window.document.getElementById("smNavigationBar").clientHeight || isExpanded) {
      setSmNavbar(true)
    } else {
      setSmNavbar(false)
    }
  }

  const expand = toggleEvent => {
    setIsExpanded(toggleEvent);
  }

  useEffect(() => {
    setNav()
  }, [isExpanded])

  useEffect(() => {
    if (!listening) {
      window.addEventListener('scroll', setNav)
      setListening(false)
    }
  }, [])



  return (
    <>
      <Row className="d-none d-lg-block">
        <Col >
          <Navbar className={navbar ? "navigation active" : "navigation"} id="navigationBar" expand="lg" >
            <Container fluid>
              <Navbar.Brand
                href="#home"
                style={{ margin: "1rem 2rem", width: "12vw" }}
              >
                <img
                  src={LogoImg}
                  alt=""
                  width="100%"
                // style={{ marginRight: "5vw" }}
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse style={{ width: "2px" }} id="basic-navbar-nav">
                <Nav className="me-auto"></Nav>
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
                  <Button style={{ ...largeDownloadBtn }} href="#download">
                    Download App
                  </Button>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
      {/* Small Navbar */}
      <Row className="d-block d-lg-none">
        <Col>
          <Navbar onToggle={expand} expanded={isExpanded} className={smNavbar ? "navigation active" : "navigation"} id="smNavigationBar" expand="lg">
            <Container fluid>
              <Navbar.Brand
                href="#home"
                style={{ margin: "1rem 0.2rem", width: "40%" }}
              >
                <img src={LogoImg} alt="" width="100%" />
              </Navbar.Brand>
              <Navbar.Toggle
                style={{ transform: "scale(0.7)" }}
                aria-controls="basic-navbar-nav"
              />
              <Navbar.Collapse id="basic-navbar-nav" >

                <Nav className="me-auto"></Nav>
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
                  <Nav.Link style={{ ...linkStyle }} href="#download">
                    Download App
                  </Nav.Link>
                </Nav>

              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </>
  );
};

const linkStyle = {
  paddingTop: "1rem",
  paddingRight: "5vw",
  fontSize: "1rem",
  whiteSpace: "no-wrap",
  fontWeight: "700",
  color: "black",

};

const largeDownloadBtn = {
  fontSize: "1vw",
  fontWeight: "600",
  padding: "10px 20px",
  whiteSpace: "nowrap",
  borderRadius: "2vh",
  borderWidth: "0.5vh",
  background: "#8D1B3D",
  borderColor: "transparent",
  color: "white",
};

export default AppBar;

