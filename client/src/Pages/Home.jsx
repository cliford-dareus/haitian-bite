import React,{ useEffect, useState, useContext } from 'react';
import Map,{ Marker, Popup, Layer, Source } from 'react-map-gl';
import { userContext } from '../Context/UserCoordContext';
import 'mapbox-gl/dist/mapbox-gl.css';
import SearchForm from '../Components/SearchForm';
import Loading from '../Components/Loading';
import pin from '../assets/pin.png';
import ypin from '../assets/ypin.png';

import { getLocations, geojsonData, startingLayer } from '../helper/FetchLocation';
import { getDirections } from '../Utils/API';
import { HomePageContainer, MarkerTitle } from '../Utils/Styles/HomePage';
import   PopupContent from '../Components/Popup';

const Home = ({ isOpen}) => {
  const { coords, isReady } = useContext(userContext);
  const [ locations, setLocations ] = useState([]);
  const [ showPopup, setShowPopup ] = useState({});
  const [ geojson, setGeoJson ] = useState({});
  const [ route, setRoute ] = useState({});
  const [ routeLayer, setRouteLayer ] = useState(geojsonData);
  const [ startLayer, setStartLayer ] = useState({...startingLayer});
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
    if(route === null) return
    const routeToLocation = async () => {
      const direction = await getDirections(coords, route);
      const directionRoutes = direction.routes[0].geometry.coordinates
      setGeoJson({
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: directionRoutes
        }
      });
    };
    routeToLocation();
  },[route]);

  useEffect(() => {
    setRouteLayer(() => (
        { ...routeLayer, source :{type : 'geojson',
        data: geojson}}
      ));
  }, [geojson]);
 
  useEffect(() => {
    const locations = async() => {
      const locations = await getLocations();
      await getDirections(coords, coords);
      setStartLayer({...startLayer, source: { data: { features:{geometry:{ coordinates: [coords.longitude, coords.latitude]}}}}});
      setLocations(locations);
    };
    locations();
    setViewport({...viewport, longitude: coords.longitude, latitude: coords.latitude});
  },[isReady]);

  return (
    <HomePageContainer>
      <SearchForm/>
      {isReady? <Map 
        reuseMaps
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
                  <PopupContent 
                    location={location}
                    setRoute={setRoute}
                  />
                </Popup>
              ) 
            }
          </React.Fragment>
        ))};
            <Source id="my-data" type="geojson" data={geojson}>     
              { routeLayer.source.data !== null && <Layer { ...routeLayer}/>}
            </Source>
      </Map> 
      : 
      <Loading />}
    </HomePageContainer>
  )
};

export default Home;