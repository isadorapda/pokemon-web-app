import React from 'react'
import { Link } from 'react-router-dom'

export function NavigationBar() {
  return (
    <div className="w-screen h-28 px-10 py-2 bg-white shadow-shadowLight flex items-center justify-between ">
      <Link to="/">
        <img
          src="src/assets/logoPoke.svg"
          alt="Logo"
          className="w-[12vw] cursor-pointer drop-shadow-lg"
        />
      </Link>
      <div className="flex items-center gap-10">
        <Link to="/my-pokemons">
          <button className="nav-buttons bg-yellow-yellowLogo gap-3">
            <img
              src="src/assets/pokeballColour.svg"
              alt="Pokeball"
              className="w-[2vw]"
            />
            Pokedex
          </button>
        </Link>
        <Link to="/play">
          <button className="nav-buttons  bg-blue-blueLogo gap-2">
            Battle
          </button>
        </Link>
      </div>
    </div>
  )
}
