import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const HomePageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    transition: width 1s cubic-bezier(0.55, 0.06, 0.68, 0.19);
    // background-color: red;
`;

export const MarkerTitle = styled.p`
    color: white;
    margin-top: -2.5em;
    text-align: center;
    width: 84px;
`;

export const LoadingContainer = styled.div`
    // width: 100%:
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
`;

export const PopupItemsContainer = styled.div`
    width: 250px;
    height: 350px;
    display: flex;
    flex-direction: column;
    gap: 1em;
    background-color: white;
    overflow: hidden;
`;

export const PopupImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 150px;
    overflow: hidden;
    background: blue;
`;

export const PopupItemDetailsContainer = styled.div`
    width: 100%;
    padding: .5em;
`;

export const PopupCardTitle = styled.h2`
`;

export const PopupButton = styled(Link)`
    display: inline;
    text-decoration: none;
    padding: 0.5em 1.5em;
    outline: none;
    border: none;
    border-radius: .5em;
    color: white;
    font-weight: bold;
    background: black;
    // box-shadow:0px 0px 4px 0px #000000 ;
    margin: 0 auto;
`; 

export const PopupRoutingButton = styled.button`
    position: absolute;
    padding: .5em;
    top: .2em;
    left: .2em;
    font-size: 1.5rem;
    color: white;
    outline: none;
    border: none;
    background: transparent;
`;