import { useParams } from 'react-router-dom'
import { usePokemonContext } from '../hooks/usePokemonContext'
import { useEffect, useRef, useState } from 'react'
import {
  Evolution,
  EvolutionDetails,
  PokemonDataAPI,
  Species,
} from '../@types/pokemonData'
import { getType } from '../utils/getType'
import { api } from '../utils/axios'
import axios from 'axios'
import { EvolutionCard } from '../components/EvolutionCard'
import { PokeTypes } from '../components/PokeTypes'

type MappedEvolutions = Array<PokemonDataAPI>
export interface PokemonData {
  evolution: MappedEvolutions
}

const BASE_STATS = 255

const extractBaseDataFromApi = async (
  pokemon: PokemonDataAPI
): Promise<PokemonData> => {
  const {
    data: { evolution_chain },
  } = await api.get<Species>(`/pokemon-species/${pokemon.id}`)

  const {
    data: {
      chain: { evolves_to, species },
    },
  } = await axios.get<Evolution>(evolution_chain.url)

  let currentPokemon: EvolutionDetails[] = evolves_to

  const evolutionNames = [species.name]
  while (currentPokemon.length) {
    evolutionNames.push(currentPokemon[0].species.name)
    currentPokemon = currentPokemon[0].evolves_to
  }

  const evolution = await Promise.all(
    evolutionNames.map((name) => api.get<PokemonDataAPI>(`/pokemon/${name}`))
  )

  return {
    evolution: evolution.map(({ data }) => ({ ...data })),
  }
}

export function PokemonInfos() {
  const { pokemonId } = useParams<{ pokemonId: string }>()
  const { pokemons } = usePokemonContext()
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null)

  const pokemonRef = useRef<PokemonDataAPI | undefined>(
    pokemons.find((poke) => poke.id === Number(pokemonId))
  )
  const currentPokemon = pokemonRef.current

  useEffect(() => {
    ;(async function () {
      if (currentPokemon) {
        setPokemonData(await extractBaseDataFromApi(currentPokemon))
      }
    })()
  }, [currentPokemon])

  if (!currentPokemon) {
    return null
  }

  const getStatPercentage = (stat: number): number => {
    return Math.floor((stat * 100) / BASE_STATS)
  }

  let evolvesFrom = null
  let evolvesTo = null

  if (pokemonData?.evolution) {
    const findIndexPoke = pokemonData.evolution.findIndex(
      (poke) => poke.name === currentPokemon.name
    )

    for (let i = 0; i < pokemonData?.evolution.length; i++) {
      if (
        pokemonData.evolution[i].name !== currentPokemon.name &&
        i === findIndexPoke - 1
      ) {
        evolvesFrom = pokemonData.evolution[i]
      } else if (
        pokemonData.evolution[i].name !== currentPokemon.name &&
        i === findIndexPoke + 1
      ) {
        evolvesTo = pokemonData.evolution[i]
      } else if (findIndexPoke === -1) {
        evolvesFrom = pokemonData.evolution[0]
        evolvesTo = null
      }
    }
  }

  const mainPokeType = currentPokemon.types[0].type.name
  const { card } = getType(mainPokeType)

  return (
    <div className={`p-2 w-screen h-full ${card} relative`}>
      <h1 className="capitalize text-white text-[10vw] lg:text-[6vw] pt-10 pl-10 tracking-wide">
        {currentPokemon.name}
      </h1>
      <div className="px-10 pt-10 flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5 md:justify-items-center md:items-start">
        <div className="w-full md:w-[40vw] md:col-span-full lg:col-span-1 flex flex-col justify-start items-center gap-5">
          <img
            src={
              currentPokemon?.sprites.other['official-artwork'].front_default
            }
            alt={currentPokemon.name}
            className="w-[40vw] lg:w-[50%] drop-shadow-xl"
          />
          <PokeTypes pokeType={currentPokemon.types} />
        </div>
        <div className="w-full md:w-[30vw] flex flex-col justify-start poke-details-card gap-6">
          <div>
            <h4 className="text-gray-800 capitalize text-lg lg:text-[2vw] pb-2">
              abilities
            </h4>
            {currentPokemon.abilities.map(({ ability }, index) => (
              <li
                key={`${ability.name}-${index}`}
                className="capitalize text-gray-800"
              >
                {ability.name}
              </li>
            ))}
          </div>
          <div>
            <h4 className="text-gray-800 capitalize text-lg lg:text-[2vw] pb-2">
              Base Experience
            </h4>
            <li>{currentPokemon.base_experience}</li>
          </div>
          {/* <div>
            <h4 className="text-gray-800 capitalize text-lg lg:text-[2vw]">
              Moves
            </h4>
            {currentPokemon.moves.map(({ move }) => {
              return <div key={move.name}>{move.name}</div>
            })}
          </div> */}
        </div>
        <div className="w-full md:w-[30vw] poke-details-card p-5">
          <h4 className="text-gray-800 capitalize text-lg lg:text-[2vw] pb-2">
            Stats:
          </h4>
          {currentPokemon.stats.map((stat) => {
            const percentage = getStatPercentage(stat.base_stat)
            return (
              <div
                key={`${stat.stat.name}- ${stat.base_stat}`}
                className="flex flex-col gap-2"
              >
                <h3 className="text-gray-800 capitalize text-lg pt-2">
                  {stat.stat.name}
                </h3>
                <div className="base-stats-bar">
                  <div
                    title={`${percentage}%`}
                    className="absolut left-0 h-full bg-white rounded-l-md"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 px-10 py-16 gap-10">
        {evolvesFrom ? (
          <div className="flex flex-col items-center poke-details-card gap-5">
            <h3 className="text-xl lg:text-[2vw] text-gray-800">
              Evolves from:
            </h3>
            <EvolutionCard evolution={evolvesFrom} />
          </div>
        ) : null}
        {evolvesTo ? (
          <div className="flex flex-col items-center poke-details-card gap-5">
            <h3 className="text-xl lg:text-[2vw] text-gray-800">Evolves to:</h3>
            <EvolutionCard evolution={evolvesTo} />
          </div>
        ) : null}
      </div>
    </div>
  )
}
