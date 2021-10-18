import React from "react";
import { Link } from "react-router-dom";
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



function ContactNavbar() {

const [collapseOpen, setCollapseOpen] = React.useState(false);


  return (
    <>


      <Navbar className={"fixed-top "} color="info">
        <Container>
          <div className="navbar-translate">

            <a href="http://localhost:3000/#/">
              <img
                src={LogoWhite}
                width="125px"
              ></img>
            </a>
            <div>
              {collapseOpen?
                <button
                  className="navbar-toggler navbar-toggler-right"
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
              :
              <div>
                <Button
                className="arc-ride-button"
                disabled={true}
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

              <div style={{position: "absolute", top: "0", right: "0", backgroundColor: "rgb(25,26,25)", width: "300px", height: "700px", zIndex: "0", opacity: "1", transition: "width 0.5s, height 0.5s, opacity 0.5s 0.5s"}}>

                <span id="x" style={{position: "absolute", top: "0", left: "275px", fontSize: "20px"}} onClick={() => {setCollapseOpen(!collapseOpen);}}>X</span>


                <div style={{margin: "10px", marginLeft: "20px", marginTop: "100px", fontSize: "20px"}}>

                  <dl>
                    <dt style={{marginBottom: "10px"}}>
                      <a href="http://localhost:3000/#/vehicles" style={{color: "white"}}>
                        Our vehicles
                      </a>
                    </dt>
                    <dt style={{marginBottom: "10px"}}>
                      <a href="http://localhost:3000/#/services" style={{color: "white"}}>
                        Our services
                      </a>
                    </dt>
                    <dt style={{marginBottom: "10px"}}>
                      <a href="http://localhost:3000/#/charging" style={{color: "white"}}>
                        Charging stations
                      </a>
                    </dt>
                    <dt style={{marginBottom: "10px"}}>
                      <a href="http://localhost:3000/#/app" style={{color: "white"}}>
                        App overview
                      </a>
                    </dt>
                    <dt style={{marginBottom: "10px"}}>
                      <a href="http://localhost:3000/#/demo" style={{color: "white"}}>
                        Book a demo
                      </a>
                    </dt>
                    <dt style={{marginBottom: "10px"}}>
                      <a href="http://localhost:3000/#/driver-sign-up" style={{color: "white"}}>
                        Sign up to be a driver
                      </a>
                    </dt>
                    <dt style={{marginBottom: "10px"}}>
                      <a href="" style={{color: "white"}}>
                        -
                      </a>
                    </dt>
                    <dt style={{marginBottom: "10px"}}>
                      <a href="http://localhost:3000/#/about" style={{color: "white"}}>
                        About us
                      </a>
                    </dt>
                    <dt style={{marginBottom: "10px"}}>
                      <a href="http://localhost:3000/#/team" style={{color: "white"}}>
                        Our team
                      </a>
                    </dt>
                    <dt style={{marginBottom: "10px"}}>
                      <a href="http://localhost:3000/#/partners" style={{color: "white"}}>
                        Our partners
                      </a>
                    </dt>
                    <dt style={{marginBottom: "10px"}}>
                      <a href="http://localhost:3000/#/contact" style={{color: "white"}}>
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

export default ContactNavbar;
