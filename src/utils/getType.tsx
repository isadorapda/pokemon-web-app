import { assertNever } from './assertNever'
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
export enum PokemonType {
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
  card: string
  Icon: IconType
}

export const getType = (type: PokemonType): TypeStyles => {
  switch (type) {
    case PokemonType.grass:
      return {
        style: 'bg-greens-greenGrass',
        Icon: IconGrass,
        card: 'bg-greens-greenCard',
      }
    case PokemonType.normal:
      return {
        style: 'bg-gray-grayNormal',
        Icon: IconNormal,
        card: 'bg-gray-grayCard',
      }
    case PokemonType.rock:
      return {
        style: 'bg-brown-brownRock',
        Icon: IconRock,
        card: 'bg-brown-brownCard',
      }
    case PokemonType.fire:
      return {
        style: 'bg-redish-redFire',
        Icon: IconFire,
        card: 'bg-redish-redCard',
      }
    case PokemonType.ice:
      return {
        style: 'bg-blue-blueIce',
        Icon: IconIce,
        card: 'bg-blue-blueCard',
      }
    case PokemonType.fighting:
      return {
        style: 'bg-redish-redFight',
        Icon: IconFight,
        card: 'bg-redish-redCard',
      }
    case PokemonType.bug:
      return {
        style: 'bg-greens-greenBug',
        Icon: IconBug,
        card: 'bg-greens-greenCard',
      }
    case PokemonType.water:
      return {
        style: 'bg-blue-blueWater',
        Icon: IconWater,
        card: 'bg-blue-blueCard',
      }
    case PokemonType.dragon:
      return {
        style: 'bg-redish-redDragon',
        Icon: IconDragon,
        card: 'bg-redish-redCard',
      }
    case PokemonType.flying:
      return {
        style: 'bg-purple-purpleFly',
        Icon: IconFly,
        card: 'bg-purple-purpleCard',
      }
    case PokemonType.ghost:
      return {
        style: 'bg-blue-blueGhost',
        Icon: IconGhost,
        card: 'bg-blue-blueCard',
      }
    case PokemonType.dark:
      return { style: 'bg-blackDark', Icon: IconDark, card: 'bg-gray-grayCard' }
    case PokemonType.poison:
      return {
        style: 'bg-purple-purplePoison',
        Icon: IconPoison,
        card: 'bg-purple-purpleCard',
      }
    case PokemonType.steel:
      return {
        style: 'bg-gray-graySteel',
        Icon: IconSteel,
        card: 'bg-gray-grayCard',
      }
    case PokemonType.electric:
      return {
        style: 'bg-yellow-yellowElectric',
        Icon: IconElectric,
        card: 'bg-yellow-yellowCard',
      }
    case PokemonType.fairy:
      return {
        style: 'bg-pink-pinkFairy',
        Icon: IconFairy,
        card: 'bg-pink-pinkCard',
      }
    case PokemonType.ground:
      return {
        style: 'bg-brown-brownGround',
        Icon: IconGround,
        card: 'bg-brown-brownCard',
      }
    case PokemonType.psychic:
      return {
        style: 'bg-pink-pinkPsychic',
        Icon: IconPsychic,
        card: 'bg-pink-pinkCard',
      }
    default:
      return assertNever(type)
  }
}
