import React from 'react'
import Landing from '../Components/Landing'

const Start = () => {

    const background = document.querySelector('#body')
    background.style.backgroundColor = '#121212'
    background.style.backgroundImage = ""

    return (
        <>
            <Landing />
        </>
    )
}

export default Start
