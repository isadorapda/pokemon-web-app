import { Route, Routes } from 'react-router-dom'
import { AllPokemons } from './screens/AllPokemons'
import { MyPokemonsCollection } from './screens/MyPokemonCollection'
import { PokemonInfos } from './screens/PokemonInfos'
import { Play } from './screens/Play'

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllPokemons />} />
      <Route path="/my-pokemons" element={<MyPokemonsCollection />} />

      <Route path="/play" element={<Play />} />
      <Route path="/pokemon/:pokemonId" element={<PokemonInfos />} />
    </Routes>
  )
}

export default App
