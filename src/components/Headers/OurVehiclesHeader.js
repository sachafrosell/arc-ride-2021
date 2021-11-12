import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function OurVehiclesHeader() {

  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
            "url(" + require("assets/img/vehicles/S82A7746.jpg").default + ")",
          }}
        ></div>

      </div>
    </>
  );
}

export default OurVehiclesHeader;
