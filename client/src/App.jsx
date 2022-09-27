import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Location from './Components/Location';
import SideBar from './Components/SideBar';
import Home from './Pages/Home';
import LocationList from './Pages/LocationList';
import { AppContainer } from './Utils/Styles';

function App() {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <AppContainer>
      <SideBar 
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      <Routes>
         <Route path='/' element={<Home isOpen={isOpen}/>}/> 
         <Route path='/place/:id' element={<Location />}/> 
         <Route path='/location' element={<LocationList />}/> 
      </Routes>
    </AppContainer>
  )
};

export default App;
