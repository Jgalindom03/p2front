import { useState, useEffect } from "preact/hooks";
import { Pokemon } from "../types.ts";
import { FunctionComponent } from "preact";

const ListaPokemones: FunctionComponent = () => {
    const [ListaPokemones, setPokemones] = useState<Pokemon[]>([]);
    useEffect(() => {
        const P= async()=>{
            const response= await fetch("/api/get")
            const data= await response.json();
            setPokemones(data);
        }
        P();
    }, []);
    return (
            <div class= "pokemon">
            <ul>
                    {ListaPokemones.map((pokemon:Pokemon) => (
                        <li key={pokemon._id}>
                        <a class="pokemon-container" href={`/pokemon/${pokemon.name}`}>
                            <img src={pokemon.image} alt={pokemon.name} />
                            <h2>{pokemon.name}</h2>
                            <audio controls src={pokemon.sound} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
};
export default ListaPokemones;