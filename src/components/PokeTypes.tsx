import React from 'react'
import { Type } from '../@types/pokemonData'
import { POKE_TYPES } from '../constants/pokemonTypes'
import {
  MdOutlineGrass as IconGrass,
  MdOutlineCircle as IconNormal,
  MdOutlineElectricBolt as IconElectric,
} from 'react-icons/md'
import {
  GiStonePile as IconRock,
  GiIceCube as IconIce,
  GiFlame as IconFire,
  GiPunch as IconFight,
  GiSpikyWing as IconFly,
  GiExecutionerHood as IconGhost,
  GiPoisonBottle as IconPoison,
  GiFairyWand as IconFairy,
  GiBrute as IconDark,
  GiMountainRoad as IconGround,
} from 'react-icons/gi'

import {
  IoBugSharp as IconBug,
  IoWaterSharp as IconWater,
  IoSettings as IconSteel,
} from 'react-icons/io5'
import { FaDragon as IconDragon } from 'react-icons/fa'
import { BsHypnotize as IconPsychic } from 'react-icons/bs'

import { IconType } from 'react-icons'

interface PokeTypesProps {
  pokeType: Array<Type>
}

enum PokemonType {
  grass = 'grass',
  normal = 'normal',
  rock = 'rock',
  fire = 'fire',
  ice = 'ice',
  fighting = 'fighting',
  bug = 'bug',
  water = 'water',
  dragon = 'dragon',
  flying = 'flying',
  ghost = 'ghost',
  dark = 'dark',
  poison = 'poison',
  steel = 'steel',
  electric = 'electric',
  fairy = 'fairy',
  ground = 'ground',
  psychic = 'psychic',
}
interface TypeStyles {
  style: string
  Icon: IconType
}
export function PokeTypes({ pokeType }: PokeTypesProps) {
  const getType = (type: string): TypeStyles => {
    switch (type) {
      case PokemonType.grass:
        return { style: 'bg-greens-greenGrass', Icon: IconGrass }
      case PokemonType.normal:
        return { style: 'bg-gray-grayNormal', Icon: IconNormal }
      case PokemonType.rock:
        return { style: 'bg-brown-brownRock', Icon: IconRock }
      case PokemonType.fire:
        return { style: 'bg-redish-redFire', Icon: IconFire }
      case PokemonType.ice:
        return { style: 'bg-blue-blueIce', Icon: IconIce }
      case PokemonType.fighting:
        return { style: 'bg-redish-redFight', Icon: IconFight }
      case PokemonType.bug:
        return { style: 'bg-greens-greenBug', Icon: IconBug }
      case PokemonType.water:
        return { style: 'bg-blue-blueWater', Icon: IconWater }
      case PokemonType.dragon:
        return { style: 'bg-redish-redDragon', Icon: IconDragon }
      case PokemonType.flying:
        return { style: 'bg-purple-purpleFly', Icon: IconFly }
      case PokemonType.ghost:
        return { style: 'bg-blue-blueGhost', Icon: IconGhost }
      case PokemonType.dark:
        return { style: 'bg-blackDark', Icon: IconDark }
      case PokemonType.poison:
        return { style: 'bg-purple-purplePoison', Icon: IconPoison }
      case PokemonType.steel:
        return { style: 'bg-gray-graySteel', Icon: IconSteel }
      case PokemonType.electric:
        return { style: 'bg-yellow-yellowElectric', Icon: IconElectric }
      case PokemonType.fairy:
        return { style: 'bg-pink-pinkFairy', Icon: IconFairy }
      case PokemonType.ground:
        return { style: 'bg-brown-brownGround', Icon: IconGround }
      case PokemonType.psychic:
        return { style: 'bg-pink-pinkPsychic', Icon: IconPsychic }
      default:
        return { style: 'bg-redish-redDragon', Icon: IconDragon }
    }
  }

  return (
    <div className="flex gap-2 items-center">
      {pokeType.map(({ type: { name } }) => {
        const { style, Icon } = getType(name)
        return (
          <div
            key={name}
            className={`${style} flex items-center rounded-md w-24 h-10 gap-2 px-2`}
          >
            <Icon style={{ fill: 'white' }} />
            <h3 className="text-white capitalize"> {name}</h3>
          </div>
        )
      })}
    </div>
  )
}
