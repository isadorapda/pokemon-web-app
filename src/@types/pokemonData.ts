export interface Type {
  type: { name: string }
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

export interface PokemonDataAPI {
  name: string
  id: number
  types: Array<Type>
  abilities: Array<Ability>
  moves: Array<Move>
  sprites: Sprite
}
