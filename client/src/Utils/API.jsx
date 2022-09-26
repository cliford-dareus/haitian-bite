const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:3000' : 'https://travel-log-api.now.sh';
const token = import.meta.env.VITE_APP_MAPBOX_TOKEN;



export const getAllLocations = async () => {
    const response = await fetch(`${API_URL}/api/v1/location/`)
    const data = await response.json();
    return data.location;
};

export const getDirections = async (start, end) => {
    const response = await fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${start.longitude},${start.latitude};${end.longitude},${end.latitude}?geometries=geojson&access_token=${token}`);
    const data = await response.json();
    return data
}

// getDirections()