import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {

    return (
        <article>
            <div className="container-fluid d-flex flex-wrap" id="bg">
                <section className="m-5 text-start d-flex justify-content-center flex-column text-white col">
                    <h2 className="text display-4 fw-bold">EL BUSCADOR QUE NO SABÍAS QUE NECESITABAS</h2>
                    <p className="text fs-2">
                        Encuentra esas canciones que tienes pegadas en tu cabeza pero no
                        recuerdas como se llaman
                    </p>
                    <Link to="/buscador"><button className="btn btn-outline-secondary text-white" id="btn-1">IR AL BUSCADOR</button></Link>
                </section>
                <section className="m-5 text-start flex-none col" />
            </div>
            <div className="container-fluid d-flex flex-wrap" id="bg2">
                <section className="m-5 text-start d-flex justify-content-center flex-column text-white col">
                    <h2 className="display-3 fst-italic fw-bold">PRESENTANDO ZACHARY</h2>
                    <p className="fs-4 fst-italic">
                        Encontramos las canciones que buscas basándonos en las Lyrics que ingreses. <br />
                        Historial local donde guardamos todas las canciones que encuentres. <br />
                        Posibilidad de descargar en formato .mp3 todas tus búsquedas
                    </p>
                </section>
                <section className="mt-5 d-flex justify-content-center flex-none col" id="image1" />
            </div>
            <div className="container-fluid d-flex flex-wrap" id="bg3">
                <section className="mt-5 d-flex justify-content-center flex-none col" id="image2" />
                <section className="m-5 text-start d-flex justify-content-center flex-column text-dark col">
                    <h2 className="display-4 fw-bold">BÚSQUEDA POR LYRICS</h2>
                    <p className="fs-4 fst-italic">
                        ¿Tienes pegada una parte de una letra de una canción que te gustó mucho,
                        pero no sabes su nombre? ¡Nosotros te ayudamos! <br />
                        En Zachary, solo tienes que cargarla, y nos encargamos del resto.
                    </p>
                    <Link to="/buscador"><button className="btn btn-outline-secondary text-dark" id="btn-1">IR AL BUSCADOR</button></Link>
                </section>
            </div>
            <div className="container-fluid d-flex flex-wrap" id="bg2">
                <section className="m-5 text-start d-flex justify-content-center flex-column text-white col">
                    <h2 className="display-3 fw-bold">HISTORIAL DE BÚSQUEDA</h2>
                    <p className="fs-4 fst-italic">
                        Guardamos las búsquedas en un historial local, para que puedas
                        revisar y administrar todas las canciones que hayas buscado.
                    </p>
                    <Link to="/historial"><button className="btn btn-outline-secondary text-white" id="btn-1">IR AL HISTORIAL</button></Link>
                </section>
                <section className="mt-5 d-flex justify-content-center flex-none col" id="image3" />
            </div>
            <div className="container-fluid d-flex flex-wrap" id="bg3">
                <section className="mt-5 d-flex justify-content-center flex-none col" id="image4" />
                <section className="m-5 text-start d-flex justify-content-center flex-column text-dark col">
                    <h2 className="display-4 fw-bold">DESCARGA LAS CANCIONES</h2>
                    <p className="fs-4 fst-italic">
                        En Zachary, puedes descargar en formato .mp3 las
                        canciones que busques.
                    </p>
                </section>
            </div>
            <div className="container-fluid" id="bg2">
                <header className="display-4 fw-bold p-4">¡USA ZACHARY DONDE <br /> Y CUANDO QUIERAS!</header>
                <p className="fs-4 fst-italic">
                    Usa Zachary en cualquier navegador, <br />
                    sea en tu PC, Laptop o Smartphone
                </p>
                <img src="https://cdn.discordapp.com/attachments/916540383524163604/917857407101726750/cocos2d-x-multi-device.png" alt="Multi-Device Logo" className="img-fluid" />
                <br />
                <Link to="/buscador"><button className="btn btn-outline-secondary text-white mb-5" id="btn-1">¡ADELANTE!</button></Link>
            </div>
        </article>
    )
}

export default Landing
