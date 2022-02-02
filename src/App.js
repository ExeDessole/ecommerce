import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Card from './Card';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';



function App() {
  
  return (
    <BrowserRouter>
        <NavBar/>
              
        <Routes>                 
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='/productos/:idCategoria' element={<ItemListContainer/>}/>
          <Route exact path='/detail/:idDetail' element={<ItemDetailContainer/>}/>
          <Route exact path='/card' element={<Card/>}/>        
        </Routes> 
      
    </BrowserRouter>
     
  );
}

export default App;
