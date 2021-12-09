import React from 'react'
import About from '../Components/About'

const AboutUs = () => {

    const background = document.querySelector('#body')
    background.style.backgroundColor = '#121212'
    background.style.backgroundImage = ""

    return (
        <>
            <About />
        </>
    )
}

export default AboutUs
