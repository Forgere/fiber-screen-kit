import './App.css'

import { Scene, Box, Model } from '../lib/main';
import { Vector3 } from 'three';

function App() {

  return (
    <>
      <h1>fiber-screen-kit</h1>
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
                from: new Vector3(1, 0, Math.PI),
                to: new Vector3(2, 2, 2),
                duration: 3,
                start: 2,
                delay: 0,
                onComplete: (action) => {
                  // hide all
                  action.hideHover()
                  action.hideActive()
                }
              },
              {
                property: "rotation",
                from: new Vector3(0, 0, 0),
                to: new Vector3(0, 0, Math.PI),
                duration: 1,
                start: 0,
                onComplete: (action) => {
                  action.showHover()
                }
              },
              {
                property: "position",
                from: new Vector3(1, 1, 1),
                to: new Vector3(1, 0, Math.PI),
                duration: 1,
                start: 1,
                onComplete: (action) => {
                  action.showActive()
                }
              },
            ]} 
          />
          <Box 
            position={[-1, -1, -1]} 
            animations={[
              {
                property: "position",
                from: new Vector3(-1, -1, -1),
                to: new Vector3(2, 2, 2),
                duration: 2,
                start: 1,
                delay: 0,
              },
              {
                property: "position",
                from: new Vector3(2, 2, 2),
                to: new Vector3(-1, -1, -1),
                duration: 1,
              }
            ]} 
          />
          
          <Model scale={[0.01, 0.01, 0.01]} url="/LittlestTokyo-transformed.glb"/>
        </Scene>
      </div>
    </>
  )
}

export default App
