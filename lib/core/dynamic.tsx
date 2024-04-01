import { useRef, useContext, useEffect} from 'react'
import { Select } from "@react-three/postprocessing"
import { Group, Object3DEventMap } from 'three'

import {PropsWithOptionalChildren} from '../utils'

import { SceneContext } from '../scene/Context'

type TDynamic = PropsWithOptionalChildren

export function Dynamic(props: TDynamic) {
  const { children } = props
  const meshRef = useRef<Group<Object3DEventMap>>(null)

  const { select, setSelect} = useContext(SceneContext)

  
  useEffect(() => {
    if ( meshRef.current ) {
      meshRef.current.userData = {
        dynamic: true
      }
    }
  }, [])

  return (
    <Select enabled={meshRef.current?.uuid === select}>
      <group 
        ref={meshRef} 
        onClick={
          () => {
            setSelect(meshRef.current?.uuid || '')
          }
        }
      >
        {children}
      </group>
    </Select>
  )
}
