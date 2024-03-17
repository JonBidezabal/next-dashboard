import { PokemonGrid, PokemonesResponse, SimplePokemon } from '@/pokemones';
import Image from 'next/image';

const getPokemones = async (limit = 151, offset = 0): Promise<SimplePokemon[]> => {
    const data: PokemonesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}
    `).then(res => res.json());

    const pokemones = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,

    }))
    // throw new Error('Error no manejado')
    return pokemones;
}
export default async function PokemonesPage() {
    const pokemones = await getPokemones();
    const pokeStrings = JSON.stringify(pokemones)
    return (
        <div className="flex flex-col ">
            <span className="flex flex-col text-5xl my-5 justify-center items-center">Listado de pokemones <small>ESTATICO</small></span>

            <PokemonGrid pokemones={pokemones} />

        </div>
    );
}