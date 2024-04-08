import { CameraControls, CameraControlsProps } from "@react-three/drei";
import {useEffect, useMemo, useRef} from 'react'
import {gsap} from 'gsap'
import { TAnimate } from "../utils";
import { Vector3 } from "three";

type TCameraAnimate = Omit<Omit<TAnimate, 'from'>, 'property'> & {
  property: 'position' | 'target'
  target: Vector3
}

export type TCameraProps = CameraControlsProps & {
  presets?: {
    [key: string]: TCameraAnimate[]
  },
  currentPreset?: string
  onCompleted?: () => void
}

export const Camera = (props: TCameraProps) => {
  const { presets = {}, currentPreset = '', onCompleted = () => {}, ...otherProps } = props
  const ref = useRef<CameraControls>(null)

  const actions = useMemo(() => {
    const tmp = {} as {[key: string]: () => void}
    const tl = gsap.timeline({
      onStart: () => {
      },
      onComplete: () => {
        onCompleted()
      }
    })
    Object.keys(presets).forEach((key) => {
      tmp[key] = () => {
        tl.clear()
        presets[key].forEach((animation, index) => {
          if (!ref.current) return
          let originVector = new Vector3()
          if (index === 0) {
            ref.current.getPosition(originVector)
          } else {
            originVector = presets[key][index - 1].to
          }

          tl.fromTo(originVector, originVector, {
            x: animation.to.x,
            y: animation.to.y,
            z: animation.to.z,
            duration: animation.duration,
            delay: animation.delay || 0,
            ease: animation.ease || 'power1.inOut',
            onUpdate: async () => {
              console.log(originVector)
              // await ref.current?.setPosition(originVector.x, originVector.y, originVector.z)
              // await ref.current?.setTarget(...animation.target.toArray())
              ref.current?.setLookAt(originVector.x, originVector.y, originVector.z, ...animation.target.toArray())
            }
          }, animation.start)
        })
      }
    })
    return tmp
  }, [presets])

  useEffect(() => {
    actions[currentPreset] && actions[currentPreset]()
  }, [currentPreset, actions])

  return (
    <>
      <CameraControls
        {...otherProps}
        ref={ref}
        makeDefault
      />
    </>
  )
}