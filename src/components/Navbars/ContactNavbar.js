import React from "react";
import { Link } from "react-router-dom";
import { isMobile } from 'react-device-detect';
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

import LogoWhite from "../../assets/logos/arc_ride_white.png"
import LogoBlack from "../../assets/logos/arc_ride_black.png"

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}


function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("");
  const [collapseOpen, setCollapseOpen] = React.useState(false);


  const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());
  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    function handleClick(event) {

      if (event.target.id !== "navMenu") {
        setCollapseOpen(false)
      }
    }

    window.addEventListener('click', handleClick);

    return () => window.removeEventListener('click', handleClick);
  }, []);






  return (
    <>


      <Navbar className={"fixed-top " + navbarColor} color="info">
        <Container>
          <div className="navbar-translate">

            <a href="arcrideglobal.com/#/">
              <img
                src={LogoWhite}
                width="125px"
              ></img>
            </a>
            <div>
              {collapseOpen?
                <button
                  className="navbar-toggler navbar-toggler-right"
                  id="navMenu"
                  style={{
                    position: "absolute",
                    top: "40px",
                    right: "-100px",
                    zIndex: "10000px"

                  }}
                  onClick={() => {
                    setCollapseOpen(!collapseOpen);
                  }}
                  aria-expanded={collapseOpen}
                  type="button"
                >
                  <span className="navbar-toggler-bar top-bar"></span>
                  <span className="navbar-toggler-bar middle-bar"></span>
                  <span className="navbar-toggler-bar bottom-bar"></span>
                </button>
              : windowDimensions.width > 500?
              <div>
                <Button
                className="arc-ride-button"
                disabled={true}
                id="navMenu"
                >
                  Download the App
                </Button>
                <button
                  className="navbar-toggler navbar-toggler-right"
                  style={{
                    marginLeft: "20px"
                  }}
                  onClick={() => {
                    setCollapseOpen(!collapseOpen);
                  }}
                  aria-expanded={collapseOpen}
                  type="button"
                >
                  <span className="navbar-toggler-bar top-bar"></span>
                  <span className="navbar-toggler-bar middle-bar"></span>
                  <span className="navbar-toggler-bar bottom-bar"></span>
                </button>

              </div>
              :  isMobile ?
              <div>


                <button
                  className="navbar-toggler navbar-toggler-right"
                  id="navMenu"

                  onClick={() => {
                    setCollapseOpen(!collapseOpen);
                  }}
                  aria-expanded={collapseOpen}
                  type="button"
                >
                  <span className="navbar-toggler-bar top-bar"></span>
                  <span className="navbar-toggler-bar middle-bar"></span>
                  <span className="navbar-toggler-bar bottom-bar"></span>
                </button>

              </div>
              : ""

              }


            </div>

          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >

          </Collapse>
          {collapseOpen ? (
            <>
              <div style={{position: "absolute", top:"0", left: "0",backgroundColor: "black", width: "10000000000px", height: "1000000000px", opacity: "70%"}}>

              </div>

              <div id="navMenu" style={{position: "absolute", top: "0", right: "0", backgroundColor: "rgb(25,26,25)", width: "300px", height: "700px", zIndex: "0", opacity: "1", transition: "width 0.5s, height 0.5s, opacity 0.5s 0.5s"}}>

                <span id="x" style={{position: "absolute", top: "0", left: "275px", fontSize: "20px"}} onClick={() => {setCollapseOpen(!collapseOpen);}}>X</span>


                <div id="navMenu" style={{margin: "10px", marginLeft: "20px", marginTop: "100px", fontSize: "20px"}}>

                  <dl id="navMenu" >
                    <dt id="navMenu" style={{marginBottom: "10px"}}>
                      <a id="navMenu" href="arcrideglobal.com/#/vehicles" style={{color: "white"}}>
                        Our vehicles
                      </a>
                    </dt>
                    <dt id="navMenu" style={{marginBottom: "10px"}}>
                      <a id="navMenu" href="arcrideglobal.com/#/services" style={{color: "white"}}>
                        Our services
                      </a>
                    </dt>
                    <dt id="navMenu" style={{marginBottom: "10px"}}>
                      <a id="navMenu" href="arcrideglobal.com/#/charging" style={{color: "white"}}>
                        Charging stations
                      </a>
                    </dt>
                    <dt id="navMenu" style={{marginBottom: "10px"}}>
                      <a id="navMenu" href="arcrideglobal.com/#/app" style={{color: "white"}}>
                        App overview
                      </a>
                    </dt>
                    <dt id="navMenu" style={{marginBottom: "10px"}}>
                      <a id="navMenu" href="arcrideglobal.com/#/demo" style={{color: "white"}}>
                        Book a demo
                      </a>
                    </dt>
                    <dt id="navMenu" style={{marginBottom: "10px"}}>
                      <a id="navMenu" href="arcrideglobal.com/#/driver-sign-up" style={{color: "white"}}>
                        Sign up to be a driver
                      </a>
                    </dt>
                    <dt id="navMenu" style={{marginBottom: "10px"}}>
                      <p style={{color: "white"}} id="navMenu" >
                        -
                      </p>
                    </dt>
                    <dt id="navMenu" style={{marginBottom: "10px"}}>
                      <a id="navMenu" href="arcrideglobal.com/#/about" style={{color: "white"}}>
                        About us
                      </a>
                    </dt>
                    <dt id="navMenu" style={{marginBottom: "10px"}}>
                      <a id="navMenu" href="arcrideglobal.com/#/team" style={{color: "white"}}>
                        Our team
                      </a>
                    </dt>
                    <dt id="navMenu" style={{marginBottom: "10px"}}>
                      <a id="navMenu" href="arcrideglobal.com/#/partners" style={{color: "white"}}>
                        Our partners
                      </a>
                    </dt>
                    <dt id="navMenu" style={{marginBottom: "10px"}}>
                      <a id="navMenu" href="arcrideglobal.com/#/contact" style={{color: "white"}}>
                        Contact us
                      </a>
                    </dt>
                  </dl>
                </div>
              </div>
            </>

          ) : null}
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
