import React from "react";

 //reactstrap components
import {
 Container,
 Row,
 Col,
 Button
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import OurServicesHeader from "components/Headers/OurServicesHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

import InstagramDemo from "../../assets/img/instagram_demo.png"


function OurServices() {
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
  return (
    <>
      <IndexNavbar />
      <div className="wrapper" style={{textAlign: "center"}}>
        <OurServicesHeader />

        <div
          className="section section-about-us"
          style={{
              backgroundColor: "rgb(26, 25,	26)",
              textAlign: "center"
          }}
        >
          <h1 className="title" style={{color: "rgb(120,69,48)"}}>
            CORPORATE FLEET MANAGEMENT
          </h1>
        </div>

        <div className="section section-about-us">
          <div style={{textAlign: "left", maxWidth: "725px", margin: "0 auto"}}>
            <p>
              Looking for a trusted fleet operator? ARC Ride’s Corporate Fleet Management service offers 360-degree, clean, last-mile delivery solutions that can meet all your business requirements.
            </p>
            <h5 className="title"
              style={{
                letterSpacing: "2px",
                color: "rgb(151,72,50)"
              }}
            >
              KEY BENEFITS:
            </h5>
            <h3 style={{margin: "0px"}}>
              Streamlined
            </h3>
            <p>
              As your trusted fleet partner, we deliver for you.
            </p>
            <h3 style={{margin: "0px"}}>
              Sustainable
            </h3>
            <p>
              Zero emission vehicles help your business meet its environmental goals.
            </p>
            <h3 style={{margin: "0px"}}>
              Efficient
            </h3>
            <p>
              A range of vehicle and driver options ensures maximum efficiency with minimum costs.
            </p>
            <h3 style={{margin: "0px"}}>
              Fast
            </h3>
            <p>
              All our electric vehicles are optimised for last-mile delivery, reducing delivery times.
            </p>
            <p>
              Let's Ride!
            </p>
            <Button className="arc-ride-button">
              Contact Us
            </Button>
          </div>
        </div>

        <div
          className="section section-about-us"
          style={{
              backgroundColor: "rgb(26, 25,	26)",
              textAlign: "center"
          }}
        >
          <h1 className="title" style={{color: "rgb(120,69,48)"}}>
            LEASE
          </h1>
        </div>

        <div className="section section-about-us" style={{backgroundColor: "rgb(210,219,212)"}}>
          <div style={{textAlign: "left", maxWidth: "750px", margin: "0 auto"}}>
            <p>
              Want to manage your own electric fleet? Our flexible leasing plans put you in control. Our vehicles are on average 30% cheaper to run than petrol equivalents. Leasing gives you the power to decide when, where and for how long you need our services.

            </p>
            <h5 className="title"
              style={{
                letterSpacing: "2px",
                color: "rgb(151,72,50)"
              }}
            >
              KEY BENEFITS:
            </h5>
            <h3 style={{margin: "0px"}}>
              Flexible
            </h3>
            <p>
              We tailor leasing plans to meet your needs
            </p>
            <h3 style={{margin: "0px"}}>
              Sustainable
            </h3>
            <p>
              Going electric saves on average 30% per annum on running costs plus leasing costs less than purchasing
            </p>
            <h3 style={{margin: "0px"}}>
              Upgradable
            </h3>
            <p>
              Avoid tying up capital on depreciating vehicles and swerve asset obsolescence with regular fleet upgrades
            </p>

            <p>
              Let's Ride!
            </p>
            <Button className="arc-ride-button">
              Contact Us
            </Button>
          </div>
        </div>

        <div
          className="section section-about-us"
          style={{
              backgroundColor: "rgb(26, 25,	26)",
              textAlign: "center"
          }}
        >
          <h1 className="title" style={{color: "rgb(120,69,48)"}}>
            BUY DIRECT
          </h1>
        </div>

        <div className="section section-about-us">
          <div style={{textAlign: "left", maxWidth: "750px", margin: "0 auto"}}>
            <p>
              Want your own electric vehicle? Buy direct from ARC Ride or Hire Purchase through ARC Ride’s innovative financing solutions. Our Hire Purchase financing solution offers instant access to your vehicles, whilst building ownership over time through affordable micro-payments
            </p>
            <h5 className="title"
              style={{
                letterSpacing: "2px",
                color: "rgb(151,72,50)"
              }}
            >
              KEY BENEFITS:
            </h5>
            <h3 style={{margin: "0px"}}>
              Simple
            </h3>
            <p>
              Immediate access to a new, high-quality electric vehicle
            </p>
            <h3 style={{margin: "0px"}}>
              Affordable
            </h3>
            <p>
            Cut running costs by 30%
            </p>
            <h3 style={{margin: "0px"}}>
              Straightforward
            </h3>
            <p>
              Fixed payments, no hidden costs - and you own the vehicle after the final instalment

            </p>
            <h3 style={{margin: "0px"}}>
              Sustainable
            </h3>
            <p>
              Join the e-mobility revolution by riding your own zero emission vehicle
            </p>
            <p>
              Let's Ride!
            </p>
            <Button className="arc-ride-button">
              Contact Us
            </Button>
          </div>
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

export default OurServices;
