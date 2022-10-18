import './App.css';
import Home from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import GameIntro from './GameIntro';
import GamePlay from './GamePlay';
import {Navigation} from './Navigation';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <iframe className="iframe" width="560" height="315" 
                src="https://www.youtube.com/embed/UKRYHQALlAI?mute=1&autoplay=1&showinfo=0&controls=0&loop=1"/>
    <div className="container">
    
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/department' element={<Department/>}/>
        <Route path='/employee' element={<Employee/>}/>
        <Route path='/gameIntro' element={<GameIntro/>}/>
        <Route path='/game' element={<GamePlay/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
