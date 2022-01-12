import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  
  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer saludo= 'Hola'/>
    <ItemDetailContainer/>
    <ItemCount/>
    </div>
  );
}

export default App;
