import React from 'react'

const record = localStorage.getItem('history')
const history = record === "" ? [] : JSON.parse(record)

const History = () => {

    const handleDelete = (e) => {
        e.preventDefault()
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
                                <th className="text-secondary"><a href={ele.link} target="noopener">Youtube</a></th>
                                <th className="text-secondary"><a href={ele.descarga} target="noopener">Descarga</a></th>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <button className="btn btn-danger" onClick={handleDelete}>Borrar Historial</button>
        </>
    )
}

export default History
