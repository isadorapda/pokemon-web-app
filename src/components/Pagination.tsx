import React from 'react'
import {
  IoMdArrowDropright as IconNext,
  IoMdArrowDropleft as IconPrevious,
} from 'react-icons/io'
import { usePokemonContext } from '../hooks/usePokemonContext'
import { Limit } from '../context/pokemonContext'
import Select, { StylesConfig } from 'react-select'

interface Option {
  value: string
  label: string
}

interface Props {
  showSelect: boolean
}
const customStyles: StylesConfig<Option> = {
  menu: (provided) => ({
    ...provided,
    borderRadius: '12px',
    fontSize: '12px',
  }),

  option: (provided) => ({
    ...provided,
    borderRadius: '6px',
  }),
  container: (provided) => ({
    ...provided,
    borderRadius: '12px',
    width: '90px',
  }),

  control: (provided) => ({
    ...provided,
    borderRadius: '12px',
    fontSize: '12px',
    textAlign: 'right',
  }),
}
export function Pagination({ showSelect }: Props) {
  const { page, handleChangePage, setInternalLimit, currentPage, totalPages } =
    usePokemonContext()

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

  const optionsSelect: Array<Option> = Object.values(Limit)
    .filter((value) => typeof value === 'number' || value === 'All')
    .map((limitValue) => {
      return {
        label: `${limitValue}`,
        value: `${limitValue}`,
      }
    })

  return (
    <div className="flex flex-col gap-5 md:flex-row justify-center items-center pt-5 pb-3 md:pt-7 w-screen relative h-[9vw]">
      {showSelect ? (
        <div className="px-4 lg:px-0 md:pt-5 lg:pt-0 md:absolute md:right-3 lg:right-10 flex md:flex-col lg:flex-row items-center gap-3">
          <h3 className="text-sm lg:text-[1vw]">Pokemons per page:</h3>
          <Select
            defaultValue={optionsSelect[0]}
            isSearchable={false}
            styles={customStyles}
            options={optionsSelect}
            isMulti={false}
            onChange={(selected) => {
              if (selected?.value === Limit.ALL) {
                setInternalLimit(Limit.ALL)
                return
              }
              setInternalLimit(Number(selected?.value) as Limit)
            }}
          />
        </div>
      ) : null}
      <div
        className={`flex items-center justify-center w-1/2 mx-auto gap-3 md:gap-5 lg:gap-10 `}
      >
        <button
          disabled={page.previous ? false : true}
          title="Previous Page"
          onClick={() => handleChangePage(page.previous)}
        >
          <IconPrevious size="20px" />
        </button>

        {getPagesToDisplay().map((page) => (
          <button
            key={`pagination-page-${page}`}
            onClick={() => handleChangePage(null, page)}
            className={`${
              page === currentPage
                ? `flex items-center justify-center text-white bg-yellow-yellowLogo rounded-full shadow-buttonsShadow w-7 h-7`
                : ''
            } `}
          >
            {page}
          </button>
        ))}

        <button
          disabled={page.next ? false : true}
          title="Next Page"
          onClick={() => handleChangePage(page.next)}
        >
          <IconNext size="20px" />
        </button>
      </div>
    </div>
  )
}
