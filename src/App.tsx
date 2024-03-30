import { useState } from 'react'
import './App.css'

import { Scene, Box, Model } from '../lib/main';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React + Three.js + Fiber</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Scene>
          <Box position={[1, 1, 1]} />
          <Box position={[-1, -1, -1]} />
          <Model />
        </Scene>
      </div>
    </>
  )
}

export default App
