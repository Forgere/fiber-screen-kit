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
        height: 600,
        border: '1px solid #ccc'
      }}>
        <Scene shadow={false}>
          <Box 
            position={[1, 1, 1]} 
            animations={[
              {
                property: "position",
                from: [1, 1, 1],
                to: [2, 2, 2],
                duration: 2,
                start: 1,
                delay: 0,
              },
              {
                property: "rotation",
                from: [0, 0, 0],
                to: [0, 0, Math.PI],
                duration: 1,
                start: 0,
              },
              {
                property: "position",
                from: [2, 2, 2],
                to: [1, 0, Math.PI],
                duration: 1,
                start: 0,
              },
            ]} 
          />
          <Box 
            position={[-1, -1, -1]} 
            animations={[
              {
                property: "position",
                from: [-1, -1, -1],
                to: [2, 2, 2],
                duration: 2,
                start: 1,
                delay: 0,
                onComplete: () => {
                  return 'postion to -1-1-1'
                }
              },
              {
                property: "position",
                from: [2, 2, 2],
                to: [-1, -1, -1],
                duration: 1,
              }
            ]} 
          />
          
          {/* <Model scale={[0.01, 0.01, 0.01]} url="/LittlestTokyo-transformed.glb"/> */}
        </Scene>
      </div>
    </>
  )
}

export default App
