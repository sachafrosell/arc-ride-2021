/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

// PARALLAX SCROLL:
// React.useEffect(() => {
//   if (window.innerWidth > 991) {
//     const updateScroll = () => {
//       let windowScrollTop = window.pageYOffset / 3;
//       pageHeader.current.style.transform =
//         "translate3d(0," + windowScrollTop + "px,0)";
//     };
//     window.addEventListener("scroll", updateScroll);
//     return function cleanup() {
//       window.removeEventListener("scroll", updateScroll);
//     };
//   }
// });

function IndexHeader() {
  let pageHeader = React.createRef();



  return (
    <>
      <div className="page-header clear-filter" >
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/nairobi_night.jpg").default + ")",

          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <h1 className="title">JOIN THE E-MOBILITY REVOLUTION</h1>
          </div>

        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
