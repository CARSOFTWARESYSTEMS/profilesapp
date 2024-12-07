import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import krutarthLogo from '/krutarth_logo.png'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img width='100%' height='100%' src={krutarthLogo} alt="Krutarth logo" />
      <h1>Krutarth S. Karkala</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
