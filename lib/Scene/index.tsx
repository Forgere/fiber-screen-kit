import { Canvas } from '@react-three/fiber'
import { 
  PerformanceMonitor, Environment, OrbitControls, Bvh,
  type OrbitControlsProps,
  type EnvironmentProps
 } from '@react-three/drei'
import { useRef, useState, Suspense } from 'react'
import { Mesh } from 'three'

type props = {
  position: [number, number, number]
}

function Box(props: props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef<Mesh>(null)
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((_, delta) => (meshRef.current?.rotation?.x += delta))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

type TScene = {
  envOptions?: EnvironmentProps
  controlOptions?: OrbitControlsProps
}

export const Scene = (props: TScene = {}) => {
  const { 
    controlOptions = {},
    envOptions = {
      preset: 'city'
    }
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
             <Box position={[-1.2, 0, 0]} />
             <Box position={[1.2, 0, 0]} />
            </Bvh>
        </Canvas>   
    </Suspense>
  )
}
