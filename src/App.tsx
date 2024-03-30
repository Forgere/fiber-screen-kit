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
      </div>
      <div style={{
        width: 800,
        height: 600
      }}>
        <Scene>
          <Box position={[1 + count, 1, 1]} />
          <Box position={[-1, -1, -1]} />
          
          <Model scale={[0.01, 0.01, 0.01]}/>
        </Scene>
      </div>
    </>
  )
}

export default App
