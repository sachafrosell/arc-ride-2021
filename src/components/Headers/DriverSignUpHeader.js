/*eslint-disable*/
import React from "react";
import { isMobile } from 'react-device-detect';

// reactstrap components
import { Container, Button } from "reactstrap";

function DriverSignUpHeader() {

  React.useEffect(() => {

    function pageLoaded() {

      let el = document.querySelector(".content-center");
      setTimeout(() => {
        el.classList.add('fade-in');

      },1500)

    }
    window.addEventListener('load', pageLoaded())
  }, []);

  let pageHeader = React.createRef();

  return (
    <>
      <div className="page-header clear-filter" >
        <div
          className="page-header-image"
          style={{
            backgroundImage:
            "url(" + require("assets/img/vehicles/S82A7598.jpg").default + ")",
            filter: "brightness(50%)"
          }}
          ref={pageHeader}
        ></div>
        <Container>
        {!isMobile ?
          <div className="content-center" id="headerSwitch">
            <h1 className="title">DRIVE ELECTRIC</h1>
            <h3>
              Sign up here to become a driver
            </h3>
            <Button className="arc-ride-button" disabled="true">
              Download the App
            </Button>
          </div>
          :
          <div className="content-center" id="headerSwitch">
            <h1 style={{fontSize: "50px"}} className="title">DRIVE ELECTRIC</h1>
            <h3 style={{fontSize: "20px"}}>
              Sign up here to become a driver
            </h3>
            <Button className="arc-ride-button" disabled="true">
              Download the App
            </Button>
          </div>
        }


        </Container>


      </div>
    </>
  );
}

export default DriverSignUpHeader;
