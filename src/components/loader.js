import React from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function Loader() {

  const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{width: windowDimensions.width, height: windowDimensions.height, backgroundColor: "black"}}>

    </div>
  )
}

export default Loader;
