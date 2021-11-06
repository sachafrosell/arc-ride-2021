/*eslint-disable*/
import React from "react";
import { isMobile } from 'react-device-detect';

// reactstrap components
import { Container } from "reactstrap";

function OurServicesHeader() {
  let pageHeader = React.createRef();

  return (
    <>
    {!isMobile ?
      <div className="page-header clear-filter" >

        <div
          className="page-header-image"
          style={{
            backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + require("assets/img/S82A7663.jpg").default + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <h1 className="title">READY TO RIDE?</h1>
            <h3>
              Choose the service that best suits you and we’ll do the rest...
            </h3>
          </div>

        </Container>
      </div>
      :
      <div className="page-header clear-filter" >

        <div
          className="page-header-image"
          style={{
            backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + require("assets/img/S82A7663.jpg").default + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <h1 className="title">READY TO RIDE?</h1>
            <h5 style={{padding: "20px"}}>
              Choose the service that best suits you and we’ll do the rest...
            </h5>
          </div>

        </Container>
      </div>
    }

    </>
  );
}

export default OurServicesHeader;
