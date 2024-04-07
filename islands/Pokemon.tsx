import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { PageProps } from "$fresh/server.ts";
import { Pokemon } from "../types.ts";

type SeePokemonProps = {
    pokemon: Pokemon;
}

const P: FunctionComponent<SeePokemonProps> = (props) => {
    const { pokemon } = props;
    const [showModal, setModal] = useState(false);
    const [creator, setCreator] = useState("");
    const [error, setError] = useState(false);

    const eliminarpokemon = async () => {
        try{
            if(!creator){
                setError(true);
                return;
            }

            const response = await fetch(`/delete/${pokemon.name}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: pokemon.name,
                    creator: creator
                })
            });

            if(response.status === 200){
                alert("Pokemon eliminado correctamente");
            }else{
                setError(true);
            }
        }catch(e){
            alert("Error al eliminar el pokemon");
        }
    }

    return (
        {pokemon} && <div class = "pokemon1">
            <h1>{pokemon.name}</h1>
            <img src={pokemon.image} alt={pokemon.name} />
            <audio controls>
                <source src={pokemon.sound}  class = "audio"/>
            </audio>
            <button onClick={() => setModal(true)}>Eliminar pokemon</button>

            {showModal && (
                <div class = "ventana">
                    <div class = "ventana-eliminar">
                        <h2>Eliminar pokemon</h2>
                        <p>Para eliminar el pokemon, es necesario introducir el nombre del creador</p>
                        <input type="text" value={creator} onInput={(e) => setCreator(e.currentTarget.value)} />
                        <button onClick={eliminarpokemon}>Confirmar</button>
                        <button onClick={() => setModal(false)}>Cancelar</button>
                        {error && <p>Nombre del creador invalido</p>}
                    </div>
                </div>
            )}
        </div>
    );
}

export default P;