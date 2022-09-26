import styled from 'styled-components';

export const SearchFormContainer = styled.div`
    position: absolute;
    min-width: 50%;
    height: auto;
    padding: .5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: .5em;
    overflow: hidden;
    top: 2em;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    z-index: 22;
`;

export const SearchFormInputContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const SearchFormInput = styled.input`
    width: 95%;
    height: 100%;
    outline: none;
    border: none;
    padding: .5em;
`;

export const SearchResultContainer = styled.div`
    width: 100%;
`;

export const SearchResultContent = styled.div`
    width: 100%;
    padding: .5em;
    cursor: pointer;
    border-radius: .5em;
    &:hover{
        background: #aaa;
    }
`;