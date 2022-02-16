import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Card from './Card';

function App() {
  
  return (
    <BrowserRouter>
      <NavBar/>            
      <Routes>                 
        <Route exact path='/' element={<ItemListContainer/>}/>
        <Route exact path='/productos/:idCategoria' element={<ItemListContainer/>}/>
        <Route exact path='/detail/:idId' element={<ItemDetailContainer/>}/>
        <Route exact path='/card' element={<Card/>}/>        
      </Routes>    
    </BrowserRouter>     
  );
}

export default App;
