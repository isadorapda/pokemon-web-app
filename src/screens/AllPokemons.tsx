import { useEffect, useState } from 'react'
import { api } from '../utils/axios'
import { PokemonDataAPI } from '../@types/pokemonData'
import { PokeCard } from '../components/PokeCard'

export interface ApiDataResult {
  name: string
  url: string
}
export function AllPokemons() {
  const [pokemonsEndpoints, setPokemonsEndpoints] = useState<
    Array<ApiDataResult>
  >([])
  const [pokemons, setPokemons] = useState<Array<PokemonDataAPI>>([])

  const getPokemonsEndPoints = async () => {
    try {
      const response = await api.get('/pokemon/?limit=151')
      setPokemonsEndpoints(response.data.results)
    } catch (error) {}
  }

  const getPokemon = async () => {
    try {
      const requests = pokemonsEndpoints.map((poke) => api.get(poke.url))
      const responses = await Promise.all(requests)
      const allPokemonsData = []
      for (const response of responses) {
        allPokemonsData.push(response.data)
      }

      setPokemons(allPokemonsData)
    } catch (error) {}
  }

  useEffect(() => {
    const loadData = async () => {
      await getPokemonsEndPoints()
    }
    loadData()
  }, [])

  useEffect(() => {
    getPokemon()
  }, [pokemonsEndpoints])

  return (
    <div className="flex flex-col gap-8 py-10 px-10 lg:px-24 md:main-grid">
      {pokemons.map((pokemon) => (
        <PokeCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}
