import React,{ createContext, useState, useEffect } from "react";

const userContext = createContext();

const UserLocationProvider = ({children}) => {
  const [coords, setCoords] = useState({});
  const [ isReady, setIsReady ] = useState(false);

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const errors = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  const success = (pos) => {
    const crd = pos.coords;

    setCoords({
      latitude: crd.latitude,
      longitude: crd.longitude
    });

    setTimeout(() => {
      setIsReady(true)
    },500)
  //   console.log(`More or less ${crd.accuracy} meters.`);
  };

  useEffect(() => {
    const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            navigator.geolocation.getCurrentPosition(success);
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      alert("Sorry Not available!");
    }
  };
    getUserLocation()
  }, [])
  
  

  return(
    <userContext.Provider value={{ coords, isReady }}>
      {children}
    </userContext.Provider>
  )
};

export { userContext, UserLocationProvider}