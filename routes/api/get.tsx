import {FreshContext, Handlers} from "$fresh/server.ts";


export const handler: Handlers = {
    GET : async (_req:Request, ctx: FreshContext) => {
        try{
            const data = await fetch(`https://lospoquimones.deno.dev`);
            const listapokemones = await data.json();
            return new Response(JSON.stringify(listapokemones), {
                headers: { "Content-Type": "application/json" },
                status: 200
            });
        
        }catch(e){
            return new Response(JSON.stringify({ error: e }), {
                headers: { "Content-Type": "application/json" },
                status: 500
            });
        }
    }}