import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Counter from './components/Counter'
import CounterWithRedux from './components/CounterWithRedux';



function App() {
  return (
    <div>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/counter' element={<Counter />}/>
    <Route path='/counter-redux' element={<CounterWithRedux />} />
    </Routes>  
    

    </div>
  );
}


export default App;
