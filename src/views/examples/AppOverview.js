import React from "react";
import { isMobile } from 'react-device-detect';
import disableScroll from 'disable-scroll';
import Loader from "components/loader.js"



// reactstrap components


// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import NairobiHeaderSmall from "components/Headers/NairobiHeaderSmall.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import AppImage from "../../assets/img/app_image_cropped.jpg"


import InstagramDemo from "../../assets/img/instagram_demo.jpg"




function AppOverview() {

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

  function timeScrollToggle() {
    setTimeout(() => {
      disableScroll.off()
    }, 1500)
  }

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    {window.scrollTo(0, 0)}
    {isLoading ?
      <Loader opacity={splashOpacity}  />
      :
      <Loader opacity={splashOpacity} />
    }
    {isLoading ?
      disableScroll.on()
    :
      timeScrollToggle()
    }
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
              <img alt="" src={AppImage} style={{paddingTop: "50px", maxWidth: "300px"}}/>
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

            <p style={{color: "white", maxWidth: "800px", margin: "0 auto", padding: "10px"}}>
              The Arc Ride App is your personal platform to allow you to join the e-mobility revolution. Lease, Purchase and Charge all through the app.
            </p>
            <img alt="" src={AppImage} style={{paddingTop: "50px", maxWidth: "300px"}}/>
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

            <img alt="" src={InstagramDemo} style={{width: "90%", maxWidth: "1500px", paddingTop: "50px"}}/>

          </div>
        : ""
        }


        <DarkFooter />
      </div>
    </>
  );
}

export default AppOverview;
