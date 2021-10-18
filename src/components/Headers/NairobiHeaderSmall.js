import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";



function NairobiHeaderSmall() {

  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
            "url(" + require("assets/img/nairobi_night.jpg").default + ")",
            backgroundPosition: "0% -200px"
          }}
        ></div>

      </div>
    </>
  );
}

export default NairobiHeaderSmall;
