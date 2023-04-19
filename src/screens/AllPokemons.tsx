import { useEffect, useState } from 'react'
import { BiSearchAlt as IconSearch } from 'react-icons/bi'
import { IoClose as IconClose } from 'react-icons/io5'
import { Pagination } from '../components/Pagination'
import { PokeCard } from '../components/PokeCard'
import { usePokemonContext } from '../hooks/usePokemonContext'
import { api } from '../utils/axios'
import { PokemonDataAPI } from '../@types/pokemonData'

export function AllPokemons() {
  const { pokemons, setPokemons } = usePokemonContext()
  const [searchPokemon, setSearchPokemon] = useState<string>('')
  const [foundPokemon, setFoundPokemon] = useState<PokemonDataAPI>()

  const findPokemonByName = async () => {
    try {
      const { data } = await api.get(`/pokemon/${searchPokemon}`)
      setFoundPokemon(data)
    } catch (error) {
      alert('Sorry, we could not find this pokemon. Please, try again.')
    }
  }
  useEffect(() => {
    if (foundPokemon) {
      setPokemons([...pokemons, foundPokemon])
    }
  }, [foundPokemon])

  return (
    <>
      <div className="flex flex-col pt-5 pb-3 md:pt-7 absolute z-10 left-10 gap-2">
        <label htmlFor="search-pokemon">Search by name or number</label>
        <div className="flex">
          <input
            type="text"
            id="search-pokemon"
            className="rounded-full relative h-8 w-full pl-3 drop-shadow-md"
            onChange={(e) => setSearchPokemon(e.currentTarget.value)}
            value={searchPokemon}
            placeholder="e.g. dratini or 147"
          />
          <button
            onClick={findPokemonByName}
            className="absolute right-0 w-8 h-8 bg-yellow-yellowLogo flex items-center justify-center p-1 rounded-full"
          >
            <IconSearch />
          </button>
        </div>
      </div>
      <Pagination showSelect={true} />
      {foundPokemon ? (
        <div
          onClick={() => setFoundPokemon(undefined)}
          className="w-screen flex justify-center items-center top-0 fixed bg-[rgba(0,_0,_0,_0.7)] h-screen z-50"
        >
          <div className="grid grid-cols-[30vw] grid-rows-[50vh] mx-auto relative">
            <PokeCard pokemon={foundPokemon} />
            <button
              className="absolute top-[-20px] left-[-20px] w-10 h-10 rounded-full bg-redish-redFight flex items-center justify-center"
              onClick={() => setFoundPokemon(undefined)}
            >
              <IconClose style={{ fill: 'white' }} />
            </button>
          </div>
        </div>
      ) : null}

      <div className="flex flex-col gap-8 py-16 px-10 lg:px-24 md:main-grid">
        {pokemons.map((pokemon) => (
          <PokeCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <Pagination showSelect={false} />
    </>
  )
}
