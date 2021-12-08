import React from "react";
import { isMobile } from 'react-device-detect';
import Loader from "components/loader.js"
import disableScroll from 'disable-scroll';



// reactstrap components
import {
  Button,

  Row,
  Col,

} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ChargingHeader from "components/Headers/ChargingHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

import BatteryImg from "../../assets/img/battery.png"
import ChargeImg from "../../assets/img/charge.png"
import InstagramDemo from "../../assets/img/instagram_demo.jpg"

import MyMapComponent from "components/GoogleMap.js";




function ChargingStations() {

  const [isLoading, setIsLoading] = React.useState(true);
  const [splashOpacity, setSplashOpacity] = React.useState("visible");

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
    function checkLoadStatus() {
      setIsLoading(false)
      setTimeout(() => {
        setSplashOpacity("hidden")
      }, 1000)
    };
    if (document.readyState === "complete") {
      setTimeout(() => {
        setSplashOpacity("hidden")
      }, 1000)
    } else {
      window.addEventListener('load', checkLoadStatus());
    }
    return () => window.removeEventListener('load', checkLoadStatus());
  });

  return (
    <>
    {isLoading ?
      <Loader opacity={splashOpacity}  />
      :
      <Loader opacity={splashOpacity} />
    }
    {isLoading ?
      disableScroll.on()
    :
      disableScroll.off()
    }
      <IndexNavbar />
      <div className="wrapper">
        <ChargingHeader />
        {!isMobile ?
          <>
            <div
              className="section section-about-us"
              style={{
                backgroundColor: "rgb(26, 25,	26)",
                textAlign: "center"
              }}
            >
              <h5 className="title" style={{color: "rgb(151,72,50)"}}>
                ARC CHARGE
              </h5>
              <p style={{color: "white", maxWidth: "800px", margin: "0 auto"}}>
                We have an extensive and rapidly growing network of ARC Charge stations across Nairobi, with hundreds more in development, and our simple battery swap process is quicker than filling up with fuel.
              </p>
              <p style={{color: "white", maxWidth: "600px", margin: "0 auto", marginTop: "25px"}}>
                Explore the map to find your nearest ARC Charge location...
              </p>
            </div>

            <div>
              <MyMapComponent isMarkerShown={true} style={{maxheight: "windowDimensions.height"}}/>
            </div>

            <div className="section section-about-us" style={{textAlign: "center"}}>
              <p style={{maxWidth: "650px", margin: "0 auto"}}>
                There are two easy ways to keep your electric vehicle fully charged. Whichever charging option you choose, simply manage and pay via the ARC Ride app.
              </p>
              <Button className="arc-ride-button" style={{marginTop: "25px"}}>
                Download the App
              </Button>
              <Row style={{padding: "50px", paddingBottom: "0px"}}>
                <Col style={{textAlign: "left"}}>
                  <img alt=""src={BatteryImg}/>
                  <h3 style={{margin: "0px", marginTop: "20px"}}>
                    Battery Swap
                  </h3>
                  <p>
                    In a hurry? Simply exchange your battery at one of our “Battery Swap” sites and get back on the road in minutes.
                  </p>
                </Col>
                <Col style={{textAlign: "left"}}>
                  <img alt=""src={ChargeImg}/>
                  <h3 style={{margin: "0px", marginTop: "20px"}}>
                    Park & Charge
                  </h3>
                  <p>
                    Need a break? No worries. Just pull up at one of our “Park and Charge” sites and we’ll recharge your vehicle while you wait.
                  </p>
                </Col>
              </Row>
            </div>

            <div
              className="section section-about-us"
              style={{
                backgroundColor: "rgb(26, 25,	26)",
                textAlign: "center"
              }}
            >
              <div style={{maxWidth: "600px", margin: "0 auto", marginTop: "100px", marginBottom: "100px"}}>
                <h5 className="title" style={{color: "rgb(151,72,50)"}}>
                  AFFORDABLE
                </h5>
                <p style={{color: "white", margin: "0px"}}>
                  Our stations have the option to install solar charging units, keeping energy prices low and making sure we offer the most sustainable solution possible.
                </p>
                <h5 className="title" style={{color: "rgb(151,72,50)"}}>
                  RELIABLE
                </h5>
                <p style={{color: "white", margin: "0px"}}>
                  Electric vehicles require less maintenance than traditional ones and battery swaps take less than 2 minutes, meaning more time on the road.
                </p>
                <h5 className="title" style={{color: "rgb(151,72,50)"}}>
                  CLEAN
                </h5>
                <p style={{color: "white", margin: "0px"}}>
                  More than 90% of Kenya’s energy comes from renewable sources. The future of transport is here. Ride clean.
                </p>
              </div>
            </div>
          </>
        :
          < div >
          <div
            className="section section-about-us"
            style={{
              backgroundColor: "rgb(26, 25,	26)",
              textAlign: "center"
            }}
          >
            <h5 className="title" style={{color: "rgb(151,72,50)"}}>
              ARC CHARGE
            </h5>
            <div style={{padding: "10px"}}>
              <p style={{color: "white", maxWidth: "800px", margin: "0 auto"}}>
                We have an extensive and rapidly growing network of ARC Charge stations across Nairobi, with hundreds more in development, and our simple battery swap process is quicker than filling up with fuel.
              </p>
              <p style={{color: "white", maxWidth: "600px", margin: "0 auto", marginTop: "25px"}}>
                Explore the map to find your nearest ARC Charge location...
              </p>
            </div>

          </div>

          <div>
            <MyMapComponent isMarkerShown={true} style={{maxheight: "windowDimensions.height"}}/>
          </div>

          <div className="section section-about-us" style={{textAlign: "center", paddingLeft: "10px", paddingRight: "10px"}}>
            <p style={{maxWidth: "650px", margin: "0 auto"}}>
              There are two easy ways to keep your electric vehicle fully charged. Whichever charging option you choose, simply manage and pay via the ARC Ride app.
            </p>
            <Button className="arc-ride-button" style={{marginTop: "25px"}}>
              Download the App
            </Button>
            <Row style={{padding: "50px", paddingBottom: "0px"}}>
              <Col style={{textAlign: "left"}}>
                <img alt=""src={BatteryImg}/>
                <h3 style={{margin: "0px", marginTop: "20px"}}>
                  Battery Swap
                </h3>
                <p>
                  In a hurry? Simply exchange your battery at one of our “Battery Swap” sites and get back on the road in minutes.
                </p>
              </Col>
              <Col style={{textAlign: "left"}}>
                <img alt=""src={ChargeImg}/>
                <h3 style={{margin: "0px", marginTop: "20px"}}>
                  Park & Charge
                </h3>
                <p>
                  Need a break? No worries. Just pull up at one of our “Park and Charge” sites and we’ll recharge your vehicle while you wait.
                </p>
              </Col>
            </Row>
          </div>

          <div
            className="section section-about-us"
            style={{
              backgroundColor: "rgb(26, 25,	26)",
              textAlign: "center"
            }}
          >
            <div style={{maxWidth: "600px", margin: "0 auto", marginTop: "100px", marginBottom: "100px", padding: "10px"}}>
              <h5 className="title" style={{color: "rgb(151,72,50)"}}>
                AFFORDABLE
              </h5>
              <p style={{color: "white", margin: "0px"}}>
                Our stations have the option to install solar charging units, keeping energy prices low and making sure we offer the most sustainable solution possible.
              </p>
              <h5 className="title" style={{color: "rgb(151,72,50)"}}>
                RELIABLE
              </h5>
              <p style={{color: "white", margin: "0px"}}>
                Electric vehicles require less maintenance than traditional ones and battery swaps take less than 2 minutes, meaning more time on the road.
              </p>
              <h5 className="title" style={{color: "rgb(151,72,50)"}}>
                CLEAN
              </h5>
              <p style={{color: "white", margin: "0px"}}>
                More than 90% of Kenya’s energy comes from renewable sources. The future of transport is here. Ride clean.
              </p>
            </div>
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

            <img alt=""src={InstagramDemo} style={{width: "90%", maxWidth: "1500px", paddingTop: "50px"}}/>

          </div>
        : ""
        }





        <DarkFooter />
      </div>
    </>
  );
}

export default ChargingStations;
