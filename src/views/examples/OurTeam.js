import React from "react";
import { isMobile } from 'react-device-detect';
import disableScroll from 'disable-scroll';
import Loader from "components/loader.js";



// reactstrap components
import {
  Row,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import NairobiHeaderSmall from "components/Headers/NairobiHeaderSmall.js";
import DarkFooter from "components/Footers/DarkFooter.js";

import Rebah_Kitsimi from "../../assets/img/team/Rebah.jpg";
import Dishon_Ochieng from "../../assets/img/team/Dishon.jpg";
import Magdalene_Maluta from "../../assets/img/team/Magdalene.jpg";
import Vivien_Wambui from "../../assets/img/team/Vivien.jpg";
import Warren_Ondaje from "../../assets/img/team/Warren.jpg";
import Jeremy_Kimbo from "../../assets/img/team/Jeremy.jpg";

import Moses_Nderity from "../../assets/img/team/Moses.jpg";
import Bede_Hesmondhalgh from "../../assets/img/team/Bede.jpg";
import Felix_Sawo_Wira from "../../assets/img/team/Felix.jpg";
import Joanna_Cheong from "../../assets/img/team/Joanna.jpg";
import Aliyyah_Alabi from "../../assets/img/team/Aliyyah.jpg";
import Piyusha_Jadhav from "../../assets/img/team/Piyusha.jpg";

import Tunji from "../../assets/img/team/Tunji.jpg";
import Dougal from "../../assets/img/team/Dougal.jpg";
import Richard from "../../assets/img/team/Richard.jpg";
import Karl from "../../assets/img/team/Karl.jpg";
import Gurav from "../../assets/img/team/Gurav.jpg";
import Jo_Hurst_Croft from "../../assets/img/team/Jo.jpg";
import Hootan from "../../assets/img/team/Hootan.jpeg";


import InstagramDemo from "../../assets/img/instagram_demo.jpg";



function OurTeam() {

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


        {!isMobile ?
          <div className="section section-about-us" style={{paddingTop: "50px", paddingLeft: "20px", paddingRight: "20px"}}>

            <Row>
              <Col>
                <img alt=""src={Rebah_Kitsimi}/>
                <h6 style={{paddingTop: "15px", marginBottom: "5px", fontSize: "12px"}}>
                  Rebah Kitsimi
                </h6>
                <p style={{paddingTop: "1px", fontSize: "14px"}}>
                  Office Assistant
                </p>
              </Col>
              <Col>
                <img alt=""src={Dishon_Ochieng}/>
                <h6 style={{paddingTop: "15px", marginBottom: "5px", fontSize: "12px"}}>
                  Dishon Ochieng
                </h6>
                <p style={{paddingTop: "1px", fontSize: "14px"}}>
                  Mechanic
                </p>
              </Col>
              <Col>
                <img alt=""src={Magdalene_Maluta}/>
                <h6 style={{paddingTop: "15px", marginBottom: "5px", fontSize: "12px"}}>
                  Magdalene Maluta
                </h6>
                <p style={{paddingTop: "1px", fontSize: "14px"}}>
                  Mechanic
                </p>
              </Col>
              <Col>
                <img alt=""src={Vivien_Wambui}/>
                <h6 style={{paddingTop: "15px", marginBottom: "5px", fontSize: "12px"}}>
                  Vivien Wambui
                </h6>
                <p style={{paddingTop: "1px", fontSize: "14px"}}>
                  Finance Assistant
                </p>
              </Col>
              <Col>
                <img alt=""src={Warren_Ondaje}/>
                <h6 style={{paddingTop: "15px", marginBottom: "5px", fontSize: "12px"}}>
                  Warren Ondaje
                </h6>
                <p style={{paddingTop: "1px", fontSize: "14px"}}>
                  Kenya Operations Manager
                </p>
              </Col>
              <Col>
                <img alt=""src={Jeremy_Kimbo}/>
                <h6 style={{paddingTop: "15px", marginBottom: "5px", fontSize: "12px"}}>
                  Jeremy Kimbo
                </h6>
                <p style={{paddingTop: "1px", fontSize: "14px"}}>
                  Engineer
                </p>
              </Col>
            </Row>

            <Row style={{paddingTop: "30px"}}>
              <Col>
                <img alt=""src={Moses_Nderity}/>
                <h6 style={{paddingTop: "15px", marginBottom: "5px", fontSize: "12px"}}>
                  Moses Nderity
                </h6>
                <p style={{paddingTop: "1px", fontSize: "14px"}}>
                  Managing Director
                </p>
              </Col>
              <Col>
                <img alt=""src={Piyusha_Jadhav}/>
                <h6 style={{paddingTop: "15px", marginBottom: "5px", fontSize: "12px"}}>
                  Piyusha Jadhav
                </h6>
                <p style={{paddingTop: "1px", fontSize: "14px"}}>
                  Head Engineer
                </p>
              </Col>
              <Col>
                <img alt=""src={Bede_Hesmondhalgh}/>
                <h6 style={{paddingTop: "15px", marginBottom: "5px", fontSize: "12px"}}>
                  Bede Hesmondhalgh
                </h6>
                <p style={{paddingTop: "1px", fontSize: "14px"}}>
                  Head of Business Development
                </p>
              </Col>
              <Col>
                <img alt=""src={Felix_Sawo_Wira}/>
                <h6 style={{paddingTop: "15px", marginBottom: "5px", fontSize: "12px"}}>
                  Felix Sawo-Wira
                </h6>
                <p style={{paddingTop: "1px", fontSize: "14px"}}>
                  Head of Operations

                </p>
              </Col>
              <Col>
                <img alt=""src={Joanna_Cheong}/>
                <h6 style={{paddingTop: "15px", marginBottom: "5px", fontSize: "12px"}}>
                  Joanna Cheong
                </h6>
                <p style={{paddingTop: "1px", fontSize: "14px"}}>
                  CFO
                </p>
              </Col>
              <Col>
                <img alt=""src={Aliyyah_Alabi}/>
                <h6 style={{paddingTop: "15px", marginBottom: "5px", fontSize: "12px"}}>
                  Aliyyah Alabi
                </h6>
                <p style={{paddingTop: "1px", fontSize: "14px"}}>
                  Finance Assistant
                </p>
              </Col>

            </Row>


          </div>
          :
          <div className="section section-about-us" style={{paddingTop: "50px", paddingLeft: "20px", paddingRight: "20px"}}>

            <Row>
              <Col>
                <img alt=""src={Rebah_Kitsimi}/>
                <h6 style={{paddingTop: "15px", marginBottom: "5px", fontSize: "12px"}}>
                  Rebah Kitsimi
                </h6>
                <p style={{paddingTop: "1px", fontSize: "10px"}}>
                  Office Assistant
                </p>
              </Col>
              <Col>
                <img alt=""src={Dishon_Ochieng}/>
                <h6 style={{paddingTop: "15px", marginBottom: "5px", fontSize: "12px"}}>
                  Dishon Ochieng
                </h6>
                <p style={{paddingTop: "1px", fontSize: "10px"}}>
                  Mechanic
                </p>
              </Col>
              </Row>
              <Row>
              <Col>
                <img alt=""src={Magdalene_Maluta}/>
                <h6 style={{paddingTop: "15px", marginBottom: "5px", fontSize: "12px"}}>
                  Magdalene Maluta
                </h6>
                <p style={{paddingTop: "1px", fontSize: "10px"}}>
                  Mechanic
                </p>
              </Col>
              <Col>
                <img alt=""src={Vivien_Wambui}/>
                <h6 style={{paddingTop: "15px", marginBottom: "5px", fontSize: "12px"}}>
                  Vivien Wambui
                </h6>
                <p style={{paddingTop: "1px", fontSize: "10px"}}>
                  Finance Assistant
                </p>
              </Col>
              </Row>
              <Row>
              <Col>
                <img alt=""src={Warren_Ondaje}/>
                <h6 style={{paddingTop: "15px", marginBottom: "5px", fontSize: "12px"}}>
                  Warren Ondaje
                </h6>
                <p style={{paddingTop: "1px", fontSize: "10px"}}>
                  Kenya Operations Manager
                </p>
              </Col>
              <Col>
                <img alt=""src={Jeremy_Kimbo}/>
                <h6 style={{paddingTop: "15px", marginBottom: "5px", fontSize: "12px"}}>
                  Jeremy Kimbo
                </h6>
                <p style={{paddingTop: "1px", fontSize: "10px"}}>
                  Engineer
                </p>
              </Col>
            </Row>

            <Row style={{paddingTop: "30px"}}>
              <Col>
                <img alt=""src={Moses_Nderity}/>
                <h6 style={{paddingTop: "15px", marginBottom: "5px", fontSize: "12px"}}>
                  Moses Nderity
                </h6>
                <p style={{paddingTop: "1px", fontSize: "10px"}}>
                  Managing Director
                </p>
              </Col>
              <Col>
                <img alt=""src={Piyusha_Jadhav}/>
                <h6 style={{paddingTop: "15px", marginBottom: "5px", fontSize: "12px"}}>
                  Piyusha Jadhav
                </h6>
                <p style={{paddingTop: "1px", fontSize: "10px"}}>
                  Head Engineer
                </p>
              </Col>
              </Row>
              <Row>
              <Col>
                <img alt=""src={Bede_Hesmondhalgh}/>
                <h6 style={{paddingTop: "15px", marginBottom: "5px", fontSize: "12px"}}>
                  Bede Hesmondhalgh
                </h6>
                <p style={{paddingTop: "1px", fontSize: "10px"}}>
                  Head of Business Development
                </p>
              </Col>
              <Col>
                <img alt=""src={Felix_Sawo_Wira}/>
                <h6 style={{paddingTop: "15px", marginBottom: "5px", fontSize: "12px"}}>
                  Felix Sawo-Wira
                </h6>
                <p style={{paddingTop: "1px", fontSize: "10px"}}>
                  Head of Operations

                </p>
              </Col>
              </Row>
              <Row>
              <Col>
                <img alt=""src={Joanna_Cheong}/>
                <h6 style={{paddingTop: "15px", marginBottom: "5px", fontSize: "12px"}}>
                  Joanna Cheong
                </h6>
                <p style={{paddingTop: "1px", fontSize: "10px"}}>
                  CFO
                </p>
              </Col>
              <Col>
                <img alt=""src={Aliyyah_Alabi}/>
                <h6 style={{paddingTop: "15px", marginBottom: "5px", fontSize: "12px"}}>
                  Aliyyah Alabi
                </h6>
                <p style={{paddingTop: "1px", fontSize: "10px"}}>
                  Finance Assistant
                </p>
              </Col>

            </Row>


          </div>
        }


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

        {!isMobile ?
          <div>
            <div className="section section-about-us" style={{paddingTop: "50px", paddingLeft: "20px", paddingRight: "20px"}}>
              <Row >
                <Col style={{textAlign: "center"}}>
                  <img alt=""src={Tunji} style={{maxHeight: "300px"}}/>
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
                  <img alt=""src={Dougal} style={{maxHeight: "300px"}}/>
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
                  <img alt=""src={Gurav} style={{maxHeight: "300px"}}/>
                </Col>
                <Col style={{textAlign: "left"}}>
                  <div style={{maxWidth: "500px"}}>
                    <h5>
                      GAURAV MALIK
                    </h5>
                    <span>
                    </span>
                    <p>
                      Gaurav was a Senior Manager at Uber India and brings fleet operations and management experience to the team. He was responsible for the Uber Eats business, and Uber???s expansion across markets in North India in addition to managing a number of strategic programs for the India & South Asia business. Gaurav is currently managing Stripe???s growth in Asia.
                      the Taskforce for Scaling Voluntary Carbon Markets (https://www. iif.com/tsvcm) and the offsets work stream of the Sustainable Markets Initiative Financial Services Taskforce (https://www. sustainable-markets.org/).
                    </p>
                  </div>

                </Col>
              </Row>
            </div>

            <div className="section section-about-us" style={{paddingTop: "50px", paddingLeft: "20px", paddingRight: "20px", backgroundColor: "rgb(212, 219, 213)"}}>
              <Row >
                <Col style={{textAlign: "center"}}>
                  <img alt=""src={Richard} style={{maxHeight: "300px"}}/>
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
                    </p>
                  </div>

                </Col>
              </Row>
            </div>

            <div className="section section-about-us" style={{paddingTop: "50px", paddingLeft: "20px", paddingRight: "20px"}}>
              <Row >
                <Col style={{textAlign: "center"}}>
                  <img alt=""src={Karl} style={{maxHeight: "300px"}}/>
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
                  <img alt=""src={Jo_Hurst_Croft} style={{maxHeight: "300px"}}/>
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
            <div className="section section-about-us" style={{paddingTop: "50px", paddingLeft: "20px", paddingRight: "20px"}}>
              <Row >
                <Col style={{textAlign: "center"}}>
                  <img alt=""src={Hootan} style={{maxHeight: "300px"}}/>
                </Col>
                <Col style={{textAlign: "left"}}>
                  <div style={{maxWidth: "500px"}}>
                    <h5>
                      HOOTAN AHMADI
                    </h5>
                    <span>
                    </span>
                    <p>
                    Hootan trained as a plastic surgeon as well as obtaining a first degree in pharmacology, before leaving full time medicine to pursue various business ventures. A serial entrepreneur, he is the founder of a successful sports management company as well as owning and sitting on the board of a number of successful businesses.  Philanthropy is close to his heart and he is the founder of the Care Pack charity, which provides essential items for survival and dignity to London's homeless community every winter.
                    </p>
                  </div>

                </Col>
              </Row>
            </div>
          </div>
          :
          <div>
            <div className="section section-about-us" style={{paddingTop: "50px", paddingLeft: "20px", paddingRight: "20px"}}>

                  <img alt=""src={Tunji} style={{maxHeight: "300px"}}/>


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


            </div>

            <div className="section section-about-us" style={{paddingTop: "50px", paddingLeft: "20px", paddingRight: "20px", backgroundColor: "rgb(212, 219, 213)"}}>

                  <img alt=""src={Dougal} style={{maxHeight: "300px"}}/>

                  <div style={{maxWidth: "500px", paddingTop: "20px"}}>
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

            </div>

            <div className="section section-about-us" style={{paddingTop: "50px", paddingLeft: "20px", paddingRight: "20px"}}>

                  <img alt=""src={Gurav} style={{maxHeight: "300px"}}/>

                  <div style={{maxWidth: "500px", paddingTop: "20px"}}>
                    <h5>
                      GAURAV MALIK
                    </h5>
                    <span>
                    </span>
                    <p>
                      Gaurav was a Senior Manager at Uber India and brings fleet operations and management experience to the team. He was responsible for the Uber Eats business, and Uber???s expansion across markets in North India in addition to managing a number of strategic programs for the India & South Asia business. Gaurav is currently managing Stripe???s growth in Asia.
                      the Taskforce for Scaling Voluntary Carbon Markets (https://www. iif.com/tsvcm) and the offsets work stream of the Sustainable Markets Initiative Financial Services Taskforce (https://www. sustainable-markets.org/).
                    </p>
                  </div>

            </div>

            <div className="section section-about-us" style={{paddingTop: "50px", paddingLeft: "20px", paddingRight: "20px", backgroundColor: "rgb(212, 219, 213)"}}>

                  <img alt=""src={Richard} style={{maxHeight: "300px"}}/>

                  <div style={{maxWidth: "500px", paddingTop: "20px"}}>
                    <h5>
                      RICHARD BOUMA - Chairman
                    </h5>
                    <span>
                    </span>
                    <p>
                      Richard is an experienced emerging markets investment banking, finance and management professional whose career has focussed on Africa for over 35 years. He held senior operational roles at Bank of America and HSBC, in both cases culminating in his managing their sub-Saharan operations.
                    </p>
                  </div>


            </div>

            <div className="section section-about-us" style={{paddingTop: "50px", paddingLeft: "20px", paddingRight: "20px"}}>

                  <img alt=""src={Karl} style={{maxHeight: "300px"}}/>

                  <div style={{maxWidth: "500px", paddingTop: "20px"}}>
                    <h5>
                      KARL BOYCE - Co Founder / Director
                    </h5>
                    <span>
                    </span>
                    <p>
                      Karl brings more than 17 years of experience specifically in Africa, within renewable energy. He is the CEO of ARC Power and previously originated and structured a commercial scale biofuels project in Rwanda and provided consulting services to a range of international businesses in various sectors in Africa, including shipping in Tanzania, solar in South Africa, biofuels in Zambia and waste-to-energy in Malawi. Prior to this, Karl was an Investment Manager with Investec and Risk Director for FTSE-100 company, Vodafone.
                    </p>
                  </div>

            </div>

            <div className="section section-about-us" style={{paddingTop: "50px", paddingLeft: "20px", paddingRight: "20px", backgroundColor: "rgb(212, 219, 213)"}}>

                  <img alt=""src={Jo_Hurst_Croft} style={{maxHeight: "300px"}}/>

                  <div style={{maxWidth: "500px", paddingTop: "20px"}}>
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


            </div>
            <div className="section section-about-us" style={{paddingTop: "50px", paddingLeft: "20px", paddingRight: "20px"}}>

                  <img alt=""src={Hootan} style={{maxHeight: "300px"}}/>

                  <div style={{maxWidth: "500px", paddingTop: "20px"}}>
                    <h5>
                      HOOTAN AHMADI
                    </h5>
                    <span>
                    </span>
                    <p>
                      Hootan trained as a plastic surgeon as well as obtaining a first degree in pharmacology, before leaving full time medicine to pursue various business ventures. A serial entrepreneur, he is the founder of a successful sports management company as well as owning and sitting on the board of a number of successful businesses.  Philanthropy is close to his heart and he is the founder of the Care Pack charity, which provides essential items for survival and dignity to London's homeless community every winter.
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

export default OurTeam;
