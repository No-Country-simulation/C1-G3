import React from 'react'

const About = () => {
    return (
        <article>
            <div className="text-white d-flex flex-wrap" id="bgabout">
                <section className="m-5 text-start d-flex justify-content-center flex-column col"></section>
                <section className="m-5 text-start d-flex justify-content-center flex-column col">
                    <h2 className="m-3 display-3 fw-bold fst-italic">Sobre Nosotros</h2>
                    <p className="m-3 fs-3">
                    Zachary se basa en la necesidad de encontrar aquellas canciones que uno escucha
                    ya sea en Facebook, Instagram o algún vídeo de TikTok. <br /> <br />
                    Nuestro plan es brindar una cómoda experiencia de los usuarios, permitiendo que
                    puedan buscar aquellas canciones, y dando la posibilidad de descargarla.
                    </p>
                </section>
            </div>
            <div className="text-black d-flex flex-wrap" id="bg4">
                <section className="m-5 text-center d-flex flex-column col">
                    <h2 className="m-3 display-4 fw-bold">¿Quienes somos?</h2>
                    <p className="m-3 fs-4">
                        Somos Compañia Aleatoria 123, un proyecto fundado por Usuario Random en XXXX.
                        
                    </p>
                </section>
                <section className="m-5 text-center d-flex flex-column col">
                    <h2 className="m-3 display-4 fw-bold">Nuestro Objetivo</h2>
                    <p className="m-3 fs-4">
                        Desde el minuto uno, nuestro objetivo siempre fue ayudar a nuestros clientes
                        ofreciendo servicios de utilidad al público general y empresas.
                    </p>
                </section>
            </div>
            <div className="text-black d-flex flex-wrap" id="bg4">
                <section className="m-5 text-center d-flex flex-column col">
                    <h2 className="m-3 display-4 fw-bold">¿Qué es Zachary?</h2>
                    <p className="m-3 fs-4">
                        Zachary es un buscador de canciones basado en el motor de Shazam. <br />
                        Permite buscar canciones por Lyrics, nombre de canción o del artista. <br />
                        Brindamos historial local para guardar las búsquedas que realices,
                        y la posibilidad de descargar en formato .mp3 las canciones que buscas.
                    </p>
                </section>
                <section className="m-5 text-center d-flex flex-column col">
                    <h2 className="m-3 display-4 fw-bold">¿Por qué Zachary?</h2>
                    <p className="m-3 fs-4">
                        Es un pequeño homenaje a Zachary Levi, actor que dió vida al personaje de
                        Shazam en su película.
                    </p>
                </section>
            </div>
        </article>
    )
}

export default About
