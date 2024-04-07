import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

export const AddForm: FunctionComponent = () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [sound, setSound] = useState("");
    const [creator, setCreator] = useState("");
    const [error, setError] = useState("");

    let erroe2 = false;
    const errorMsg: string[] = [];

    const validacion = () => {
        if(name === ""){
          erro2 = true;
          errorMsg.push("Falta el Nombre");
        }
        if(image === ""){
          erro2 = true;
          errorMsg.push("Falta la imagen");
        }
        if(sound === ""){
          erro2 = true;
          errorMsg.push("Falta el sonido");
        }
        if(creator === ""){
          erro2 = true;
          errorMsg.push("Falta el creador");
        }
        console.log(errorMsg)
        if(errorMsg.length > 0){
          setError(errorMsg.join(" | "));
        }else{
            setError("")
        }
    }

    const addPokemon = async (e: Event, name: string, image: string, sound: string, creator: string) => {
      e.preventDefault();  
      validacion();
      if(!erro2) {
        const response = await fetch("/api/post", {
                method: "POST",
                body: JSON.stringify({name, image, sound, creator})
        });
          const data = await response.json();
          if(data.error){
            setError(data.error)
          }else{
            alert("Pokemon metido con éxito");
          }
      }
    }

    return (
        <div class="form">
          <h1>Introduce los datos del Pokemon</h1>
          <form
            method={"POST"}
            onSubmit={(e) => {
              addPokemon(e, name, image, sound, creator)
            }}>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={"Introduce el name"}
                onInput={(e) => setName(e.currentTarget.value)}
                onFocus={() => setError("")}
                />
            </div>
            <div>
              <input
                type="text"
                id="image"
                name="image"
                placeholder={"Introduce la image"}
                onInput={(e) => setImage(e.currentTarget.value)}
                onFocus={() => setError("")}
              />
            </div>
            <div>
            <input
                type="text"
                id="sound"
                name="sound"
                placeholder={"INtroduce el sound"}
                onInput={(e) => setSound(e.currentTarget.value)}
                onFocus={() => setError("")}
              />
            </div>
            <div>
              <input
                type="text"
                id="creator"
                name="creator"
                placeholder={"Introduce el creator"}
                onInput={(e) => setCreator(e.currentTarget.value)}
                onFocus={() => setError("")}
              />
            </div>
              <button class = "centro" type="submit">Submit</button>
            
              <button type="reset" class="reset centro"
                onClick={() => {
                  setName("");
                  setImage("");
                  setSound("");
                  setCreator("");
                  setError("");
                }}
              >
                Reset
              </button>
            {error !== "" && <div class="span-2 error">{error}</div>}
          </form>
        </div>
      );
};
export default AddForm;