import {Link} from 'react-router-dom'
import Widget from './Widget'
import Carrito from './Carrito'


function NavBar() {
    return (
        
      <nav className="navbar navbar-expand-lg navbar-white bg-">
          <div className="container-fluid">
            <Link to= './'> <Widget/> </Link>              
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to= './productos/Cremas'>
                      <a className="nav-link active" aria-current="page">Cremas</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to= './productos/Jabones'>
                      <a className="nav-link">Jabones</a>  
                      </Link>                      
                    </li>
                    <li className="nav-item">
                      <Link to= './productos/Aceites'>
                      <a className="nav-link">Aceites</a>  
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to='./productos/Shampoo'>
                      <a className="nav-link">Shampoo</a>
                      </Link>                                
                    </li>
                    <li className="nav-item">
                      <Link to='./productos/Acondicionador'>
                      <a className="nav-link">Acondicionador</a>
                      </Link>                                
                    </li>

                    {/* <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Para el pelo</a>
                          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                              <li>
                                <Link to='./productos/Shampoo'>
                                <a className="dropdown-item">Shampoo</a>
                                </Link>                                
                              </li>
                              <li>
                                <Link to='./productos/Acondicionador'>
                                <a className="dropdown-item">Acondicionador</a>
                                </Link>                                
                              </li>  
                          </ul>
                    </li> */}
                </ul>
              </div>
              <Carrito/>
          </div>
           
      </nav>
    )
}

export default NavBar
