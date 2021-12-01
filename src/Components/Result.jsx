import { memo } from 'react'
import { HelperBuscador } from './../Helpers/HelperBuscador'

const Result = ({lyric}) => {
    
    const {song, singer, youtubeLink, download} = HelperBuscador(lyric)

    return (
        <>
            <h3>Resultado:</h3>
            Nombre del artista: { singer }
            <br />
            Nombre de la cancion: { song }
            <br />
            {youtubeLink !== "" && <a href={youtubeLink}>Enlace a Youtube</a>}
            <br />
            {download !=="" && <a href={download}>Descarga la canción</a>}
        </>
        )
}

export default memo(Result)
