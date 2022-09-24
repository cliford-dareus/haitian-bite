import styled from 'styled-components';

export const SearchFormContainer = styled.div`
    position: absolute;
    min-width: 50%;
    height: 30px;
    border-radius: .5em;
    overflow: hidden;
    top: 2em;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    z-index: 22;
`;

export const SearchFormInput = styled.input`
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    padding: .5em;
`;