import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import BasicInfo from './components/addNewProperty/BasicInfo';
import PropertyDetail from './components/addNewProperty/PropertyDetail';
import GeneralInfo from './components/addNewProperty/GeneralInfo';
import LocationInfo from './components/addNewProperty/LocationInfo';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="basic_info" element={<BasicInfo />} />
        <Route path="property_detail" element={<PropertyDetail />} />
        <Route path="general_info" element={<GeneralInfo />} />
        <Route path="location_info" element={<LocationInfo />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
