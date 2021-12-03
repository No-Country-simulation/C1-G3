const Buscador = ({handleSubmit}) => {

    return (
        <div>           
            <h2>Buscador de canciones</h2>
            
            <form onSubmit={ handleSubmit }>
                <label>
                {" "}
                    Buscar por letra: <br /> <input className="input-group mb-3" type="text" name="inputText" /> {" "}
                    <button className="btn btn-primary" type="submit"> Buscar </button>
                </label>
            </form>
        </div>
    )
}

export default Buscador
