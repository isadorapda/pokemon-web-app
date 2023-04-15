import React from 'react'
import { Type } from '../@types/pokemonData'
import { getType } from '../utils/getType'

interface PokeTypesProps {
  pokeType: Array<Type>
}

export function PokeTypes({ pokeType }: PokeTypesProps) {
  return (
    <div className="flex gap-2 items-center">
      {pokeType.map(({ type: { name } }) => {
        const { style, Icon } = getType(name)
        return (
          <div
            key={name}
            className={`${style} flex items-center justify-center rounded-lg max-w-[25vw] md:w-[11vw] lg:w-[9vw] lg:h-[5vh] gap-2 px-2  py-1  shadow-buttonsShadow`}
          >
            <Icon style={{ fill: 'white' }} />
            <h3 className="text-white capitalize text-sm md:text-[1.4vw] ">
              {' '}
              {name}
            </h3>
          </div>
        )
      })}
    </div>
  )
}
