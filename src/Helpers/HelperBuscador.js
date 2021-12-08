import axios from 'axios'
import { useState, useEffect } from 'react'
let blockers = [true, true, true]

export const HelperBuscador = (lyric) => {
    const [singer, setSinger] = useState("")
    const [song, setSong] = useState("")
    const [youtubeLink, setYoutubeLink] = useState("")
    const [idLink, setIdLink] = useState("")
    const [download, setDownload] = useState("")

    useEffect(() => {
        async function fetchData(){
            if((singer === "" && song === "") && blockers[0] === true ){
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
                    "x-rapidapi-key": process.env.REACT_APP_SHAZAM_KEY,
                    }
                }
                
                await axios.request(options)
                    .then(function (response) {
                        const search = response.data
                        setSinger(search.artists.hits[0].artist.name)
                        setSong(search.tracks.hits[0].track)
                        blockers[0] = false
                }).catch(function (error) {
                    console.error(error)
                })
            }

            if((singer !== "" && song !== "") && blockers[1] === true){
                const link = {
                    method: 'GET',
                    url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
                    params: {q: `${singer} ${song.title}`},
                    headers: {
                        'x-rapidapi-host': 'youtube-search-results.p.rapidapi.com',
                        'x-rapidapi-key': process.env.REACT_APP_YOUTUBE_SEARCHER_KEY
                    }
                }
                      
                await axios.request(link).then(function (response) {
                    const data = response.data
                    setYoutubeLink(data)
                    setIdLink(data.items[0].id)
                    blockers[1] = false
                }).catch(function (error) {
                    console.error(error)
                })
            }
        
            if((youtubeLink !== "" && song !== "") && blockers[2] === true){
                const opt = {
                    method: 'GET',
                    url: 'https://youtube-mp36.p.rapidapi.com/dl',
                    params: {id: idLink},
                    headers: {
                        'x-rapidapi-host': 'youtube-mp36.p.rapidapi.com',
                        'x-rapidapi-key': process.env.REACT_APP_YOUTUBE_DOWNLOADER_KEY
                    }
                }
                      
                await axios.request(opt).then(function (response) {
                    const data = response.data
                    setDownload(data.link)
                    blockers[2] = false
                }).catch(function (error) {
                        console.error(error)
                })
            }
        }
        
        fetchData()
    })
    return {singer, song, youtubeLink, download, idLink}
}