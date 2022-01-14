import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import Card from './Card';


function App() {
  
  return (
    <BrowserRouter>
        <NavBar/>
          <Routes>         
            <Route exact path='/item' element={<ItemListContainer saludo= 'Hola'/>}/>
            <Route exact path='/detalle/:idDetalle' element={<ItemDetailContainer/>}/>
            <Route exact path='/cart' element={<Card/>}/>
            <ItemCount/>
          </Routes> 
      
    </BrowserRouter>
    
  );
}

export default App;
