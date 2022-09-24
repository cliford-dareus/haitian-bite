import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAllLocations } from '../Utils/API'

const Location = () => {
    const [ locations, setLocations ] = useState([]);

    const { pathname } = useLocation();
    const id = pathname.split('/:')[1];

    const getLocations = async () => {
        const locations = await getAllLocations();
        setLocations(locations);
    };

    const location = locations.filter((location) => {
        if(location._id === id ){
            return location
        }
    });

    useEffect(() => {
        getLocations()
    },[]);

   const place = location[0];
  return (
    <div>
        { 
            place&& 
            <div>
                {place.title}
            </div>
        }
    </div>
  )
};

export default Location;