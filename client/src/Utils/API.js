const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:3000' : 'https://travel-log-api.now.sh';



export const getAllLocations = async () => {
    const response = await fetch(`${API_URL}/api/v1/location/`)
    const data = await response.json();
    return data.location;
};