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
      <Route path="/pokemon-infos" element={<PokemonInfos />} />
      <Route path="/play" element={<Play />} />
    </Routes>
  )
}

export default App
