import React from 'react';
import { Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Navbar from './components/Navbar';
import Tutors from './components/Tutors';
import Languages from './components/Languages'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Tutors />} />
        <Route path='/languages' element={ <Languages />} />
      </Routes>
     <Navbar />
    </div>
  );
}

export default App;
