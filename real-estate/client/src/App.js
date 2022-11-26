import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Signin from './components/Signin';
import Signup from './components/Signup';
import PropertyListingPage from './components/PropertyListingPage';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      
      <Route path='/' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/propertyListingPage' element={<PropertyListingPage/>}/>
      <Route path="/form" element={<Form/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
