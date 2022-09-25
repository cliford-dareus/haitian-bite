import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getLocations } from '../helper/FetchLocation';
import { LocationPageContainer } from '../Utils/Styles/locationPage';

const Location = () => {
    const [ locations, setLocations ] = useState([]);

    const { pathname } = useLocation();
    const id = pathname.split('/:')[1];

    const location = locations.filter((location) => {
        if(location._id === id ){
            return location;
        }
    });

    useEffect(() => {
        const locations = async() => {
            const location = await getLocations()
            setLocations(location);
        };
        locations();
    },[]);

    const place = location[0];

    return(
    <LocationPageContainer>
        { place && 
            <div>
                {place.title}
            </div>
        }
    </LocationPageContainer>
  )
};

export default Location;