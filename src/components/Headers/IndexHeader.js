/*eslint-disable*/
import React from "react";
import "../fade.css";



// reactstrap components
import { Container } from "reactstrap";
import { isMobile } from 'react-device-detect';
// core components



function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function IndexHeader() {
  let pageHeader = React.createRef();

  const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());
  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {

    function pageLoaded() {

      let el = document.querySelector(".content-center");
      setTimeout(() => {
        el.classList.add('fade-in');

      },1000)

    }
    window.addEventListener('load', pageLoaded())
  }, []);

  return (
    <>
      {!isMobile ?
        <div className="page-header clear-filter" >
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" + require("assets/img/nairobi_night_optimized.jpg").default + ")",

            }}
            ref={pageHeader}
          ></div>
          <Container style={{maxWidth: windowDimensions.width}}>
            <div className="content-center brand" >

              <h1 className="title">JOIN THE E-MOBILITY REVOLUTION</h1>

            </div>

          </Container>
        </div>
        :
        <div className="page-header clear-filter" >
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" + require("assets/img/nairobi_night_optimized.jpg").default + ")",

            }}
            ref={pageHeader}
          ></div>
          <Container style={{maxWidth: windowDimensions.width}}>
            <div className="content-center" id="headerSwitch">

              <h1 className="title" style={{marginBottom: "0px"}}>
              JOIN THE
              </h1>


              <h1 className="title" style={{paddingTop: "0px"}}>
              E-MOBILITY REVOLUTION
              </h1>

            </div>

          </Container>
        </div>
      }

    </>
  );
}

export default IndexHeader;
