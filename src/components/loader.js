import React from "react";

import LogoWhite from "../assets/logos/arc_ride_white.png"

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
    <div style={{width: windowDimensions.width, height: windowDimensions.height, backgroundColor: "black"}}>

      <img src={LogoWhite} style={{position: "absolute", width: windowDimensions.width/3, left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}/>
    </div>
  )
}

export default Loader;
