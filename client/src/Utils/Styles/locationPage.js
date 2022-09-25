import styled from "styled-components";


export const LocationPageContainer = styled.div`
    width: 100%;
    height: 100vh;
    color: white;
    transition: all 1s cubic-bezier(0.55, 0.06, 0.68, 0.19);
    padding: 2em;
`;

export const LocationPageTitleContainer = styled.div`
    width: 100%;
    display: flex;
    // justify-content: space-between;
    align-items: center;
    gap: 1em;
`;

export const LocationPageImage = styled.div`
    width: 100%;
    height: 250px;
    margin-top: 1em;
    border-radius: 1em;
    overflow: hidden;
`;

export const LocationDetailReviewContainer = styled.div`
    width: 100%;
    height: calc(100% - 320px);
    display: flex;
    justify-content: space-between;
    gap: 2em;
`;

export const LocationPageDetails = styled.div`
    width: 50%;
    background: black;
    border-radius: 1em;
    padding: 1em;
`;

export const LocationPageReviewContainer = styled.div`
    width: 50%;
    background: black;
    border-radius: 1em;
    padding: 1em;
`;
