import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";



function OurPartnersHeader() {

  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
            "url(" + require("assets/img/vehicles/S82A7669.jpg").default + ")",
            backgroundPosition: "0% -200px"
          }}
        ></div>

      </div>
    </>
  );
}

export default OurPartnersHeader;
