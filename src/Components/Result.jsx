import React from 'react'

const Result = ({ singer, song }) => {
    return (
        <>
            <h3>Resultado:</h3>
            Nombre del artista: { singer }
            <br />
            Nombre de la cancion: { song }
        </>
    )
}

export default Result
