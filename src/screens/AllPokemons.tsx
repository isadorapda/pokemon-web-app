import { Pagination } from '../components/Pagination'
import { PokeCard } from '../components/PokeCard'
import { usePokemonContext } from '../hooks/usePokemonContext'

export function AllPokemons() {
  const { pokemons } = usePokemonContext()

  return (
    <>
      <Pagination showSelect={true} />
      <div className="flex flex-col gap-8 py-10 px-10 lg:px-24 md:main-grid">
        {pokemons.map((pokemon) => (
          <PokeCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <Pagination showSelect={false} />
    </>
  )
}
