import { useRef, useContext, useEffect} from 'react'
import { Select } from "@react-three/postprocessing"
import { Mesh, Vector3 } from 'three'

import {PropsWithOptionalChildren} from '../utils'

import { SceneContext } from '../scene/Context'

type TDynamic = PropsWithOptionalChildren & {
}

export function Dynamic(props: TDynamic) {
  const { children } = props
  const meshRef = useRef<Mesh>()
  const { select, setSelect} = useContext(SceneContext)
  
  useEffect(() => {
    const originUserData =  meshRef.current?.userData || {}
    
    meshRef.current.userData = {
      ...originUserData,
      dynamic: true
    }
  }, [])

  return (
    <Select enabled={meshRef.current?.uuid === select}>
      <group 
        ref={meshRef} 
        onClick={
          () => {
            setSelect(meshRef.current?.uuid)
          }
        }
      >
        {children}
      </group>
    </Select>
  )
}
