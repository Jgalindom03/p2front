const Botonbuscar = () => {
    const handleClick = () => {
        window.location.href = "/buscarpokemon";
      }
      return (
        <button  className="button"onClick={handleClick}>
          Buscar
        </button>
      );
    }
    
export default Botonbuscar;
