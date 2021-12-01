import { useState } from 'react'
import Buscador from '../Components/Buscador'
import Result from '../Components/Result'

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

    return (
        <>
            {showSearcher ? <Buscador handleSubmit={handleSubmit} /> : null}
            {showResults ? <Result lyric={lyric} /> : null}
        </>
    )
}

export default Searcher