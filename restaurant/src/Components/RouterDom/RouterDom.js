import React from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from '../Home/Home'
import Restaurants from '../Restaurants/Restaurants'
import Friends from '../Friends/Friends'


export default function RouterPage() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            
              <Route path="/"  element={<Home/>} />
              <Route path="restaurants" element={<Restaurants/>} />
              <Route path="friends" element={<Friends/>} />
            
        </Routes>
        </BrowserRouter>
    </div>
  )
}

