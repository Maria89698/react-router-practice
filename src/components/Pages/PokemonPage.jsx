import { PokemonForm } from "components/Pokemon/PokemonForm";
import { PokemonInfo } from "components/Pokemon/PokemonInfo";

export function PokemonPage (){
    return(
        <>
            <h1>Pokemon</h1>
            <PokemonForm/>
            {/* <PokemonInfo/> */}
        </>
    )
}