import React from "react";

// reactstrap components



function BookingHeader() {

  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
            "url(" + require("assets/img/vehicles/S82A4982.jpg").default + ")",

          }}
        ></div>

      </div>
    </>
  );
}

export default BookingHeader;
