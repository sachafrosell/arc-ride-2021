import React from "react";

// reactstrap components



function ChargingHeader() {

  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
            "url(" + require("assets/img/vehicles/S82A5233.jpg").default + ")",

          }}
        ></div>

      </div>
    </>
  );
}

export default ChargingHeader;
