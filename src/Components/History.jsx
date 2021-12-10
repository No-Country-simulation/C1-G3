import React from 'react'

const record = localStorage.getItem('history')
const history = record === "" ? [] : JSON.parse(record)

const History = () => {

    const handleClick = () => {
        localStorage.removeItem('history')
        alert('Historial de búsqueda borrado')
    }

    return (
        <>
            <table className="table border-0 text-white-50 table-dark table-striped">
                <thead>
                    <tr className="text-white">
                        <th scope="col">Nombre del Artista</th>
                        <th scope="col">Nombre de la cancion</th>
                        <th scope="col">Enlace a Youtube</th>
                        <th scope="col">Enlace de descarga</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        history !== null && history.map((ele) => {
                            return <tr>
                                <th className="text-secondary" scope="row">{ele.nombre}</th>
                                <th className="text-secondary">{ele.cancion}</th>
                                <th className="text-secondary"><a href={ele.link} target="noopener"><img src={"https://cdn.discordapp.com/attachments/916540383524163604/918994949737955348/580b57fcd9996e24bc43c545.png"} height={"30"} alt="Youtube Logo" /></a></th>
                                <th className="text-secondary"><a href={ele.descarga} target="noopener"><img src={"https://cdn.discordapp.com/attachments/916540383524163604/918996175066107944/download-1459071_960_720.png"} height={"30"} alt="Download" /></a></th>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <button className="btn btn-danger" onClick={handleClick}>Borrar Historial</button>
        </>
    )
}

export default History
