import { useRef, useState, useContext} from 'react'
import { Select } from "@react-three/postprocessing"
import { Mesh } from 'three'

//import {SceneContext} from './Scene/Context'

type props = {
  position: [number, number, number]
}

export function Box(props: props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef<Mesh>(null)
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
//  const {select, setSelect} = useContext(SceneContext)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((_, delta) => (meshRef.current?.rotation?.x += delta))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <Select enabled>
      <mesh
        {...props}
        ref={meshRef}
        scale={active ? 1.5 : 1}
        onClick={() => setActive(!active)}
        onPointerOver={() => {
          setHover(true)
          console.log(meshRef)
        }}
        onPointerOut={() => setHover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    </Select>
  )
}
