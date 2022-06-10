import React from "react";
import { isMobile } from 'react-device-detect';



 //reactstrap components
import {
 Row,
 Col
} from "reactstrap";

// core components
import DarkFooter from "components/Footers/DarkFooter.js";
import ContactNavbar from "components/Navbars/ContactNavbar.js"
import MyMapComponent from "components/GoogleMap.js"

import InstagramDemo from "../../assets/img/instagram_demo.jpg"

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}


function ContactUs() {

  const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());



  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    {window.scrollTo(0, 0)}
      <ContactNavbar />
      <div className="wrapper" style={{textAlign: "center", marginTop: "100px"}}>

        {!isMobile ?
          <div className="section section-about-us" style={{padding: "0px", paddingTop: "40px"}}>
            <Row>
              <Col style={{paddingTop: "50px", paddingLeft: "0px", paddingRight: "0px", paddingBottom: "50px"}}>
                <div style={{marginTop: (windowDimensions.height/2 - 300) + "px", textAlign: "left", marginLeft: "100px"}}>

                  <h5 className="title" style={{color: "rgb(151,72,50)"}}>
                    CONTACT US
                  </h5>
                  <p style={{maxWidth: "450px", margin: "0 0"}}>
                    KENYA OFFICE
                  </p>
                  <p style={{maxWidth: "450px", margin: "0 0"}}>
                    Go-Down 23,
                  </p>
                  <p style={{maxWidth: "450px", margin: "0 0"}}>
                    Central Business Park,
                  </p>
                  <p style={{maxWidth: "450px", margin: "0 0"}}>
                    Nairobi,
                  </p>
                  <p style={{maxWidth: "450px", margin: "0 0"}}>
                    Kenya
                  </p>
                  <p style={{maxWidth: "450px", margin: "0 0", marginBottom: "20px"}}>
                    +25411 0652 918
                  </p>


                  <span></span>
                  <p style={{maxWidth: "450px", margin: "0 0"}}>
                    UK OFFICE
                  </p>
                  <p style={{maxWidth: "450px", margin: "0 0"}}>
                    11 Crucifix Lane,
                  </p>
                  <p style={{maxWidth: "450px", margin: "0 0"}}>
                    London,
                  </p>
                  <p style={{maxWidth: "450px", margin: "0 0", marginBottom: "20px"}}>
                    SE1 3JW
                  </p>
                  <span></span>
                  <p style={{maxWidth: "450px", margin: "0 0"}}>
                    +001234 56789
                  </p>

                </div>
              </Col>
              <Col>
                <MyMapComponent isMarkerShown={true} />

              </Col>
            </Row>
          </div>
        :
        <div className="section section-about-us" style={{paddingTop: "40px", paddingBottom: "0px"}}>

          <div style={{marginTop: "20px", textAlign: "left", padding: "10px"}}>

            <h5 className="title" style={{color: "rgb(151,72,50)"}}>
              CONTACT US
            </h5>
            <p style={{maxWidth: "450px", margin: "0 0"}}>
              KENYA OFFICE
            </p>
            <p style={{maxWidth: "450px", margin: "0 0"}}>
              Go-Down 23,
            </p>
            <p style={{maxWidth: "450px", margin: "0 0"}}>
              Central Business Park,
            </p>
            <p style={{maxWidth: "450px", margin: "0 0"}}>
              Nairobi,
            </p>
            <p style={{maxWidth: "450px", margin: "0 0"}}>
              Kenya
            </p>
            <p style={{maxWidth: "450px", margin: "0 0", marginBottom: "20px"}}>
              +25411 0652 918
            </p>


            <span></span>
            <p style={{maxWidth: "450px", margin: "0 0"}}>
              UK OFFICE
            </p>
            <p style={{maxWidth: "450px", margin: "0 0"}}>
              11 Crucifix Lane,
            </p>
            <p style={{maxWidth: "450px", margin: "0 0"}}>
              London,
            </p>
            <p style={{maxWidth: "450px", margin: "0 0"}}>
              SE1 3JW
            </p>

            <p style={{maxWidth: "450px", margin: "0 0", marginBottom: "20px"}}>
              +001234 56789
            </p>

          </div>

            <MyMapComponent isMarkerShown={true} />




        </div>
        }




        { !isMobile ?
          <div
            className="section section-about-us"
            style={{
                backgroundColor: "rgb(76, 111, 85)",
                textAlign: "center"
            }}
          >
            <h1 className="title" style={{color: "white", padding: "0px"}}>
              #EMOBILITYREVOLUTION
            </h1>
            <p style={{color: "white"}}>
              Stories from our community
            </p>

            <img alt=""src={InstagramDemo} style={{width: "90%", maxWidth: "1500px", paddingTop: "50px"}}/>

          </div>
        : ""
        }





        <DarkFooter />
      </div>
    </>
  );
}

export default ContactUs;
