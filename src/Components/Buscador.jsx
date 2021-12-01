const Buscador = ({handleSubmit}) => {

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
        </>
    )
}

export default Buscador
