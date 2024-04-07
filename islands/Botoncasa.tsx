const Botoncasa = () => {
    const handleClick = () => {
        window.location.href = "/";
      }
      return (
        <button className="button" onClick={handleClick}>
          Volver a la página principal
        </button>
      );
    }
    
export default Botoncasa;
