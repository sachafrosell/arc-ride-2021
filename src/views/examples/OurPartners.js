import React from "react";


// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Table
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import OurPartnersHeader from "components/Headers/OurPartnersHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import AppImage from "../../assets/img/app_image_cropped.jpg";
import NairobiNight from "../../assets/img/nairobi_night.jpg";
import Bolt from "../../assets/img/bolt.png";
import Uber from "../../assets/img/uber.png";
import ImperialCollege from "../../assets/img/imperialcollege.png";
import Sendy from "../../assets/img/sendy.png";
import Kibanda from "../../assets/img/kibanda.png";
import Pomonia from "../../assets/img/pomonia.png";
import Amituck from "../../assets/img/amituck.png";
import Tushop from "../../assets/img/tushop.png";
import Aspira from "../../assets/img/aspira.png";
import Motisure from "../../assets/img/motisure.png";


import InstagramDemo from "../../assets/img/instagram_demo.png";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}


function OurPartners() {

  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());

  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <OurPartnersHeader />

        <div
          className="section section-about-us"
          style={{
              backgroundColor: "rgb(26, 25,	26)",
              textAlign: "center"
          }}
        >
          <h1 className="title" style={{color: "rgb(151,72,50)", margin: "100px"}}>
            OUR PARTNERS
          </h1>

        </div>

        <div style={{textAlign: "left", maxWidth: "1200px", margin: "50px auto"}}>
          <Row>
            <Col>
              <img src={Bolt} />
              <p>
                Bolt
              </p>
            </Col>
            <Col>
              <img src={Uber} />
              <p>
                Uber
              </p>
            </Col>
            <Col>
              <img src={ImperialCollege} />
              <p>
                Imperial College
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src={Sendy} />
              <p>
                Sendy
              </p>
            </Col>
            <Col>
              <img src={Kibanda} />
              <p>
                Kibanda
              </p>
            </Col>
            <Col>
              <img src={Pomonia} />
              <p>
                Pomonia
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src={Amituck} />
              <p>
                Amituck
              </p>
            </Col>
            <Col>
              <img src={Tushop} />
              <p>
                Tushop
              </p>
            </Col>
            <Col>
              <img src={Motisure} />
              <p>
                Motisure
              </p>
            </Col>

          </Row>
        </div>

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

          <img src={InstagramDemo} style={{width: "90%", maxWidth: "1500px", paddingTop: "50px"}}/>

        </div>


        <DarkFooter />
      </div>
    </>
  );
}

export default OurPartners;
