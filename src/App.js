import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Counter from './components/Counter'
import UserList from './components/UserList';
import Employees from './components/Employees';
import CounterWithRedux from './components/CounterWithRedux';



function App() {
  return (
    <div>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/counter' element={<Counter />}/>
    <Route path='/counter-redux' element={<CounterWithRedux />} />
    <Route path='/employees' element={<Employees />}/> 
    <Route path='/userlist' element={<UserList />}/>
    </Routes>  
    

    </div>
  );
}


export default App;
