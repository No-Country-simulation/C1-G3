import axios from 'axios'
import { useState } from 'react'
import Result from './Result'

const Buscador = () => {
    const [singer, setSinger] = useState("")
    const [song, setSong] = useState("")

    const buscarCancion = (lyric) => {
        const options = {
                method: "GET",
                url: "https://shazam.p.rapidapi.com/search",
                params: {
                term: lyric,
                locale: "en-US",
                offset: "0",
                limit: "5",
            },
                headers: {
                "x-rapidapi-host": "shazam.p.rapidapi.com",
                "x-rapidapi-key": "ff815cc32dmsh03e83356253bfc6p193d53jsn0898dcc16eb8",
            }
        }
        axios.request(options)
            .then(function (response) {
                const search = response.data;
                setSinger(search.artists.hits[0].artist.name)
                setSong(search.tracks.hits[0].track.title)
            }).catch(function (error) {
                console.error(error);
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        buscarCancion(e.target[0].value)
    }

    return (
        <>
            <h1>Buscador de canciones</h1>
            <form onSubmit={ handleSubmit }>
                <label>
                    {" "}
                    Buscar por letra: <input type="text" name="inputText" /> {" "}
                    <button type="submit"> Buscar </button>
                </label>
            </form>
        <hr />
        <Result singer={singer} song={song} />
        </>
    )
}

export default Buscador
