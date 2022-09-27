import React from 'react';
import { getLocations } from '../helper/FetchLocation'

const Favorite = () => {
  const [ locations, setLocations ] = useState([]);

  useEffect(() => {
    const getLocation = async () => {
      const data = await getLocations();
      setLocations(data);
    };
    getLocation();
  });

  return (
    <div>Favorite</div>
  )
};

export default Favorite;