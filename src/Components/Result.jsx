import { memo } from 'react'
import { Link } from 'react-router-dom'
import { HelperBuscador } from '../Helpers/HelperBuscador'

const Result = ({lyric}) => {
    const {song, singer, youtubeLink, download, idLink} = HelperBuscador(lyric)

    const style = {
        width: '10rem',
        height: '10rem'
    }

    const background = document.querySelector('#body')

    if(download !== ""){
        background.style.backgroundColor = '#121212'
        background.style.backgroundImage = ""
    }

    return (
        <>
            {download === "" &&
            <div className="position-absolute top-50 start-50 translate-middle display-2">
                {song === "" ? <h3 className="display-3 fw-bold">Estamos buscando tu canción</h3> : <h3 className="display-3 fw-bold">Encontrada! Ultimando detalles</h3> }
                <div className="spinner-border text-info" style={style} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            }
            {download !== "" &&
                <div className="container">
                    <header>
                        <h3 className="display-3 fw-bold">¡Resultados finales!</h3>
                    </header>
                    <div className="d-flex flex-wrap">
                        <section className="m-5 text-start flex-none col">
                            <h5 className="fs-3">Nombre del artista: <br /> { `- ${singer}` }</h5>
                            <h5 className="fs-3">Nombre de la cancion: <br /> { `- ${song.title}` }</h5>
                            <br />
                            <img src={ song.images.background } alt="Artist" height="200" className="m-1" />
                            <img src={ song.images.coverart } alt="Cover art" height="200" className="m-1" />       
                        </section>
                        <section className="text-center m-5 col">
                            <h6 className="fs-4 fw-bold"><a href={youtubeLink} target="noopener">Enlace a Youtube</a></h6>
                            <br />
                            <iframe src={`https://www.youtube.com/embed/${idLink}`} title="Enlace de Youtube" height="400" width="600"></iframe>
                            <br />
                            <a href={ download } target="noopener">Descarga la canción</a>
                            <br />
                            <Link to="/">Volver al inicio</Link>
                        </section>
                    </div>

                </div>
            }
        </>
        )
}

export default memo(Result)
