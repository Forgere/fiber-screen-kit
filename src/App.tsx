import './App.css'

import { Scene, Box, Model } from '../lib/main';
import { Vector3 } from 'three';
import { useState } from 'react';

function App() {
  const [preset, setPreset] = useState('')

  return (
    <>
      <h1>fiber-screen-kit</h1>
      <button onClick={() => setPreset('camera1')}>preset1</button>
      <div style={{
        width: 800,
        height: 600,
        border: '1px solid #ccc'
      }}>
        <Scene shadow={true} cameraOptions={{
          currentPreset: preset,
          onCompleted: () => {
            console.log('completed')
            setPreset('')
          },
          presets: {
            'camera1': [
              {
                property: 'position',
                target: new Vector3(0, 1, 1),
                to: new Vector3(0, 0, 10),
                duration: 2,
                start: 0
              },
              {
                property: 'position',
                target: new Vector3(0, 1, 0),
                to: new Vector3(0, 1, 10),
                duration: 2,
                start: 2,
              },
              // {
              //   property: 'target',
              //   to: new Vector3(1, 0, 1),
              //   duration: 2,
              //   start: 2,
              // }
            ]
          }
        }}>
          <Box 
            position={[1, 0, Math.PI]} 
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
