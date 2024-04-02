import { useEffect, useRef, useState } from 'react'
import { Mesh, Vector3 } from 'three'
import gsap from 'gsap'
import {omit} from 'lodash'

import {Dynamic} from './core'
import { TAnimate } from './utils'

type props = {
  position: [number, number, number]
  animations?: TAnimate[]
}

const Box = (props: props) => {
  const { animations = [] } = props
  const meshRef = useRef<Mesh>(null)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const $tl = useRef(gsap.timeline({ repeat: -1, paused: true, immediateRender: false}));

  // useFrame(() => {
  //   const time = clock?.getElapsedTime() || 0
  //   const start = animations[0]?.start || 0
  //   const total = animations.reduce((acc, animation) => {
  //     acc += animation.duration
  //     acc += animation.delay || 0
  //     return acc
  //   }, 0) + 1

  //   if ((time - start) > 0 && time <= (start + total)  ) {
  //     const progress = Number(((time - start) / total))
  //     tl.progress(progress)
  //   }
  // })

  const action = {
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
  }

  useEffect(() => {
    if (!meshRef.current) return

    const tl = $tl.current
    tl.clear()

    animations.forEach((animation) => {

      const originVector = new Vector3(...animation.from)
      const toVector = new Vector3(...animation.to)
      const duration = animation.duration
      const ease = animation.ease || 'power1.inOut'

      if (meshRef.current && meshRef.current[animation.property]) {
        tl.fromTo(meshRef.current[animation.property], originVector, {
          ...toVector,
          duration: duration,
          ease: ease,
          delay: animation.delay || 0,
          immediateRender: false,
          onComplete: () => {
            if (animation.onComplete) {
              animation.onComplete(action)
            }
          }
        }, animation.start)
      }
    })
    tl.play()

    return () => {
      tl.kill()
    }
  }, [animations, $tl])

  return (
    <Dynamic>
      <mesh
        {...omit(props, 'animations')}
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
