import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { useState } from "preact/hooks";
import P from "../../islands/Pokemon.tsx";
import { Pokemon } from "../../types.ts"; // Add the missing import statement

export const handler: Handlers = {
    GET: async(_req:Request, ctx: FreshContext<unknown, Pokemon>) => {
        try {
            const { name } = ctx.params;
            const data = await fetch(`https://lospoquimones.deno.dev/${name}`);
            const pokemon = await data.json();
            return ctx.render(pokemon[0]);
        } catch (e) {
            return new Response(JSON.stringify({ error: e }), {
                headers: { "Content-Type": "application/json" },
                status: 500
            });
        }
    }
}
const Page=(props: PageProps<Pokemon>) =>{
    const { data } = props;
    return (
        <P pokemon={data} />
    );
}
export default Page; 