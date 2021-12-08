import React from "react";
import { isMobile } from 'react-device-detect';
import { browserName } from "react-device-detect";

import LogoWhite from "../assets/logos/arc_ride_white.png"

import "./fade.css"

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}




function Loader(props) {

  const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>

    <div className={props.opacity} style={{width: windowDimensions.width, height: windowDimensions.height, backgroundColor: "black", position: "absolute", zIndex: "10000"}}>
    {console.log(browserName)}
    {isMobile && browserName !== "Chrome" ?
      <h1 style={{position: "absolute", textAlign: "center", color: "white", fontSize: "18px", marginTop: "130px", padding: "20px"}}>
      For the best user experience please use Google Chrome
      </h1>
    :
    ""}
      <img alt="" src={LogoWhite} className="rotate" style={{position: "relative", width: windowDimensions.width/3, left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}/>

    </div>
    </>
  )
}

export default Loader;
