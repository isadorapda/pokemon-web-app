import React from 'react'
import { PokemonDataAPI } from '../@types/pokemonData'
import { PokeTypes } from './PokeTypes'
import PokeballColour from '../assets/pokeballColour.svg'
import PokeballBW from '../assets/pokeballBW.svg'
import { getType } from '../utils/getType'
import { useNavigate } from 'react-router-dom'
import { usePokemonContext } from '../hooks/usePokemonContext'

interface PokemonProps {
  pokemon: PokemonDataAPI
}

export function PokeCard({ pokemon }: PokemonProps) {
  const { handlePokedex, pokemonIds } = usePokemonContext()
  const navigate = useNavigate()
  const mainPokeType = pokemon.types[0].type.name
  const { card } = getType(mainPokeType)
  return (
    <div className={`poke-card ${card} relative`}>
      <h2 className="absolute text-white left-5 top-4 text-base lg:text-lg font-bold">
        #{pokemon.id}
      </h2>
      <div className="flex flex-col items-center gap-5 pt-[3vh]">
        <h1 className="text-white capitalize text-lg lg:text-[2vw] tracking-wide">
          {pokemon.name}
        </h1>
        <PokeTypes pokeType={pokemon.types} />
        <button
          onClick={() => navigate(`/pokemon/${pokemon.id}`)}
          className="text-white lg:text-lg underline"
        >
          Details
        </button>
      </div>
      <img
        className="w-[30vw] md:w-[13vw] lg:w-[10vw] absolute right-1/2 translate-x-1/2 top-10  lg:top-6 drop-shadow-lg"
        src={pokemon.sprites.other['official-artwork'].front_default}
      />
      <button
        title={
          pokemonIds.includes(pokemon.id) ? 'Remove from pokéball' : 'Capture!'
        }
        className="absolute top-4 right-5 "
        onClick={() => handlePokedex(pokemon.id)}
      >
        <img
          src={pokemonIds.includes(pokemon.id) ? PokeballBW : PokeballColour}
          alt="Pokeball"
          className="h-[4.5vw] md:h-[2.5vw] drop-shadow-lg"
        />
      </button>
    </div>
  )
}
