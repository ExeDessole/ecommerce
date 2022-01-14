import React from 'react'

function NavBar() {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="./imagenes/logo.png">Menu</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="./imagenes/botellas.jpg">Cremas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./imagenes/botellas.jpg">Jabones</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./imagenes/botellas.jpg">Aceites</a>
              </li>
              <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="./imagenes/botellas.jpg" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Para el pelo</a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="./imagenes/botellas.jpg">Shampoo</a></li>
                        <li><a className="dropdown-item" href="./imagenes/botellas.jpg">Acondicionador</a></li>  
                    </ul>
              </li>
            </ul>
          </div>
        </div> 
      </nav>
    )
}

export default NavBar
