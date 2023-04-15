import { useContext } from 'react'
import { PokemonContext } from '../context/pokemonContext'

export function usePokemonContext() {
  return useContext(PokemonContext)
}
