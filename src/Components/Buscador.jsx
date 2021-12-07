const Buscador = ({handleSubmit}) => {

    return (
        <>
            <div className="d-flex justify-content-center flex-column text-white h100 p-5 bg-secondary bg-opacity-25">          
                <h2 className="display-3 fw-bold">Buscador de canciones</h2>
                <p className="fs-4">¿Alguna canción que se te haya olvidado pero recuerdas una parte?</p>
                <p className="fs-4">Tranquilo, no eres el único al que le pasa</p>
                <p className="fs-5">Escribe la letra, y nosotros nos encargamos del resto</p>
                <form onSubmit={ handleSubmit }>
                    <label className="fs-5 fw-bold">
                    {" "}
                        Buscar por letra: <br /> <input className="input-group mb-3" type="text" name="inputText" /> {" "}
                        <button className="btn btn-primary" type="submit"> Buscar </button>
                    </label>
                </form>
            </div>
        </>
    )
}

export default Buscador
