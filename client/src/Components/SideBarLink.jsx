import React from 'react';
import { SideBarLinkItemsContainer, SideBarLinkItems, SideBarLinkSpan } from '../Utils/Styles/SideBar';

const SideBarLink = ({ data}) => {
  const { name, to, icon } = data;
  
  return ( 
    <SideBarLinkItemsContainer>
        <SideBarLinkItems 
          to={to}
        >
          <SideBarLinkSpan>
            {icon}
          </SideBarLinkSpan>
          <SideBarLinkSpan>
            {name}
          </SideBarLinkSpan>
        </SideBarLinkItems>
    </SideBarLinkItemsContainer>
  );
};

export default SideBarLink;