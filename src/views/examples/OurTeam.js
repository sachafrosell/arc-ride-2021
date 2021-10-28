import React from "react";


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

import Rebah_Kitsimi from "../../assets/img/Rebah_Kitsimi.jpg";
import Dishon_Ochieng from "../../assets/img/Dishon_Ochieng.jpg";
import Magdalene_Maluta from "../../assets/img/Magdalene_Maluta.jpg";
import Vivien_Wambui from "../../assets/img/Vivien_Wambui.jpg";
import Warren_Ondaje from "../../assets/img/Warren_Ondaje.jpg";
import Jeremy_Kimbo from "../../assets/img/Jeremy_Kimbo.jpg";

import Moses_Nderity from "../../assets/img/Moses.png";
import Bede_Hesmondhalgh from "../../assets/img/Bede_Hesmondhalgh.jpg";
import Felix_Sawo_Wira from "../../assets/img/Felix_Sawo_Wira.jpg";
import Joanna_Cheong from "../../assets/img/Joanna_Cheong.jpg";
import Aliyyah_Alabi from "../../assets/img/Aliyyah_Alabi.jpg";
import Piyusha_Jadhav from "../../assets/img/Piyusha_Jadhav.png";

import Tunji from "../../assets/img/Tunji.png";
import Dougal from "../../assets/img/Dougal.png";
import Richard from "../../assets/img/Richard.png";
import Karl from "../../assets/img/Karl.png";
import Gurav from "../../assets/img/Gurav.png";
import Jo_Hurst_Croft from "../../assets/img/Jo_Hurst_Croft.jpg";


import InstagramDemo from "../../assets/img/instagram_demo.png";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}


function OurTeam() {

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
          <h1 className="title" style={{color: "rgb(151,72,50)", marginTop: "100px", marginBottom: "100px"}}>
            OUR TEAM
          </h1>

        </div>


        <div className="section section-about-us" style={{paddingTop: "50px", paddingLeft: "20px", paddingRight: "20px"}}>

          <Row>
            <Col>
              <img src={Rebah_Kitsimi}/>
              <h6 style={{paddingTop: "15px", marginBottom: "5px"}}>
                Rebah Kitsimi
              </h6>
              <p style={{paddingTop: "1px", fontSize: "14px"}}>
                Office Assistant
              </p>
            </Col>
            <Col>
              <img src={Dishon_Ochieng}/>
              <h6 style={{paddingTop: "15px", marginBottom: "5px"}}>
                Dishon Ochieng
              </h6>
              <p style={{paddingTop: "1px", fontSize: "14px"}}>
                Mechanic
              </p>
            </Col>
            <Col>
              <img src={Magdalene_Maluta}/>
              <h6 style={{paddingTop: "15px", marginBottom: "5px"}}>
                Magdalene Maluta
              </h6>
              <p style={{paddingTop: "1px", fontSize: "14px"}}>
                Mechanic
              </p>
            </Col>
            <Col>
              <img src={Vivien_Wambui}/>
              <h6 style={{paddingTop: "15px", marginBottom: "5px"}}>
                Vivien Wambui
              </h6>
              <p style={{paddingTop: "1px", fontSize: "14px"}}>
                Finance Assistant
              </p>
            </Col>
            <Col>
              <img src={Warren_Ondaje}/>
              <h6 style={{paddingTop: "15px", marginBottom: "5px"}}>
                Warren Ondaje
              </h6>
              <p style={{paddingTop: "1px", fontSize: "14px"}}>
                Kenya Operations Manager
              </p>
            </Col>
            <Col>
              <img src={Jeremy_Kimbo}/>
              <h6 style={{paddingTop: "15px", marginBottom: "5px"}}>
                Jeremy Kimbo
              </h6>
              <p style={{paddingTop: "1px", fontSize: "14px"}}>
                Engineer
              </p>
            </Col>
          </Row>

          <Row style={{paddingTop: "30px"}}>
            <Col>
              <img src={Moses_Nderity}/>
              <h6 style={{paddingTop: "15px", marginBottom: "5px"}}>
                Moses Nderity
              </h6>
              <p style={{paddingTop: "1px", fontSize: "14px"}}>
                Managing Director
              </p>
            </Col>
            <Col>
              <img src={Piyusha_Jadhav}/>
              <h6 style={{paddingTop: "15px", marginBottom: "5px"}}>
                Piyusha Jadhav
              </h6>
              <p style={{paddingTop: "1px", fontSize: "14px"}}>
                Head Engineer
              </p>
            </Col>
            <Col>
              <img src={Bede_Hesmondhalgh}/>
              <h6 style={{paddingTop: "15px", marginBottom: "5px"}}>
                Bede Hesmondhalgh
              </h6>
              <p style={{paddingTop: "1px", fontSize: "14px"}}>
                Head of Business Development
              </p>
            </Col>
            <Col>
              <img src={Felix_Sawo_Wira}/>
              <h6 style={{paddingTop: "15px", marginBottom: "5px"}}>
                Felix Sawo-Wira
              </h6>
              <p style={{paddingTop: "1px", fontSize: "14px"}}>
                Head of Operations

              </p>
            </Col>
            <Col>
              <img src={Joanna_Cheong}/>
              <h6 style={{paddingTop: "15px", marginBottom: "5px"}}>
                Joanna Cheong
              </h6>
              <p style={{paddingTop: "1px", fontSize: "14px"}}>
                CFO
              </p>
            </Col>
            <Col>
              <img src={Aliyyah_Alabi}/>
              <h6 style={{paddingTop: "15px", marginBottom: "5px"}}>
                Aliyyah Alabi
              </h6>
              <p style={{paddingTop: "1px", fontSize: "14px"}}>
                Finance Assistant
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
          <h1 className="title" style={{color: "rgb(151,72,50)", marginTop: "100px", marginBottom: "100px"}}>
            ADVISORY BOARD
          </h1>

        </div>

        <div className="section section-about-us" style={{paddingTop: "50px", paddingLeft: "20px", paddingRight: "20px"}}>
          <Row >
            <Col style={{textAlign: "center"}}>
              <img src={Tunji} style={{maxHeight: "300px"}}/>
            </Col>
            <Col style={{textAlign: "left"}}>
              <div style={{maxWidth: "500px", paddingTop: "30px"}}>
                <h5>
                  TUNJI LARDNER
                </h5>
                <span>
                </span>
                <p>
                  Tunji is a visionary thought leader and Africa Futurist who is an inaugural Global Ted Fellow and a current member of the advisory Board to TED Global Africa. He has advised Presidents and Global corporations and is a regular contributor to the media. He was recently a FORD Foundation / Arona Fellow and advises startups across Africa.
                </p>
              </div>

            </Col>
          </Row>
        </div>

        <div className="section section-about-us" style={{paddingTop: "50px", paddingLeft: "20px", paddingRight: "20px", backgroundColor: "rgb(212, 219, 213)"}}>
          <Row >
            <Col style={{textAlign: "center"}}>
              <img src={Dougal} style={{maxHeight: "300px"}}/>
            </Col>
            <Col style={{textAlign: "left"}}>
              <div style={{maxWidth: "500px"}}>
                <h5>
                  DOUGAL CORDEN
                </h5>
                <span>
                </span>
                <p>
                  Dougal joined Citi in 2019 and is responsible for carbon and continental power markets. He has 20 years experience in energy and environmental markets, including experience of working in an energy company, a utility and another financial institution. He has a BSc in Oceanography from the University of Plymouth and an MSc in Environmental Technology & Economics from Imperial College London. Additionally, Dougal is the Citi representative on
                  the Taskforce for Scaling Voluntary Carbon Markets (https://www. iif.com/tsvcm) and the offsets work stream of the Sustainable Markets Initiative Financial Services Taskforce (https://www. sustainable-markets.org/).
                </p>
              </div>

            </Col>
          </Row>
        </div>

        <div className="section section-about-us" style={{paddingTop: "50px", paddingLeft: "20px", paddingRight: "20px"}}>
          <Row >
            <Col style={{textAlign: "center"}}>
              <img src={Gurav} style={{maxHeight: "300px"}}/>
            </Col>
            <Col style={{textAlign: "left"}}>
              <div style={{maxWidth: "500px"}}>
                <h5>
                  GAURAV MALIK
                </h5>
                <span>
                </span>
                <p>
                  Gaurav was a Senior Manager at Uber India and brings fleet operations and management experience to the team. He was responsible for the Uber Eats business, and Uber’s expansion across markets in North India in addition to managing a number of strategic programs for the India & South Asia business. Gaurav is currently managing Stripe’s growth in Asia.
                  the Taskforce for Scaling Voluntary Carbon Markets (https://www. iif.com/tsvcm) and the offsets work stream of the Sustainable Markets Initiative Financial Services Taskforce (https://www. sustainable-markets.org/).
                </p>
              </div>

            </Col>
          </Row>
        </div>

        <div className="section section-about-us" style={{paddingTop: "50px", paddingLeft: "20px", paddingRight: "20px", backgroundColor: "rgb(212, 219, 213)"}}>
          <Row >
            <Col style={{textAlign: "center"}}>
              <img src={Richard} style={{maxHeight: "300px"}}/>
            </Col>
            <Col style={{textAlign: "left"}}>
              <div style={{maxWidth: "500px"}}>
                <h5>
                  RICHARD BOUMA - Chairman
                </h5>
                <span>
                </span>
                <p>
                  Richard is an experienced emerging markets investment banking, finance and management professional whose career has focussed on Africa for over 35 years. He held senior operational roles at Bank of America and HSBC, in both cases culminating in his managing their sub-Saharan operations.
                  the Taskforce for Scaling Voluntary Carbon Markets (https://www. iif.com/tsvcm) and the offsets work stream of the Sustainable Markets Initiative Financial Services Taskforce (https://www. sustainable-markets.org/).
                </p>
              </div>

            </Col>
          </Row>
        </div>

        <div className="section section-about-us" style={{paddingTop: "50px", paddingLeft: "20px", paddingRight: "20px"}}>
          <Row >
            <Col style={{textAlign: "center"}}>
              <img src={Karl} style={{maxHeight: "300px"}}/>
            </Col>
            <Col style={{textAlign: "left"}}>
              <div style={{maxWidth: "500px"}}>
                <h5>
                  KARL BOYCE - Co Founder / Director
                </h5>
                <span>
                </span>
                <p>
                  Karl brings more than 17 years of experience specifically in Africa, within renewable energy. He is the CEO of ARC Power and previously originated and structured a commercial scale biofuels project in Rwanda and provided consulting services to a range of international businesses in various sectors in Africa, including shipping in Tanzania, solar in South Africa, biofuels in Zambia and waste-to-energy in Malawi. Prior to this, Karl was an Investment Manager with Investec and Risk Director for FTSE-100 company, Vodafone.
                </p>
              </div>

            </Col>
          </Row>
        </div>

        <div className="section section-about-us" style={{paddingTop: "50px", paddingLeft: "20px", paddingRight: "20px", backgroundColor: "rgb(212, 219, 213)"}}>
          <Row >
            <Col style={{textAlign: "center"}}>
              <img src={Jo_Hurst_Croft} style={{maxHeight: "300px"}}/>
            </Col>
            <Col style={{textAlign: "left"}}>
              <div style={{maxWidth: "500px"}}>
                <h5>
                  JO HURST-CROFT - Founder / CEO
                </h5>
                <span>
                </span>
                <p>
                  Joseph is a serial entrepreneur and development specialist
                  who has 16 years of experience working in Africa. With a diverse background in peace building, environment protection and
                  high level strategic advisory Joseph has built and led several organisations in the profit and non-profit sectors. His experience leading and creating teams in challenging environments and global networks in the social impact space underpin ARC Rides operations and ability to scale rapidly.
                </p>
              </div>

            </Col>
          </Row>
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

export default OurTeam;
