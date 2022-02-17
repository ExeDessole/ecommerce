import {Link} from 'react-router-dom'
import Widget from './Widget'
import Carrito from './CartWidget'


function NavBar() {
  
  return (
      
    <nav className="navbar navbar-expand-lg navbar-white bg-">
      <div className="container-fluid">
        <Link to= '/'> <Widget/> </Link>              
        
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to= '/productos/Cremas'>
              <span className="nav-link active" aria-current="page">Cremas</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to= '/productos/Jabones'>
              <span className="nav-link">Jabones</span>  
              </Link>                      
            </li>
            <li className="nav-item">
              <Link to= '/productos/Aceites'>
              <span className="nav-link" >Aceites</span>  
              </Link>
            </li>
            <div className="dropdown nav-link">
              <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Para el cabello...</button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link to='/productos/Shampoo'>
                <span className="dropdown-item">Shampoo</span>
                </Link>
                <Link to='/productos/Acondicionador'>
                <span className="dropdown-item">Acondicionador</span>
                </Link>
              </div>
            </div>
          </ul>
        </div>
        <Link to='/card'>
        <Carrito/>
        </Link>
      </div>           
    </nav>
  )
}

export default NavBar
