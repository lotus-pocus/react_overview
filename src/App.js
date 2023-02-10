import React, { useState } from 'react';
import Header from './components/Header';

import Landing from './pages/Landing';
import Contact from './pages/Contact';
import Search from './pages/Search';


import {Routes, Route} from 'react-router-dom';


function App() {
  const [brand, setBrand] = useState('React Overview!');
  const [results, setResults] = useState(null);

  return (
    <div>
      <Header brand={brand} />


      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/contact" element={<Contact setBrand={setBrand} />} />
        <Route path="/search" element={<Search results={results} setResults={setResults}/>}  />
      </Routes>

      
    </div>
  );
}

export default App;