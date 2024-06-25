

import { httpClient } from "../puglins";

export const getPokemonById = async ( id: string|number ) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

    const pokemon = await httpClient.get( url );

    //const resp = await fetch( url )
    //const pokemon = await resp.json()

    //throw new Error('Pokemon no existe')

    return pokemon.name



/*-- esta es una forma ya no usada
    fetch( url ).then( ( response ) => {
        response.json().then( ( pokemon )=> {
            //console.log(pokemon.name);
            callback( pokemon.name )
        })
    } )
*/
}



