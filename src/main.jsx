import React from 'react'
import ReactDOM from 'react-dom/client'
import {PokemonContext ,PokemonContextProvider} from './context/PokemonContext'
import App from './App'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonContextProvider>
      <App />
    </PokemonContextProvider>
  </React.StrictMode>,
)