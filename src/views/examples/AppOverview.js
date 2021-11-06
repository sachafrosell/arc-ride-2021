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
import AppImage from "../../assets/img/app_image_cropped.jpg"


import InstagramDemo from "../../assets/img/instagram_demo.png"




function AppOverview() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
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
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <NairobiHeaderSmall />
        {!isMobile ?
          <div>
            <div
              className="section section-about-us"
              style={{
                  backgroundColor: "rgb(26, 25,	26)",
                  textAlign: "center"
              }}
            >
              <h5 className="title" style={{color: "rgb(151,72,50)"}}>
                RIDE ELECTRIC TODAY
              </h5>
              <p style={{color: "white", maxWidth: "800px", margin: "0 auto"}}>
                The Arc Ride App is your personal platform to allow you to join the e-mobility revolution. Lease, Purchase and Charge all through the app.
              </p>
              <img src={AppImage} style={{paddingTop: "50px", maxWidth: "300px"}}/>
            </div>

            <div className="section section-about-us" style={{textAlign: "center"}}>
              <h5 className="title" style={{color: "rgb(151,72,50)", marginBottom: "20px"}}>
                APP FEATURES INCLUDE
              </h5>
              <p>
                Location Services GPS tracking, location of vehicle, charging stations
              </p>
              <p>
                Anti-Theft
              </p>
              <p>
                Bookings
              </p>
              <p>
                Payments
              </p>
              <p>
                Battery Management Systems
              </p>
              <p>
                Charging station access
              </p>

              <p>
                Breakdown services
              </p>
              <p>
                Route Optimisation
              </p>
              <p>
                Geo-fencing
              </p>

              <p>
                And much more
              </p>
            </div>
          </div>
        :
        <div style={{padding: "10px"}}>
          <div
            className="section section-about-us"
            style={{
                backgroundColor: "rgb(26, 25,	26)",
                textAlign: "center"
            }}
          >
            <h5 className="title" style={{color: "rgb(151,72,50)"}}>
              RIDE ELECTRIC TODAY
            </h5>
            <p style={{color: "white", maxWidth: "800px", margin: "0 auto"}}>
              The Arc Ride App is your personal platform to allow you to join the e-mobility revolution. Lease, Purchase and Charge all through the app.
            </p>
            <img src={AppImage} style={{paddingTop: "50px", maxWidth: "300px"}}/>
          </div>

          <div className="section section-about-us" style={{textAlign: "center"}}>
            <h5 className="title" style={{color: "rgb(151,72,50)", marginBottom: "20px"}}>
              APP FEATURES INCLUDE
            </h5>
            <p>
              Location Services GPS tracking, location of vehicle, charging stations
            </p>
            <p>
              Anti-Theft
            </p>
            <p>
              Bookings
            </p>
            <p>
              Payments
            </p>
            <p>
              Battery Management Systems
            </p>
            <p>
              Charging station access
            </p>

            <p>
              Breakdown services
            </p>
            <p>
              Route Optimisation
            </p>
            <p>
              Geo-fencing
            </p>

            <p>
              And much more
            </p>
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

export default AppOverview;
