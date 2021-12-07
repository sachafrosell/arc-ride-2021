import React from "react";
import { isMobile } from 'react-device-detect';
import disableScroll from 'disable-scroll';
import Loader from "components/loader.js";

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
  Table,
  Form,
  FormGroup,
  Label
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import BookingHeader from "components/Headers/BookingHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

import InstagramDemo from "../../assets/img/instagram_demo.jpg"








function BookADemo() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
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
      <div className="wrapper">
      {!isMobile ?
        <>

          <BookingHeader />

          <div className="section section-about-us"
            style={{
                backgroundColor: "rgb(26, 25,	26)",
                textAlign: "center"
            }}
          >
            <h1 className="title" style={{color: "rgb(120,69,48)"}}>
              BOOKING
            </h1>
            <p style={{maxWidth: "350px", margin: "0 auto", color: "white"}}>
              Want to find out more about our services? Get a quote by filling out the form below.
            </p>

          </div>

          <div className="section section-about-us"
            style={{
                backgroundColor: "rgb(26, 25,	26)",
                textAlign: "center"
            }}
          >
            <Form style={{maxWidth: "600px", margin: "0 auto"}}>
              <FormGroup>
                <Input type="text" name="Name" id="exampleEmail" placeholder="Name" style={{borderRadius: "0px", backgroundColor: "white"}} />
              </FormGroup>
              <FormGroup>
                <Input type="text" name="Company" id="exampleEmail" placeholder="Company" style={{borderRadius: "0px", backgroundColor: "white"}} />
              </FormGroup>
              <FormGroup>
                <Input type="email" name="email" id="exampleEmail" placeholder="Email" style={{borderRadius: "0px", backgroundColor: "white"}} />
              </FormGroup>
              <FormGroup>
                <Input type="telephone" name="telephone" id="exampleEmail" placeholder="Telephone" style={{borderRadius: "0px", backgroundColor: "white"}} />
              </FormGroup>
              <FormGroup>
                <Input type="select" name="select" id="Service" style={{borderRadius: "0px", backgroundColor: "white"}} >
                  <option>Choose Service</option>
                  <option>Lease</option>
                  <option>Hire Purchase</option>
                  <option>Buy</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Input type="select" name="select" id="Vehicle" style={{borderRadius: "0px", backgroundColor: "white"}} >
                  <option>Choose Vehicle</option>
                  <option>E-Bike</option>
                  <option>E2</option>
                  <option>E2+</option>
                  <option>E3</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Input type="select" name="select" id="Vehicle" style={{borderRadius: "0px", backgroundColor: "white"}} >
                  <option>Request Demo</option>
                  <option>Yes</option>
                  <option>No</option>

                </Input>
              </FormGroup>


            </Form>

          </div>
          </>
          :
          <>

            <BookingHeader />
            <div>


            <div
              style={{
                  backgroundColor: "rgb(26, 25,	26)",
                  textAlign: "center",

              }}
            >
              <h1 className="title" style={{color: "rgb(120,69,48)"}}>
                BOOKING
              </h1>
              <p style={{maxWidth: "350px", margin: "0 auto", color: "white"}}>
                Want to find out more about our services? Get a quote by filling out the form below.
              </p>

            </div>

            <div className="section section-about-us"
              style={{
                  backgroundColor: "rgb(26, 25,	26)",
                  textAlign: "center"
              }}
            >
              <Form>
                <FormGroup>
                  <Input type="text" name="Name" id="exampleEmail" placeholder="Name" style={{borderRadius: "0px", backgroundColor: "white"}} />
                </FormGroup>
                <FormGroup>
                  <Input type="text" name="Company" id="exampleEmail" placeholder="Company" style={{borderRadius: "0px", backgroundColor: "white"}} />
                </FormGroup>
                <FormGroup>
                  <Input type="email" name="email" id="exampleEmail" placeholder="Email" style={{borderRadius: "0px", backgroundColor: "white"}} />
                </FormGroup>
                <FormGroup>
                  <Input type="telephone" name="telephone" id="exampleEmail" placeholder="Telephone" style={{borderRadius: "0px", backgroundColor: "white"}} />
                </FormGroup>
                <FormGroup>
                  <Input type="select" name="select" id="Service" style={{borderRadius: "0px", backgroundColor: "white"}} >
                    <option>Choose Service</option>
                    <option>Lease</option>
                    <option>Hire Purchase</option>
                    <option>Buy</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Input type="select" name="select" id="Vehicle" style={{borderRadius: "0px", backgroundColor: "white"}} >
                    <option>Choose Vehicle</option>
                    <option>E-Bike</option>
                    <option>E2</option>
                    <option>E2+</option>
                    <option>E3</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Input type="select" name="select" id="Vehicle" style={{borderRadius: "0px", backgroundColor: "white"}} >
                    <option>Request Demo</option>
                    <option>Yes</option>
                    <option>No</option>

                  </Input>
                </FormGroup>


              </Form>

            </div>
            </div>
            </>
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

export default BookADemo;
