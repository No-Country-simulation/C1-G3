import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container-fluid">
                    <h2 className="navbar-brand ms-3">
                        Buscador Musical
                    </h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="navbar-item">
                                <Link to="/" className="nav-link">Inicio</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/buscador" className="nav-link">Buscador</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/historial" className="nav-link">Historial</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/nosotros" className="nav-link">Sobre Nosotros</Link>
                            </li>
                        </ul>
                    </div>
                </div>
        </nav>
    )
}

export default Header