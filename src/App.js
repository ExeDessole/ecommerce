import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';



function App() {
  
  return (
    <BrowserRouter>
        <NavBar/>
        <ItemListContainer/>
        <ItemDetailContainer/>
{/*         
          <Routes>         
            <Route exact path='/' element={<ItemListContainer saludo= 'Hola'/>}/>
            <Route exact path='/' element={<NavBar/>}/>
            
            
          </Routes>  */}
      
    </BrowserRouter>
     
  );
}

export default App;
