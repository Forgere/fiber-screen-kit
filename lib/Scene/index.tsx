import { Canvas } from '@react-three/fiber'
import { 
  PerformanceMonitor, Environment, OrbitControls, Bvh,
  type OrbitControlsProps,
  type EnvironmentProps
 } from '@react-three/drei'
import { useState, Suspense } from 'react'


type TScene = {
  envOptions?: EnvironmentProps
  controlOptions?: OrbitControlsProps
  children?: React.ReactNode | React.ReactNode[]
}

export const Scene = (props: TScene = {}) => {
  const { 
    controlOptions = {},
    envOptions = {
      preset: 'city'
    },
    children = null
  } = props  
  const [dpr, setDpr] = useState(2)

  return (
    <Suspense fallback={"loading"}>
      {dpr}
        <Canvas dpr={dpr}>
          <PerformanceMonitor factor={1} onChange={({ factor }) => setDpr(Math.floor(0.5 + 1.5 * factor))} />
          <Environment {...envOptions} />
          <OrbitControls {...controlOptions} />
            <ambientLight intensity={1} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <Bvh firstHitOnly>
              {children}
            </Bvh>
        </Canvas>   
    </Suspense>
  )
}
