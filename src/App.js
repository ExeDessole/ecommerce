import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './Cart';
import {CartContextProvider} from './components/CartContext'


function App() {
  
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>            
        <Routes>                 
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='/productos/:idCategoria' element={<ItemListContainer/>}/>
          <Route exact path='/detail/:idId' element={<ItemDetailContainer/>}/>
          <Route exact path='/cart' element={<Cart/>}/>     
        </Routes>    
      </BrowserRouter>
    </CartContextProvider>    
  );
}

export default App;
