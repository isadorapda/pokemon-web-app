import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { NavigationBar } from './components/navigation/Navbar'
import * as serviceWorker from './serviceWorker.js'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavigationBar />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// serviceWorker.unregister()
