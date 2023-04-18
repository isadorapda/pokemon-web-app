import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { NavigationBar } from './components/navigation/Navbar'
import { PokemonContextProvider } from './context/pokemonContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PokemonContextProvider>
      <BrowserRouter>
        <NavigationBar />
        <App />
      </BrowserRouter>
    </PokemonContextProvider>
  </React.StrictMode>
)
