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
import OurVehiclesHeader from "components/Headers/OurVehiclesHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

import ComingSoon from "../../assets/img/coming-soon.png";
import E2 from "../../assets/img/E2-white.png";
import E2Plus from "../../assets/img/E2-plus-white.png";
import E3 from "../../assets/img/E3-white.png";
import InstagramDemo from "../../assets/img/instagram_demo.png"


function LandingPage() {
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
        <OurVehiclesHeader />

        {!isMobile ?
          <div
            className="section section-about-us"
            style={{
                backgroundColor: "rgb(26, 25,	26)",
                textAlign: "center"
            }}
          >

            <h1 className="title" style={{color: "rgb(151,72,50)"}}>
              LET'S RIDE!
            </h1>

            <h3 style={{color: "white", maxWidth: "900px", margin: "0 auto"}}>
              ARC Ride has developed a range of electric vehicles that cater to every need. So whether you’re a commuter looking for a quicker, more convenient route to work, a delivery driver wanting to beat rising fuel prices or a fleet manager keen to trim operational costs, we can help. Just select the vehicle that suits you...
            </h3>

          </div>
          :
          <div
            className="section section-about-us"
            style={{
                backgroundColor: "rgb(26, 25,	26)",
                textAlign: "center",
                padding: "10px",
                paddingBottom: "50px"
            }}
          >

            <h1 className="title" style={{color: "rgb(151,72,50)"}}>
              LET'S RIDE!
            </h1>

            <h5 style={{color: "white", maxWidth: "900px", margin: "0 auto", fontSize: '15px'}}>
              ARC Ride has developed a range of electric vehicles that cater to every need. So whether you’re a commuter looking for a quicker, more convenient route to work, a delivery driver wanting to beat rising fuel prices or a fleet manager keen to trim operational costs, we can help. Just select the vehicle that suits you...
            </h5>

          </div>
        }


        { !isMobile ?
          <>
          <div className="section section-about-us" style={{textAlign: "center", backgroundColor: "rgb(210,219,212)"}}>
            <Container style={{paddingBottom: "25px"}}>
              <h5 className="title" style={{color: "rgb(151,72,50)"}}>
                E2
              </h5>
              <p style={{maxWidth: "900px", margin: "0 auto", marginBottom: "50px"}}>
                The E2 is lightweight, energy efficient and nimble enough for commuters and delivery drivers to navigate busy city streets with ease. The battery can be swapped in under 2 minutes, meaning you’ll never be off the road for long, and best of all, you can own the E2 for less than the cost of your daily commute.
              </p>
              <Button className="arc-ride-button">
                Pre-order via our App
              </Button>
            </Container>
            <div style={{textAlign: "center", maxWidth: "800px", margin: "0 auto"}}>
              <img src={E2} style={{maxWidth: "800px"}} />
              <div style={{textAlign: "left"}}>
                <h5 className="title" style={{color: "rgb(151,72,50)"}}>
                  E2 SPECS
                </h5>
                <Table>
                  <tbody>
                    <tr>
                      <th>RANGE</th>
                      <th>85km</th>
                    </tr>
                    <tr>
                      <th>TOP SPEED:</th>
                      <th>60km/h</th>
                    </tr>
                    <tr>
                      <th>LOAD:</th>
                      <th>200kg</th>
                    </tr>

                  </tbody>
                </Table>
              </div>
            </div>
          </div>

          <div className="section section-about-us" style={{textAlign: "center"}}>
            <Container style={{paddingBottom: "25px"}}>
              <h5 className="title" style={{color: "rgb(151,72,50)"}}>
                E2+
              </h5>
              <p style={{maxWidth: "900px", margin: "0 auto", marginBottom: "50px"}}>
                Meet your new all-electric boda-boda. The high-speed, low-cost E2+ is equally at home making deliveries or carrying passengers and its simple battery swapping system means it is 50% cheaper to run than a petrol version, while maximising your time on the road.
              </p>
              <Button className="arc-ride-button">
                Buy now via our App
              </Button>
            </Container>
            <div style={{textAlign: "center", maxWidth: "800px", margin: "0 auto"}}>
              <img src={E2Plus} style={{maxWidth: "800px"}} />
              <div style={{textAlign: "left"}}>
                <h5 className="title" style={{color: "rgb(151,72,50)"}}>
                  E2+ SPECS
                </h5>
                <Table>
                  <tbody>
                    <tr>
                      <th>RANGE</th>
                      <th>85km (160km 2 batteries)</th>
                    </tr>
                    <tr>
                      <th>TOP SPEED:</th>
                      <th>75km/h</th>
                    </tr>
                    <tr>
                      <th>LOAD:</th>
                      <th>250kg</th>
                    </tr>

                  </tbody>
                </Table>
              </div>
            </div>
          </div>

          <div className="section section-about-us" style={{textAlign: "center", backgroundColor: "rgb(210,219,212)"}}>
            <Container style={{paddingBottom: "25px"}}>
              <h5 className="title" style={{color: "rgb(151,72,50)"}}>
                E3
              </h5>
              <p style={{maxWidth: "900px", margin: "0 auto", marginBottom: "50px"}}>
                Our highly efficient, market-leading E3 electric TukTuk offers quick, clean delivery of up to 500kg of goods while cutting running costs and benefiting from attractive leasing options. A passenger version, capable of carrying 4 people, is coming soon.
              </p>
              <Button className="arc-ride-button">
                Pre-order via our App
              </Button>
            </Container>
            <div style={{textAlign: "center", maxWidth: "800px", margin: "0 auto"}}>
              <img src={E3} style={{maxWidth: "800px"}} />
              <div style={{textAlign: "left"}}>
                <h5 className="title" style={{color: "rgb(151,72,50)"}}>
                  E3 SPECS
                </h5>
                <Table>
                  <tbody>
                    <tr>
                      <th>PAYLOAD:</th>
                      <th>Up to 500kg</th>
                    </tr>
                    <tr>
                      <th>RANGE:</th>
                      <th>80km</th>
                    </tr>
                    <tr>
                      <th>MOTOR:</th>
                      <th>8.4Kw</th>
                    </tr>
                    <tr>
                      <th>FEATURES:</th>
                      <th>Solar Powered</th>
                    </tr>

                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          </>
          :
          <div style={{padding: "10px"}}>
          <div style={{textAlign: "center", backgroundColor: "rgb(210,219,212)"}}>
            <div style={{paddingBottom: "25px"}}>
              <h5 className="title" style={{color: "rgb(151,72,50)"}}>
                E2
              </h5>
              <p style={{maxWidth: "900px", margin: "0 auto", marginBottom: "50px"}}>
                The E2 is lightweight, energy efficient and nimble enough for commuters and delivery drivers to navigate busy city streets with ease. The battery can be swapped in under 2 minutes, meaning you’ll never be off the road for long, and best of all, you can own the E2 for less than the cost of your daily commute.
              </p>
              <Button className="arc-ride-button">
                Pre-order via our App
              </Button>
            </div>
            <div style={{textAlign: "center", maxWidth: "800px", margin: "0 auto"}}>
              <img src={E2} />
              <div style={{textAlign: "left"}}>
                <h5 className="title" style={{color: "rgb(151,72,50)"}}>
                  E2 SPECS
                </h5>
                <Table>
                  <tbody>
                    <tr>
                      <th>RANGE</th>
                      <th>85km</th>
                    </tr>
                    <tr>
                      <th>TOP SPEED:</th>
                      <th>60km/h</th>
                    </tr>
                    <tr>
                      <th>LOAD:</th>
                      <th>200kg</th>
                    </tr>

                  </tbody>
                </Table>
              </div>
            </div>
          </div>

          <div className="section section-about-us" style={{textAlign: "center"}}>
            <div style={{paddingBottom: "25px"}}>
              <h5 className="title" style={{color: "rgb(151,72,50)"}}>
                E2+
              </h5>
              <p style={{maxWidth: "900px", margin: "0 auto", marginBottom: "50px"}}>
                Meet your new all-electric boda-boda. The high-speed, low-cost E2+ is equally at home making deliveries or carrying passengers and its simple battery swapping system means it is 50% cheaper to run than a petrol version, while maximising your time on the road.
              </p>
              <Button className="arc-ride-button">
                Buy now via our App
              </Button>
            </div>
            <div style={{textAlign: "center", maxWidth: "800px", margin: "0 auto"}}>
              <img src={E2Plus}/>
              <div style={{textAlign: "left"}}>
                <h5 className="title" style={{color: "rgb(151,72,50)"}}>
                  E2+ SPECS
                </h5>
                <Table>
                  <tbody>
                    <tr>
                      <th>RANGE</th>
                      <th>85km (160km 2 batteries)</th>
                    </tr>
                    <tr>
                      <th>TOP SPEED:</th>
                      <th>75km/h</th>
                    </tr>
                    <tr>
                      <th>LOAD:</th>
                      <th>250kg</th>
                    </tr>

                  </tbody>
                </Table>
              </div>
            </div>
          </div>

          <div className="section section-about-us" style={{textAlign: "center", backgroundColor: "rgb(210,219,212)"}}>
            <div style={{paddingBottom: "25px"}}>
              <h5 className="title" style={{color: "rgb(151,72,50)"}}>
                E3
              </h5>
              <p style={{maxWidth: "900px", margin: "0 auto", marginBottom: "50px"}}>
                Our highly efficient, market-leading E3 electric TukTuk offers quick, clean delivery of up to 500kg of goods while cutting running costs and benefiting from attractive leasing options. A passenger version, capable of carrying 4 people, is coming soon.
              </p>
              <Button className="arc-ride-button">
                Pre-order via our App
              </Button>
            </div>
            <div style={{textAlign: "center", maxWidth: "800px", margin: "0 auto"}}>
              <img src={E3}/>
              <div style={{textAlign: "left"}}>
                <h5 className="title" style={{color: "rgb(151,72,50)"}}>
                  E3 SPECS
                </h5>
                <Table>
                  <tbody>
                    <tr>
                      <th>PAYLOAD:</th>
                      <th>Up to 500kg</th>
                    </tr>
                    <tr>
                      <th>RANGE:</th>
                      <th>80km</th>
                    </tr>
                    <tr>
                      <th>MOTOR:</th>
                      <th>8.4Kw</th>
                    </tr>
                    <tr>
                      <th>FEATURES:</th>
                      <th>Solar Powered</th>
                    </tr>

                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          </div>
        }



        {!isMobile ?
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

export default LandingPage;
