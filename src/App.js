import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import imagenes from './components/imagenes/galeria.'
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import Card from './Card';


function App() {
  
  return (
    <BrowserRouter>
        <NavBar/>
        <ItemListContainer/>
        <img src= {imagenes[0]}/>
          {/* <Routes>         
            <Route exact path='/' element={<ItemListContainer saludo= 'Hola'/>}/>
            <Route exact path='/detalle/:idDetalle' element={<ItemDetailContainer/>}/>
            <Route exact path='/cart' element={<Card/>}/>
            <Route exact path='/ItemCount' element={<ItemCount/>}/>
            
          </Routes> 
       */}
    </BrowserRouter>
     
  );
}

export default App;
