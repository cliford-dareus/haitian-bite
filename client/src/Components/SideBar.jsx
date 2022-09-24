import React from 'react';
import { sideBarData } from '../Utils/SideBarData';
import { SideBarContainer, SideBarContainerStyled,SideBarLogoContainer,SideBarLogoLink, SideBarLinksContainer } from '../Utils/Styles/SideBar';
import SideBarLink from './SideBarLink';
import { IoRestaurantOutline } from 'react-icons/io5'

const SideBar = ({ isOpen, setIsOpen }) => {

  return (
    <SideBarContainer 
        onMouseEnter={()=> setIsOpen(isOpen = true)} 
        onMouseLeave={() => setIsOpen(false)}
        variant={isOpen}
    >
        <SideBarContainerStyled>
            <SideBarLogoContainer>
                <SideBarLogoLink to={'/'}>
                    <IoRestaurantOutline/>
                    <span>Logo</span>
                </SideBarLogoLink>
            </SideBarLogoContainer>
            
            <SideBarLinksContainer>
                { sideBarData.map((item) => {
                    return(
                        <SideBarLink 
                            data = {item}
                        />
                    )
                })}
            </SideBarLinksContainer>
        </SideBarContainerStyled>
    </SideBarContainer>
  )
};

export default SideBar;