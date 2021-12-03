import { memo } from 'react'
import { Link } from 'react-router-dom'
import { HelperBuscador } from '../Helpers/HelperBuscador'

const Result = ({lyric}) => {
    const {song, singer, youtubeLink, download} = HelperBuscador(lyric)

    const style = {
        width: '10rem',
        height: '10rem'
    }

    return (
        <>
            {download === "" &&
            <div className="d-flex justify-content-center align-items-center flex-column mx-5 px-5">
                {song === "" ? <h3>Estamos buscando tu canción</h3> : <h3>Encontrada! Ultimando detalles</h3> }
                <div className="spinner-border text-info" style={style} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            }
            {download !== "" &&
                <div>
                    <h3>Resultado:</h3>
                    Nombre del artista: { singer }
                    <br />
                    Nombre de la cancion: { song.title }
                    <br />
                    <img src={ song.images.coverart } alt="Cover art" />
                    <br />
                    <a href={ youtubeLink } target="noopener">Enlace a Youtube</a>
                    <br />
                    <a href={ download } target="noopener">Descarga la canción</a>
                    <br />
                    <Link to="/">Volver al inicio</Link>

                </div>
            }
        </>
        )
}

export default memo(Result)
