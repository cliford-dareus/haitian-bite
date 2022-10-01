import { getAllLocations } from '../Utils/API';

export const getLocations = async () => {
    const locations = await getAllLocations();
    return locations;
};

export const geojsonData = {
  id: 'Route',
  type: 'line',
   source: {
    type: 'geojson',
    data: {}
  },
   layout: {
    'line-join': 'round',
    'line-cap': 'round'
  },
  paint: {
    'line-color': '#3887be',
    'line-width': 7,
    'line-opacity': 1
  }
};

export const startingLayer = {
  id: 'point',
  type: 'circle',
  source: {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Point',
            coordinates: []
          }
        }
      ]
    }
  },
  paint: {
    'circle-radius': 30,
    'circle-color': '#DAE86F'
  }      
};