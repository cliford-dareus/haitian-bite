import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const SideBarContainer = styled.div`
    transition: all 1s;
    width: ${props => props.variant === true? `150px` : `55px`};
`;

export const SideBarContainerStyled = styled.div`
    background-color: black;
    height: 100vh;
    padding: 2em 0;
    color: white;
    display: flex;
    flex-direction: column;
    // align-items: center;
    overflow: hidden;
    transition: all 1s cubic-bezier(0.55, 0.06, 0.68, 0.19);
`;

export const SideBarLogoContainer = styled.div`
    width: 100%;
    // height: 70px;
    padding: 0 1em;
    display: flex;
    align-items: center;
`;

export const SideBarLogoLink = styled(Link)`
    color: white;
    cursor: pointer;
    font-size: 1.5rem;
    text-decoration: none;
    display: flex;
    gap: 1em;
`;

export const SideBarLinksContainer = styled.div`
    width: 100%;
    // height: 100%;
    padding: 1em;
    display: flex;
    flex-direction: column;
    color: white;
    margin-top: 5em;
`;

export const SideBarLinkItemsContainer = styled.div`
    // padding: .5em;
    margin-bottom: 3em;
    // background-color: white;
`;

export const SideBarLinkItems = styled(Link)`
    color: white;
    text-decoration: none;
    font-weight: bold;
    display: flex;
    gap: 1.5em;
    &:hover{
        color: yellow;
    };
`;
    
export const SideBarLinkSpan = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    &:nth-child(1){
        font-size: 1.7rem
    }
`;