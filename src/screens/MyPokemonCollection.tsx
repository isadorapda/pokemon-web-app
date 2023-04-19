import { PokeCard } from '../components/PokeCard'
import { usePokemonContext } from '../hooks/usePokemonContext'

export function MyPokemonsCollection() {
  const { pokemonIds, pokemons } = usePokemonContext()

  return (
    <div className="flex flex-col gap-8 py-10 px-10 lg:px-24 md:main-grid">
      {pokemons
        .filter((pokemon) => pokemonIds.includes(pokemon.id))
        .map((poke) => {
          return <PokeCard key={poke.id} pokemon={poke} />
        })}
    </div>
  )
}
