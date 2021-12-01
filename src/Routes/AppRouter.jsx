import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Components/Header'
import Start from '../Pages/Start'
import Searcher from '../Pages/Searcher'
import Record from '../Pages/Record'
import AboutUs from '../Pages/AboutUs'

const AppRouter = () => {
    return (
        <Router>
            <Header />

            <Routes>
                <Route path="/" element={ <Start /> } />
                <Route path="/buscador" element={ <Searcher /> } />
                <Route path="/historial" element={ <Record /> } />
                <Route path="/nosotros" element={ <AboutUs /> } />
            </Routes>
        </Router>
    )
}

export default AppRouter