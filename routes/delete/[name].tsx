import {FreshContext, Handlers} from "$fresh/server.ts";

export const handler: Handlers = {
    DELETE : async (_req:Request, ctx: FreshContext) => {
        try{
            const { name } = ctx.params;
            const body= await req.json();
            const data = await fetch(`https://lospoquimones.deno.dev/${name}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body)
            });
            if(data.status === 200){
                return new Response(JSON.stringify({ mensaje: "Pokemon eliminado" }), {
                    headers: { "Content-Type": "application/json" },
                    status: 200
                });
            }
            return new Response(JSON.stringify({ mensaje: "Error al eliminar el pokemon" }), {
                headers: { "Content-Type": "application/json" },
                status: 400
            });
        }catch(e){
            return new Response(JSON.stringify({ error: e }), {
                headers: { "Content-Type": "application/json" },
                status: 500
            });
        }
    }}