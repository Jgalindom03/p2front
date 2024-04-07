import {FreshContext} from "$fresh/server.ts";
import Botoncasa  from "../islands/Botoncasa.tsx";
import BotoncrearP from "../islands/BotoncrearP.tsx";
import Botonbuscar  from "../islands/Botonbuscar.tsx";

export default async function Layout(req:Request, ctx:FreshContext) {
    return (
        <div>
        <div class ="layout">
            <h1 class ="layout2">Lista de Pokemones</h1>
             <Botoncasa/>
             <BotoncrearP/>
             <Botonbuscar/>
        </div>
        <ctx.Component/>              

        </div>
    )
}