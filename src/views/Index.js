import React from "react";
import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect';
import './overflow.css'
 //reactstrap components
import {
 Container,
 Row,
 Col,
 Button
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import MyMapComponent from "components/GoogleMap.js";

import E2 from "../assets/img/E2.png";
import E2Plus from "../assets/img/E2Plus.png";
import E3 from "../assets/img/E3.png";
import AppImage from "../assets/img/app_image_cropped.jpg"
import Assembly1 from "../assets/img/S82A7612.jpg"
import Assembly2 from "../assets/img/assembly2.jpg"
import InstagramDemo from "../assets/img/instagram_demo.png"

import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function Index() {

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
  return (
    <>

      <IndexNavbar />



      <div className="wrapper" style={{textAlign: "center"}}>
        <IndexHeader />


        <div
          className="section section-about-us"
          style={{
              backgroundColor: "rgb(26, 25,	26)",
              textAlign: "center"
          }}
        >
          <h1 className="title" style={{color: "rgb(120,69,48)"}}>
            RIDE ELECTRIC
          </h1>
        </div>
        {!isMobile ?
          <Container style={{marginTop: "50px", marginBottom: "50px", padding: "0px"}}>
            <div className="section section-about-us" style={{paddingTop: "0px"}}>
              <h5 className="title" style={{color: "rgb(151,72,50)"}}>
                VEHICLES
              </h5>
              <p style={{maxWidth: "800px", margin: "0 auto"}}>
                ARC Ride offers a versatile range of electric vehicles to meet all your mobility needs. We offer electric bicycles, mopeds, motorbikes and tuktuks, with new models currently being developed.
              </p>
            </div>
            <Row>
              <Col>
                <img src={E2} alternate="Photograph of E2" style={{height: "250px"}}/>
                <h5 className="title"
                  style={{
                    letterSpacing: "2px",
                    color: "rgb(151,72,50)"
                  }}
                >
                  E2
                </h5>
              </Col>
              <Col>
                <img src={E2Plus} alternate="Photograph of E2+" style={{height: "250px"}}/>
                <h5 className="title"
                  style={{
                    letterSpacing: "2px",
                    color: "rgb(151,72,50)"
                  }}
                >
                  E2+
                </h5>
              </Col>
              <Col>
                <img src={E3} alternate="Photograph of E3" style={{height: "250px"}}/>
                <h5 className="title"
                  style={{
                    letterSpacing: "2px",
                    color: "rgb(151,72,50)"
                  }}
                >
                  E3
                </h5>
              </Col>
            </Row>
            <Link to="/vehicles">
              <Button className="arc-ride-button">
                Choose your ride
              </Button>
            </Link>

          </Container>
        :
        <div style={{padding: "10px", paddingBottom: "20px"}}>


          <div className="section section-about-us">
            <h5 className="title" style={{color: "rgb(151,72,50)"}}>
              VEHICLES
            </h5>
            <p style={{maxWidth: "800px", margin: "0 auto"}}>
              ARC Ride offers a versatile range of electric vehicles to meet all your mobility needs. We offer electric bicycles, mopeds, motorbikes and tuktuks, with new models currently being developed.
            </p>
          </div>
          <div style={{textAlign: "center"}}>



            <img src={E2} alternate="Photograph of E2" style={{height: "250px"}}/>


            <img src={E2Plus} alternate="Photograph of E2+" style={{height: "250px"}}/>


            <img src={E3} alternate="Photograph of E3" style={{height: "250px"}}/>


          </div>


          <Link to="/vehicles">
            <Button className="arc-ride-button">
              Choose your ride
            </Button>
          </Link>
        </div>


        }

        {!isMobile ?
          <div
            className="section section-about-us"
            style={{
              backgroundColor: "rgb(26, 25,	26)",
              textAlign: "center"
            }}
          >
            <h5 className="title" style={{color: "rgb(151,72,50)"}}>
              APP
            </h5>
            <p style={{maxWidth: "800px", margin: "0 auto", color: "white"}}>
              At the heart of our service sits the ARC Ride App, seamlessly connecting rider, vehicle and charging station. The App provides GPS, anti-theft, payment, breakdown support and hire purchase services and much more for a streamlined, integrated, high quality service.
            </p>

            <img src={AppImage} style={{paddingTop: "50px", maxWidth: "300px"}}/>

          </div>
        :
        <div
          className="section section-about-us"
          style={{
            backgroundColor: "rgb(26, 25,	26)",
            textAlign: "center",
            padding: "10px",
            paddingBottom: "20px"
          }}
        >
          <h5 className="title" style={{color: "rgb(151,72,50)"}}>
            APP
          </h5>
          <p style={{maxWidth: "800px", margin: "0 auto", color: "white"}}>
            At the heart of our service sits the ARC Ride App, seamlessly connecting rider, vehicle and charging station. The App provides GPS, anti-theft, payment, breakdown support and hire purchase services and much more for a streamlined, integrated, high quality service.
          </p>



        </div>

        }



        {!isMobile ?
          <div className="section section-about-us" style={{padding: "0px"}}>

            <Row>
              <Col style={{padding: "0px"}}>
                <div style={{marginTop: (windowDimensions.height/2 - 200) + "px"}}>
                  <h5 className="title" style={{color: "rgb(151,72,50)"}}>
                    CHARGING
                  </h5>
                  <p style={{maxWidth: "450px", margin: "0 auto"}}>
                    Are you fed up of rising fuel prices? Save over 30% riding electric and protect the environment. We currently operate vehicle charging stations at more than 20 locations across Nairobi, with hundreds more on the way. These sites offer “Park and Charge” or “Battery Swap” services, with chargers running on solar power to reduce emissions and keep costs low.
                  </p>
                  <Button className="arc-ride-button" style={{marginTop: "50px"}}>
                    Download the App
                  </Button>
                </div>
              </Col>
              <Col style={{padding: "0px"}}>
                <MyMapComponent isMarkerShown={true} style={{maxheight: "windowDimensions.height"}}/>

              </Col>
            </Row>
          </div>
        :
        <div className="section section-about-us" style={{padding: "10px"}}>


          <div style= {{paddingBottom: "20px"}}>
            <h5 className="title" style={{color: "rgb(151,72,50)"}}>
              CHARGING
            </h5>
            <p style={{maxWidth: "450px", margin: "0 auto"}}>
              Are you fed up of rising fuel prices? Save over 30% riding electric and protect the environment. We currently operate vehicle charging stations at more than 20 locations across Nairobi, with hundreds more on the way. These sites offer “Park and Charge” or “Battery Swap” services, with chargers running on solar power to reduce emissions and keep costs low.
            </p>

          </div>

          <MyMapComponent isMarkerShown={true} style={{maxheight: "windowDimensions.height"}}/>


        </div>
        }


        {!isMobile ?
          <div
            className="section section-about-us"
            style={{
              backgroundColor: "rgb(26, 25,	26)",
              textAlign: "center"
            }}
          >

            <h5 className="title" style={{color: "rgb(151,72,50)"}}>
              ASSEMBLY
            </h5>
            <p style={{maxWidth: "800px", margin: "0 auto", color: "white"}}>
              All our vehicles are designed and assembled at our local plant in Nairobi. Here, our team of innovators and engineers is constantly refining and optimising our fleet.
            </p>
            <Row style={{padding: "50px", paddingBottom: "0px"}}>
              <Col style={{textAlign: "left", maxheight: "100px"}}>
                <img src={Assembly1}/>
                <p style={{paddingTop: "25px", color: "white"}}>
                  By developing local plants, we are not only building a highly-skilled workforce, but contributing to the ongoing development of the communities in which we operate.
                </p>
              </Col>
              <Col style={{textAlign: "left", maxheight: "100px"}}>
                <img src={Assembly2}/>
                <p style={{paddingTop: "25px", color: "white"}}>
                  Our goal is to have more than 2,000 ARC Ride electric vehicles on the roads of Nairobi by the end of 2022.
                </p>
              </Col>
            </Row>


          </div>
        :
        <div
          className="section section-about-us"
          style={{
            backgroundColor: "rgb(26, 25,	26)",
            textAlign: "center",
            padding: "10px"

          }}
        >

          <h5 className="title" style={{color: "rgb(151,72,50)"}}>
            ASSEMBLY
          </h5>
          <p style={{maxWidth: "800px", margin: "0 auto", color: "white", paddingBottom: "20px"}}>
            All our vehicles are designed and assembled at our local plant in Nairobi. Here, our team of innovators and engineers is constantly refining and optimising our fleet.
          </p>

          <img src={Assembly1}/>
          <p style={{paddingTop: "25px", color: "white"}}>
            By developing local plants, we are not only building a highly-skilled workforce, but contributing to the ongoing development of the communities in which we operate.
          </p>

          <img src={Assembly2}/>
          <p style={{paddingTop: "25px", color: "white"}}>
            Our goal is to have more than 2,000 ARC Ride electric vehicles on the roads of Nairobi by the end of 2022.
          </p>



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

export default Index;