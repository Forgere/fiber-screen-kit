import { Canvas } from '@react-three/fiber'
import { useState, Suspense } from 'react'
import { 
  PerformanceMonitor, Environment, Bvh, Sky,
  type EnvironmentProps
 } from '@react-three/drei'
 import { Selection } from "@react-three/postprocessing"
 import { Effects, Camera } from '../core'
 import { ContextProvider } from './Context'
import { TCameraProps } from '../core/camera'

type TScene = {
  shadow?: boolean;
  sky?: boolean;
  envOptions?: EnvironmentProps
  cameraOptions?: TCameraProps
  children?: React.ReactNode | React.ReactNode[]
}

export const Scene = (props: TScene = {}) => {
  const {
    shadow = false,
    sky = false,
    cameraOptions = {},
    envOptions = {
      preset: 'city',
    },
    children = null
  } = props
  
  const [dpr, setDpr] = useState(1)

  return (
    <Suspense fallback={"loading"}>
      <ContextProvider>
        <Canvas shadows={shadow} dpr={dpr}>
          <Camera {...cameraOptions}/>
          { sky && <Sky />}
          <PerformanceMonitor factor={3} onChange={({ factor }) => setDpr(Math.floor(0.5 + 0.5 * factor))} />
          <Environment {...envOptions} />
          <ambientLight intensity={1} />
          <directionalLight castShadow position={[10, 10, 10]} intensity={Math.PI * 2} />
          <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
          <Bvh firstHitOnly>
            <Selection>
              <Effects />
             {children}
            </Selection>
          </Bvh>
        </Canvas> 
      </ContextProvider>
    </Suspense>
  )
}
