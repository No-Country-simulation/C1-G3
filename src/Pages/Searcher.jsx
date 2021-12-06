import { useState } from 'react'
import Buscador from '../Components/Buscador'
import Result from '../Components/Result'

const bgs = [
    'https://cdn.discordapp.com/attachments/916540383524163604/916541718453690388/1348132.png',
    'https://cdn.discordapp.com/attachments/916540383524163604/916540585471520818/bg1.png',
    'https://cdn.discordapp.com/attachments/916540383524163604/916547304889143296/150-1506019_hq-definition-classical-music-images-collection-for-classical.jpg',
    'https://cdn.discordapp.com/attachments/916540383524163604/916547587841069226/High_resolution_wallpaper_background_ID_77701288882.jpg'
]

const Searcher = () => {

    const [showSearcher, setShowSearcher] = useState(true)
    const [showResults, setShowResults] = useState(false)
    const [lyric, setLyric] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setLyric(e.target[0].value)
        setShowSearcher(false)
        setShowResults(true)
    }

    const background = document.querySelector('#body')
    background.style.background = `url(${bgs[Math.floor(Math.random() * bgs.length)]}) center fixed`

    return (
        <>
            {showSearcher ? <Buscador handleSubmit={handleSubmit} /> : null}
            {showResults ? <Result lyric={lyric} /> : null}
        </>
    )
}

export default Searcher