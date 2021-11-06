import React from "react";
import { isMobile } from 'react-device-detect';


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
import NairobiHeaderSmall from "components/Headers/NairobiHeaderSmall.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import AppImage from "../../assets/img/app_image_cropped.jpg";
import NairobiNight from "../../assets/img/nairobi_night.jpg";
import Driver1 from "../../assets/img/S82A7663.jpg";
import GirlPortrait from "../../assets/img/S82A7621.jpg";
import E1 from "../../assets/img/S82A5264.jpg";


import InstagramDemo from "../../assets/img/instagram_demo.png";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}


function AboutUs() {

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
        <NairobiHeaderSmall />

        <div
          className="section section-about-us"
          style={{
              backgroundColor: "rgb(26, 25,	26)",
              textAlign: "center"
          }}
        >
          <h1 className="title" style={{color: "rgb(151,72,50)", marginTop: "100px"}}>
            ABOUT US
          </h1>
          <div style={{color: "white", maxWidth: "625px", margin: "0 auto", marginBottom: "100px"}}>
            <p>
              ARC Ride was established in East Africa in 2019 to spark an e-mobility revolution.


            </p>
            <p>
              As our cities have grown, we have witnessed a huge increase in the number of motorbikes and TukTuks on our roads. Although these vehicles can be convenient, meeting the demands of busy commuters and last- mile delivery services, they are expensive to run, noisy and polluting.
            </p>
            <p>
              ARC Ride is powering the future of affordable, reliable and clean mobility. We design, build, sell and charge two and three-wheelers, ensuring that you’re always ready to go the distance.
            </p>
          </div>

        </div>
        {!isMobile ?
          <>
            <div className="section section-about-us" style={{padding: "0px"}}>
              <Row style={{height: (windowDimensions.height - 100) + "px", textAlign: "left"}}>
                <Col style={{padding: "0px"}}>

                  <p style={{maxWidth: "400px", margin: "0 auto", marginTop: (windowDimensions.height/2)-150}}>
                    ARC Ride was created to help provide the electric solution to mass transportation in rapidly growing African cities. We exemplify private sector responsibility for addressing the global climate crisis. We are working hard to grow our service and encourage other businesses to join the #emobilityrevolution.
                  </p>
                </Col>
                <Col style={{padding: "0px", backgroundImage: `url(${Driver1})`, backgroundSize: "cover"}} >

                </Col>
              </Row>
            </div>

            <div className="section section-about-us" style={{padding: "0px"}}>
              <Row style={{height: (windowDimensions.height - 100) + "px", textAlign: "left"}}>
                <Col style={{padding: "0px", backgroundImage: `url(${GirlPortrait})`, backgroundPosition: "0%, -200px", backgroundSize: "cover"}} >

                </Col>
                <Col style={{padding: "0px", backgroundColor: "rgb(26,25,26)"}}>
                  <p style={{maxWidth: "400px", margin: "0 auto", color: "white", marginTop: (windowDimensions.height/2)-150}}>
                    Our focus is on providing a safe and reliable service. We have driver screening, vehicle monitoring and speed limiting, GPS tracking and padlocks to ensure we provide the safest solution available.
                  </p>
                </Col>
              </Row>
            </div>

            <div className="section section-about-us" style={{padding: "0px"}}>
              <Row style={{height: (windowDimensions.height - 100) + "px", textAlign: "left"}}>
                <Col style={{padding: "0px"}}>
                  <p style={{maxWidth: "400px", margin: "0 auto", marginTop: (windowDimensions.height/2)-150}}>
                    ARC Ride plays an important roll in reducing emissions and pollution in the cities we operate. If we converted all 3,000,000
                    Taxis in East Africa to E3s, we would save approximately 12,540,000 Tonnes of Co2 a year. The emobility revoution matters and we are proud to be driving the charge.
                  </p>
                </Col>
                <Col style={{padding: "0px", backgroundImage: `url(${E1})`, backgroundSize: "cover", backgroundPosition: "0%, -200px"}} >

                </Col>
              </Row>
            </div>
          </>
        :
        <div style={{paddingTop: "20px", paddingBottom: "20px", padding: "10px"}}>
          <div className="section section-about-us" style={{padding: "0px"}}>


            <p >
              ARC Ride was created to help provide the electric solution to mass transportation in rapidly growing African cities. We exemplify private sector responsibility for addressing the global climate crisis. We are working hard to grow our service and encourage other businesses to join the #emobilityrevolution.
            </p>


            <img src={Driver1} />

          </div>

          <div className="section section-about-us" style={{padding: "0px"}}>

            <p>
              Our focus is on providing a safe and reliable service. We have driver screening, vehicle monitoring and speed limiting, GPS tracking and padlocks to ensure we provide the safest solution available.
            </p>
            <img src={GirlPortrait} />

          </div>

          <div className="section section-about-us" style={{padding: "0px"}}>

            <p >
              ARC Ride plays an important roll in reducing emissions and pollution in the cities we operate. If we converted all 3,000,000
              Taxis in East Africa to E3s, we would save approximately 12,540,000 Tonnes of Co2 a year. The emobility revoution matters and we are proud to be driving the charge.
            </p>

            <img src={E1} />
          </div>
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

            <img src={InstagramDemo} style={{width: "90%", maxWidth: "1500px", paddingTop: "50px"}}/>

          </div>
        : ""
        }


        <DarkFooter />
      </div>
    </>
  );
}

export default AboutUs;
