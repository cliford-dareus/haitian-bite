import { getAllLocations } from '../Utils/API'

export const getLocations = async () => {
    const locations = await getAllLocations();
    return locations;
};