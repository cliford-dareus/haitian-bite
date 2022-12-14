import React,{ useEffect, useState, useContext } from 'react';
import Map, { Marker, Popup} from 'react-map-gl';
import { userContext } from '../helper/UserLocation';
import 'mapbox-gl/dist/mapbox-gl.css';
import SearchForm from '../Components/SearchForm';
import Loading from '../Components/Loading';
import pin from '../assets/pin.png';
import ypin from '../assets/ypin.png'

import { getLocations } from '../helper/FetchLocation';

import { HomePageContainer, MarkerTitle, PopupButton, PopupCardTitle, PopupImageContainer, PopupItemDetailsContainer, PopupItemsContainer } from '../Utils/Styles/HomePage';


const Home = ({ isOpen}) => {
  const { coords, isReady } = useContext(userContext);
  const [ locations, setLocations ] = useState([]);
  const [ showPopup, setShowPopup ] = useState({});
  const [ viewport, setViewport ] = useState({
    width: `calc(100vw - ${isOpen? `150px` : `55px`}`,
    height: `calc(100vh - ${isOpen? `150px` : `55px`}`,
    longitude: coords.longitude,
    latitude: coords.latitude,
    zoom: 15
  });

  const handlePopup = (location) => {
    setShowPopup({ [location._id]: true });
    setViewport({...viewport, longitude: location.longitude, latitude: location.latitude});
  };

  useEffect(() => {
        const locations = async() => {
            const location = await getLocations()
            setLocations(location);
        };
        locations();
        setViewport({...viewport, longitude: coords.longitude, latitude: coords.latitude});
    },[isReady]);

  return (
    <HomePageContainer>
      <SearchForm />
      
      {isReady? <Map 
        { ...viewport}
        // mapStyle= "mapbox://styles/cliford-dareus/cl8cigcp7000314q6uklerz41"
        mapboxAccessToken = { import.meta.env.VITE_APP_MAPBOX_TOKEN}
        onMove={(evt) => setViewport(evt.viewport)}
      >

        {/* User Marker */}
        <Marker 
          longitude={coords.longitude} 
          latitude={coords.latitude}
          anchor="bottom" 
        >
          <img 
            src={ypin} 
            style={{width:`${6 *13}px`, height: `${6 * 13}px`}}
            alt="" 
          />
          <MarkerTitle>
            You're Here
          </MarkerTitle> 
        </Marker>

        {/* Location Marker */}
        {locations.map((location) => (
          <React.Fragment key={location._id}>
            <Marker
              latitude={location.latitude}
              longitude={location.longitude}
              anchor="bottom"
              onClick={() => handlePopup(location)}
            >
              <img 
                src={pin} 
                alt="" 
                style={{width:`${6 * 14}px`, height: `${6 * 14}px`}}
              />
              <MarkerTitle>
                {location.title}
              </MarkerTitle>
            </Marker>
            {
              showPopup[location._id] && (
                <Popup 
                  longitude={location.longitude} 
                  latitude={location.latitude}
                  closeButton={true}
                  closeOnClick={false}
                  dynamicPosition={true}
                  anchor="top"
                  onClose={() => setShowPopup({})}
                  style={{ padding: ''}}                
                >
                  <PopupItemsContainer>
                    <PopupImageContainer>
                      <img src={location.image} alt="" />
                    </PopupImageContainer>

                    <PopupItemDetailsContainer>
                      <PopupCardTitle>
                        {location.title}
                      </PopupCardTitle>
                      <p>{location.rating}</p>
                      <p>{location.adress}</p>
                      <p>{location.phone}</p>
                    </PopupItemDetailsContainer>

                    <PopupButton to={`/place/:${location._id}`}>
                      Read More
                    </PopupButton>
                  </PopupItemsContainer>
                </Popup>) 
            }
          </React.Fragment>
        ))};
      </Map> 
      : 
      <Loading />}
    </HomePageContainer>
  )
};

export default Home;