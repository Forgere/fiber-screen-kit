import { useMemo, useRef, useState } from 'react'
import { Mesh } from 'three'
import {omit} from 'lodash'

import {Dynamic} from './core'
import { TAnimate } from './utils'
import useAnimationAction from './useAnimationAction'

type props = {
  position: [number, number, number]
  animations?: TAnimate[]
}

const Box = (props: props) => {
  const { animations = [] } = props
  const meshRef = useRef<Mesh>(null)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  const action = useMemo(() => ({
    "showHover": () => {
      setHover(true)
    },
    "hideHover": () => {
      setHover(false)
    },
    "showActive": () => {
      setActive(true)
    },
    "hideActive": () => {
      setActive(false)
    },
  }), [])
  
  useAnimationAction(meshRef, animations, action)
  
  return (
    <Dynamic>
      <mesh
        {...omit(props, 'animations')}
        castShadow
        receiveShadow
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

export { Box }
