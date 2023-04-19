import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { PokemonDataAPI } from '../@types/pokemonData'
import { api } from '../utils/axios'

export enum Limit {
  TWENTY = 20,
  FIFTY = 50,
  HUNDRED = 100,
  ALL = 'All',
}

interface Props {
  children: ReactNode
}
export interface ApiDataResult {
  name: string
  url: string
}
interface PokeContext {
  pokemons: Array<PokemonDataAPI>
  page: Page<ApiDataResult>
  setPokemonIds: (pokeId: Array<number>) => void
  pokemonIds: Array<number>
  handlePokedex: (pokeId: number) => void
  handleChangePage: (url?: string | null, pageNumber?: number | null) => void
  setInternalLimit: (limit: Limit) => void
  currentPage: number
  totalPages: number
}
export interface Page<T> {
  count: number
  next: string | null
  previous: string | null
  results: Array<T>
}
export interface Response<T> {
  data: Page<T>
}
export const PokemonContext = createContext<PokeContext>({} as PokeContext)

function getOffsetFromUrl(url: string, limit: number): number {
  return Number(new URL(url).searchParams.get('offset')) - limit
}

function getLimit(internalLimit: Limit, count: number): number {
  if (internalLimit === Limit.ALL) {
    return count
  }
  return internalLimit
}

export function PokemonContextProvider({ children }: Props) {
  const [isLoading, setIsLoading] = useState(false)
  const [pokemons, setPokemons] = useState<Array<PokemonDataAPI>>([])
  const [pokemonIds, setPokemonIds] = useState<Array<number>>([])
  const [internalLimit, setInternalLimit] = useState<Limit>(Limit.TWENTY)
  const [offset, setOffset] = useState<number>(0)
  const [page, setPage] = useState<Page<ApiDataResult>>({
    count: 0,
    next: null,
    previous: null,
    results: [],
  })

  const limit = getLimit(internalLimit, page.count)

  const totalPages =
    internalLimit === Limit.ALL ? 1 : Math.ceil(page.count / limit)
  const currentPage =
    internalLimit === Limit.ALL
      ? 1
      : Math.max(Math.floor(offset / limit + 1), 1)

  const fetchPokemons = useCallback(
    async (url?: string | null) => {
      try {
        setIsLoading(true)
        const offset = (currentPage - 1) * limit
        const response: Response<ApiDataResult> = await api.get(
          url || `/pokemon/?limit=${limit}&offset=${offset}`
        )
        const requests = response.data.results.map((poke) => api.get(poke.url))
        const responses = await Promise.all(requests)
        const allPokemonsData = []
        for (const response of responses) {
          allPokemonsData.push(response.data)
        }

        setPokemons(allPokemonsData)
        setPage(response.data)
        if (response.data.next) {
          setOffset(getOffsetFromUrl(response.data.next, limit))
        } else if (response.data.previous && !response.data.next) {
          setOffset(getOffsetFromUrl(response.data.previous, limit))
        } else {
          setOffset(0)
        }
      } catch (error) {
      } finally {
        setIsLoading(false)
      }
    },
    [limit]
  )

  useEffect(() => {
    fetchPokemons()
  }, [limit])

  const handleChangePage = (
    url?: string | null,
    pageNumber?: number | null
  ) => {
    if (!url && !pageNumber) {
      return
    }
    fetchPokemons(
      url || `/pokemon/?limit=${limit}&offset=${(pageNumber! - 1) * limit}`
    )
  }

  const handlePokedex = (pokeId: number) => {
    if (pokemonIds.includes(pokeId)) {
      setPokemonIds(pokemonIds.filter((id) => pokeId !== id))
    } else {
      setPokemonIds([...pokemonIds, pokeId])
    }
  }
  console.log('IDS', pokemonIds)
  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        page,
        handleChangePage,
        setInternalLimit,
        currentPage,
        totalPages,
        setPokemonIds,
        pokemonIds,
        handlePokedex,
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}
