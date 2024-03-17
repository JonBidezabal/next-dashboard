import { SimplePokemon } from "../interfaces/simple-pokemon";
import { PokemonCard } from "./PokemonCard";

interface Props {
    pokemones: SimplePokemon[];
}
export const PokemonGrid = ({pokemones}: Props) => { 
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">

    {pokemones.map(pokemon => 
    <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        // <Image
        //     key={pokemon.id}
        //     src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${pokemon.id}.png`}
        //     width={100}
        //     height={100}
        //     alt={pokemon.name} />
    )}

</div>
  )
}
