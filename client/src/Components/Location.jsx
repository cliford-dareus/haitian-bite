import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getLocations } from '../helper/FetchLocation';
import { PopupCardTitle } from '../Utils/Styles/HomePage';
import { LocationDetailReviewContainer, 
        LocationPageContainer,
        LocationPageDetails, 
        LocationPageImage, 
        LocationPageReviewContainer, 
        LocationPageTitleContainer 
    } from '../Utils/Styles/locationPage';

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
            <>
                <LocationPageTitleContainer>
                    <PopupCardTitle>
                        {place.title}
                    </PopupCardTitle>
                    <p>{place.rating}</p>
                </LocationPageTitleContainer>

                <LocationPageImage>
                    <img src="" alt="" />
                </LocationPageImage>
                
                <LocationDetailReviewContainer>
                    <LocationPageDetails>
                        <PopupCardTitle>
                            About
                        </PopupCardTitle>
                        <div>
                            <p>{place.description}</p>
                            <p>{place.adress}</p>
                        </div>
                        
                    </LocationPageDetails>
                    <LocationPageReviewContainer>
                        <PopupCardTitle>
                            Review
                        </PopupCardTitle>

                        <p>{place.review}</p>
                    </LocationPageReviewContainer>
                </LocationDetailReviewContainer>
            </>
        }
    </LocationPageContainer>
  )
};

export default Location;