import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Location from './Components/Location';
import SideBar from './Components/SideBar';
import Home from './Pages/Home';
import { AppContainer } from './Utils/Styles';

function App() {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <AppContainer 
      isOpen={isOpen}
    >
      <SideBar 
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      <Routes>
         <Route path='/' element={<Home isOpen={isOpen}/>}/> 
         <Route path='/place/:id' element={<Location />}/> 
      </Routes>
    </AppContainer>
  )
};

export default App;
