import React from "react";

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
  let logodimensionsw

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={props.opacity} style={{width: windowDimensions.width, height: windowDimensions.height, backgroundColor: "black", position: "absolute", zIndex: "10000"}}>

      <img src={LogoWhite} style={{position: "relative", width: windowDimensions.width/3, left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}/>
    </div>
  )
}

export default Loader;
