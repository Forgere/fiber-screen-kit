import { Canvas } from '@react-three/fiber'
import { useState, Suspense } from 'react'
import { 
  PerformanceMonitor, Environment, OrbitControls, Bvh, BakeShadows, Sky,
  type OrbitControlsProps,
  type EnvironmentProps
 } from '@react-three/drei'
 import { Selection } from "@react-three/postprocessing"
 import { Effects } from '../core'
 import { ContextProvider } from './Context'


type TScene = {
  shadow?: boolean;
  sky?: boolean;
  envOptions?: EnvironmentProps
  controlOptions?: OrbitControlsProps
  children?: React.ReactNode | React.ReactNode[]
}

export const Scene = (props: TScene = {}) => {
  const {
    shadow = true,
    sky = false,
    controlOptions = {},
    envOptions = {
      preset: 'city',
    },
    children = null
  } = props
  
  const [dpr, setDpr] = useState(2)

  return (
    <Suspense fallback={"loading"}>
      <ContextProvider>
        <Canvas shadows={shadow} dpr={dpr}>
          { shadow && <BakeShadows />}
          { sky && <Sky />}
          <PerformanceMonitor factor={1} onChange={({ factor }) => setDpr(Math.floor(0.5 + 1.5 * factor))} />
          <Environment {...envOptions} />
          <OrbitControls {...controlOptions} />
          <ambientLight intensity={1} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
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
