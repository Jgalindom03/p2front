const BotoncrearP = () => {
    const handleClick = () => {
        window.location.href = "/crearPokemon";
      }
      return (
        <button  className="button" onClick={handleClick}>
          Crear Pokemon
        </button>
      );
    }
    
export default BotoncrearP;
