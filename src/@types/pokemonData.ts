import { PokemonType } from '../utils/getType'

export interface Identification {
  name: string
  url: string
}
export interface Type {
  type: { name: PokemonType }
}
export interface Ability {
  ability: { name: string }
}
export interface Move {
  move: { name: string }
}
export interface Sprite {
  other: { 'official-artwork': { front_default: string } }
}

export interface Stats {
  base_stat: number
  effort: number
  stat: Identification
}
export interface PokemonDataAPI {
  name: string
  id: number
  types: Array<Type>
  abilities: Array<Ability>
  moves: Array<Move>
  sprites: Sprite
  stats: Array<Stats>
  base_experience: number
}

export interface EvolutionDetails {
  species: Identification
  evolves_to: Array<EvolutionDetails>

  evolution_details: {
    item: { id: number; name: string }
    trigger: {
      id: number
      name: string
      pokemon_species: Array<Identification>
    }
  }
}
export interface EvolutionChain {
  species: Identification
  evolves_to: Array<EvolutionDetails>
}
export interface Evolution {
  id: number
  chain: EvolutionChain
}

export interface Species {
  evolves_from_species: Identification | null
  evolution_chain: {
    url: string
  }
  name: string
}
