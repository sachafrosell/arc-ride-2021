import React from "react";
import { isMobile } from 'react-device-detect';
import disableScroll from 'disable-scroll';
import Loader from "components/loader.js"

 //reactstrap components
import {
 Container,
 Row,
 Col,
 Button
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DriverSignUpHeader from "components/Headers/DriverSignUpHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

import InstagramDemo from "../../assets/img/instagram_demo.jpg"


function DriverSignUp() {

  const [isLoading, setIsLoading] = React.useState(true);
  const [splashOpacity, setSplashOpacity] = React.useState("visible");

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
    function checkLoadStatus() {
      setIsLoading(false)
          setSplashOpacity("hidden")

    };
    window.addEventListener('load', checkLoadStatus);
    return () => window.removeEventListener('load', checkLoadStatus);
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
      <div className="wrapper" style={{textAlign: "center"}}>

        <DriverSignUpHeader />
        {!isMobile ?
          <div
            className="section section-about-us"
            style={{
                backgroundColor: "rgb(26, 25,	26)",
                textAlign: "left"
            }}
          >
            <div style={{
              color: "white",
              maxWidth: "1000px",
              margin: "0 auto"

            }}>
              <p>
                ARC Ride provides high quality drivers to dedicated clients. If a steady income and rewarding working environment appeals then download the app and apply today.
              </p>

              <h5 className="title" style={{color: "rgb(151,72,50)", marginBottom:"20px"}}>
                TO APPLY TO BE A DRIVER YOU WILL NEED TO SUBMIT:
              </h5>


              <p>
                Drivers licence
              </p>
              <p>
                Vehicle preference
              </p>

              <p>
                1 Guarantor (Aged 20 years and above)
              </p>
              <p>
                Original National ID (Borrower and one guarantor)
              </p>
              <p>
                KRA PIN Certificate
              </p>
              <p>
                Police Clearance
              </p>
              <p>
                A telephone number that has been in use for the last 6 months

              </p>

            </div>

          </div>
          :
          <div

            style={{
                backgroundColor: "rgb(26, 25,	26)",
                textAlign: "left",
                padding: "10px"
            }}
          >
            <div style={{
              color: "white",
              maxWidth: "1000px",
              margin: "0 auto",
              paddingTop: "20px"

            }}>
              <p>
                ARC Ride provides high quality drivers to dedicated clients. If a steady income and rewarding working environment appeals then download the app and apply today.
              </p>

              <h5 className="title" style={{color: "rgb(151,72,50)", marginBottom:"20px"}}>
                TO APPLY TO BE A DRIVER YOU WILL NEED TO SUBMIT:
              </h5>


              <p>
                Drivers licence
              </p>
              <p>
                Vehicle preference
              </p>

              <p>
                1 Guarantor (Aged 20 years and above)
              </p>
              <p>
                Original National ID (Borrower and one guarantor)
              </p>
              <p>
                KRA PIN Certificate
              </p>
              <p>
                Police Clearance
              </p>
              <p>
                A telephone number that has been in use for the last 6 months

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

export default DriverSignUp;
