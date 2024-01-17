import { Route,Routes } from 'react-router-dom';
import './App.css';


import DrawerAppBar from './components/Nav';

import React from 'react';
import CountryList from './components/List';





const App = () => {
  return (
    <div>
      <DrawerAppBar/>
      <Routes>
        <Route path="/goto" element={<CountryList/>} />

      </Routes>
    </div>
  );
};

export default App;
