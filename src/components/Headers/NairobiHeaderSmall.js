import React from "react";

// reactstrap components



function NairobiHeaderSmall() {

  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
            "url(" + require("assets/img/nairobi_night_optimized.jpg").default + ")",
            backgroundPosition: "0%"
          }}
        ></div>

      </div>
    </>
  );
}

export default NairobiHeaderSmall;
