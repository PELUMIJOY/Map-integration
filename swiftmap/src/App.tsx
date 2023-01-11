import React from 'react';
// import logo from './logo.svg';
import Ridermap from './components/Ridermaps/Ridermap'
import { Routes, Route , BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import RiderMapView from './components/RiderMaptView';
import Riderrequestaccepted from './components/Ridermaps/Riderrequestaccepted';

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path='/riders-accept-order-view' element={ <Ridermap/>}/>
        <Route path='/accept-request' element={<Riderrequestaccepted/>}/>
      </Routes>
    </Router>
    
      {/* <RiderMapView/> */}
    </>

  );
}

export default App;
