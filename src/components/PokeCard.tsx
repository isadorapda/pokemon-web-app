import React from 'react'
import { PokemonDataAPI } from '../@types/pokemonData'
import { PokeTypes } from './PokeTypes'
import PokeballColour from '../assets/pokeballColour.svg'

interface PokemonProps {
  pokemon: PokemonDataAPI
}

export function PokeCard({ pokemon }: PokemonProps) {
  return (
    <div className="poke-card bg-greens-greenCard relative">
      <div className="flex flex-col gap-3">
        <h1 className="text-white capitalize">{pokemon.name}</h1>
        <PokeTypes pokeType={pokemon.types} />
      </div>
      <img
        className="h-36 absolute right-0 top-[-2vh]"
        src={pokemon.sprites.other['official-artwork'].front_default}
      />
      <button className="absolute bottom-4 left-4">
        <img src={PokeballColour} alt="Pokeball" className="h-[3vw]" />
      </button>
    </div>
  )
}
