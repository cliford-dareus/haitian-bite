import React from 'react';
import { FaRoute } from 'react-icons/fa'
import { PopupImageContainer, 
        PopupItemDetailsContainer, 
        PopupItemsContainer, 
        PopupRoutingButton, 
        PopupCardTitle, 
        PopupButton 
    } from '../Utils/Styles/HomePage';


const PopupContent = ({location, setRoute}) => {
  return (
    <PopupItemsContainer>

        <PopupImageContainer>
            <img src={location.image} alt="" />
            <PopupRoutingButton
                onClick={() => setRoute({longitude:location.longitude,latitude: location.latitude})}
            >
                <FaRoute />
            </PopupRoutingButton>
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
  )
}

export default PopupContent;