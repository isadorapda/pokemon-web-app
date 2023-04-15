import Select from 'react-select'
import { PokeCard } from '../components/PokeCard'
import { usePokemonContext } from '../hooks/usePokemonContext'
import { Limit } from '../context/pokemonContext'

export function AllPokemons() {
  const {
    pokemons,
    page,
    handleChangePage,
    setInternalLimit,
    currentPage,
    totalPages,
  } = usePokemonContext()

  const getPagesToDisplay = (): Array<number> => {
    let pageNumbers: Array<number> = []

    let start = currentPage - 2
    let end = currentPage + 2

    if (start < 1) {
      start = 1
      end = 5
    }

    if (end > totalPages) {
      end = totalPages
      start = totalPages - 4
    }

    for (let i = start; i <= end; i++) {
      pageNumbers.push(i)
    }

    return pageNumbers.filter((page) => page > 0)
  }

  return (
    <>
      <div className="flex justify-around">
        <div className={`flex gap-3`}>
          {page.previous && (
            <button onClick={() => handleChangePage(page.previous)}>
              Previous
            </button>
          )}
          {page.next && (
            <button onClick={() => handleChangePage(page.next)}>Next</button>
          )}
        </div>
        <div className={`flex w-5 gap-3`}>
          {getPagesToDisplay().map((page) => (
            <button
              key={`pagination-page-${page}`}
              onClick={() => handleChangePage(null, page)}
              className={page === currentPage ? `text-red-400` : ''}
            >
              {page}
            </button>
          ))}
        </div>
        <select
          onChange={(e) => {
            if (e.target.value === Limit.ALL) {
              setInternalLimit(Limit.ALL)
              return
            }
            setInternalLimit(Number(e.target.value) as Limit)
          }}
        >
          <option value={Limit.TWENTY}>20</option>
          <option value={Limit.FIFTY}>50</option>
          <option value={Limit.HUNDRED}>100</option>
          <option value={Limit.ALL}>All</option>
        </select>
      </div>
      <div className="flex flex-col gap-8 py-10 px-10 lg:px-24 md:main-grid">
        {pokemons.map((pokemon) => (
          <PokeCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  )
}
