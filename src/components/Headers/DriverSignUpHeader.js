/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Button } from "reactstrap";

function DriverSignUpHeader() {
  let pageHeader = React.createRef();

  return (
    <>
      <div className="page-header clear-filter" >
        <div
          className="page-header-image"
          style={{
            backgroundImage:
            "url(" + require("assets/img/S82A7598.jpg").default + ")",

          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <h1 className="title">DRIVE ELECTRIC</h1>
            <h3>
              Sign up here to become a driver
            </h3>
            <Button className="arc-ride-button" disabled="true">
              Download the App
            </Button>
          </div>

        </Container>


      </div>
    </>
  );
}

export default DriverSignUpHeader;
