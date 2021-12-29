import React from 'react'

function NavBar() {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Food and Beer</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Pizzas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Empanadas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Tartas</a>
              </li>
              <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Bebidas</a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Cervezas</a></li>
                        <li><a className="dropdown-item" href="#">Sin Alcohol</a></li>  
                    </ul>
              </li>
            </ul>
          </div>
        </div> 
      </nav>
    )
}

export default NavBar
