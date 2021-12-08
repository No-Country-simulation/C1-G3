import React from 'react'
import History from '../Components/History'

const Record = () => {

    const background = document.querySelector('#body')
    background.style.backgroundColor = '#121212'
    background.style.backgroundImage = ""

    return (
        <div>
            <h2 className="fs-1 p-3 text-white fw-bold">Historial de busqueda</h2>
            <History />
        </div>
    )
}

export default Record
