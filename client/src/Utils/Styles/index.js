import styled from 'styled-components';

export const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
    display: grid;
    grid-template-columns: ${props => props.isOpen === true? `150px` : `55px`} auto;
    transition: all 1s;
`;

