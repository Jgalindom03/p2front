import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { Pokemon } from "../types.ts";

const SearchPokemon: FunctionComponent = () => {
    const [name, setName] = useState<string>("");
    const [pokemons, setPokemons] = useState<Pokemon[]>();
    const [error, setError] = useState<boolean>(false);

    const search = async (e: Event, name: string) => {
        e.preventDefault();
        const response = await fetch(`/get/${name}`);
        const data = await response.json();
        setPokemons(data);
    }

    return (
        <div class = "searchPokemon">
            <form method="GET" onSubmit={(e) => search(e, name)} class = "buscar">
                <h1> Buscar pokemon</h1>
                <div>
                    <input type="text" id="name" name="name" value = {name} placeholder="Nombre"
                    onInput={(e) => {setName(e.currentTarget.value)}}
                    onFocus={() => {setError(false)}}
                    />
                </div>
                <button type="submit">Buscar</button>
            </form>
            {pokemons && 
                pokemons.map((pokemon) => (
                    <li key={pokemon._id}>
                        <a class="pokemon-container" href={`/pokemon/${pokemon.name}`}>
                            <img src={pokemon.image} alt={pokemon.name} />
                            <h2>{pokemon.name}</h2>
                        </a>
                    </li>
                ))
            }
            {error && <p>El pokemon no existe</p>}
        </div>
    );
}

export default SearchPokemon;