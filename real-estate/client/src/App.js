import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Signin from './components/Signin';
import Signup from './components/Signup';
import PropertyListingPage from './components/PropertyListingPage';
import BasicInfo from './components/AddNewProperty/BasicInfo';
import PropertyDetail from './components/AddNewProperty/PropertyDetails';
import GeneralInfo from './components/AddNewProperty/GeneralInfo';
import LocationInfo from './components/AddNewProperty/LocationInfo';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/propertyListingPage' element={<PropertyListingPage/>}/>
      <Route path='/basic_info' element={<BasicInfo/>}/>
      <Route path='/property_detail' element={<PropertyDetail/>}/>
      <Route path='/general_info' element={<GeneralInfo/>}/>
      <Route path='/location_info' element={<LocationInfo/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
