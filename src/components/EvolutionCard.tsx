import { PokemonDataAPI } from '../@types/pokemonData'

interface EvolutionProps {
  evolution: PokemonDataAPI
}

export function EvolutionCard({ evolution }: EvolutionProps) {
  return (
    <>
      <h4 className="text-white capitalize text-lg lg:text-[2vw]">
        {evolution.name}
      </h4>

      <img
        className="w-[20vw] lg:w-[15vw] drop-shadow-lg"
        src={evolution.sprites.other['official-artwork'].front_default}
        alt={evolution.name}
      />
    </>
  )
}
