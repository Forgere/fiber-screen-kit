import { useRef, useState, useContext} from 'react'
import { Select } from "@react-three/postprocessing"
import {useFrame} from '@react-three/fiber'
import { Mesh } from 'three'

import {Dynamic} from './core'

type props = {
  position: [number, number, number]
}

export function Box(props: props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef<Mesh>(null)
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta
    }
  })

  return (
    <Dynamic>
      <mesh
        {...props}
        ref={meshRef}
        scale={active ? 1.5 : 1}
        onClick={() => {
          setActive(!active)
        }}
        onPointerOver={() => {
          setHover(true)
        }}
        onPointerOut={() => setHover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    </Dynamic>
  )
}
