import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountryDropdown, RegionDropdown } from 'react-indian-state-region-selector/lib/rcrs';
import Register from './pages/Register';

function App() {

  

  return(
    <div>
      <Register/>
    </div>
  )
  
}

export default App
