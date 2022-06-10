import React from "react";
import { isMobile } from 'react-device-detect';
import disableScroll from 'disable-scroll';
import Loader from "components/loader.js"



// reactstrap components
import {
  Row,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import OurPartnersHeader from "components/Headers/OurPartnersHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

import Bolt from "../../assets/img/partners/bolt.jpg";
import Uber from "../../assets/img/partners/uber.jpg";
import ImperialCollege from "../../assets/img/partners/imperialcollege.jpg";
import Sendy from "../../assets/img/partners/sendy.jpg";
import Kibanda from "../../assets/img/partners/kibanda.jpg";
import Pomonia from "../../assets/img/partners/pomonia.jpg";
import Amituck from "../../assets/img/partners/amituck.jpg";
import Tushop from "../../assets/img/partners/tushop.jpg";
import Motisure from "../../assets/img/partners/motisure.jpg";
import InstagramDemo from "../../assets/img/instagram_demo.jpg";


function OurPartners() {

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

        {!isMobile ?
          <div style={{textAlign: "left", maxWidth: "1200px", margin: "50px auto", backgroundColor: "212, 219, 213"}}>
            <Row>
              <Col>
                <img alt=""src={Bolt} />
                <p>
                  Bolt
                </p>
              </Col>
              <Col>
                <img alt=""src={Uber} />
                <p>
                  Uber
                </p>
              </Col>
              <Col>
                <img alt=""src={ImperialCollege} />
                <p>
                  Imperial College
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <img alt=""src={Sendy} />
                <p>
                  Sendy
                </p>
              </Col>
              <Col>
                <img alt=""src={Kibanda} />
                <p>
                  Kibanda
                </p>
              </Col>
              <Col>
                <img alt=""src={Pomonia} />
                <p>
                  Pomonia
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <img alt=""src={Amituck} />
                <p>
                  Amituck
                </p>
              </Col>
              <Col>
                <img alt=""src={Tushop} />
                <p>
                  Tushop
                </p>
              </Col>
              <Col>
                <img alt=""src={Motisure} />
                <p>
                  Motisure
                </p>
              </Col>

            </Row>
          </div>
        :
        <div style={{textAlign: "left", maxWidth: "1200px", margin: "50px auto", backgroundColor: "212, 219, 213", padding: "10px"}}>
          <Row>
            <Col>
              <img alt=""src={Bolt} />
              <p>
                Bolt
              </p>
            </Col>
            <Col>
              <img alt=""src={Uber} />
              <p>
                Uber
              </p>
            </Col>
            <Col>
              <img alt=""src={ImperialCollege} />
              <p>
                Imperial College
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <img alt=""src={Sendy} />
              <p>
                Sendy
              </p>
            </Col>
            <Col>
              <img alt=""src={Kibanda} />
              <p>
                Kibanda
              </p>
            </Col>
            <Col>
              <img alt=""src={Pomonia} />
              <p>
                Pomonia
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <img alt=""src={Amituck} />
              <p>
                Amituck
              </p>
            </Col>
            <Col>
              <img alt=""src={Tushop} />
              <p>
                Tushop
              </p>
            </Col>
            <Col>
              <img alt=""src={Motisure} />
              <p>
                Motisure
              </p>
            </Col>

          </Row>
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

export default OurPartners;
