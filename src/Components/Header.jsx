import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/shazamLogo.png'

const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-secondary navbar-expand-lg">
            <div className="container-fluid">
                    <h2 className="navbar-brand m-0">
                        <Link to="/" className="text-decoration-none"> <img src={logo} height="30" alt="Searcher Logo" /> </Link>
                        <Link to="/" className="fs-4 fw-bolder text-decoration-none text-light">Zachary</Link>
                    </h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-lg-0">
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