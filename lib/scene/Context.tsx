import { createContext, useState, useContext, useEffect } from 'react'
import {PropsWithOptionalChildren} from '../utils'
import * as THREE from 'three'


export const SceneContext = createContext<
  {
    clock: THREE.Clock | null,
    select: string
    setSelect: React.Dispatch<React.SetStateAction<string>>
  }
>({
  clock: null,
  select: '',
  setSelect: ((value: string) => {
    console.log(value)
  }) as React.Dispatch<React.SetStateAction<string>>
})

export const ContextProvider = ({ children }: PropsWithOptionalChildren) => {
  const [select, setSelect] = useState<string>('')
  const clock = new THREE.Clock()
  
  return (
    <SceneContext.Provider
      value={{
        select,
        setSelect,
        clock,
      }}
    >
      {children}
    </SceneContext.Provider>
  )
}


/* eslint-disable-next-line react-refresh/only-export-components */
export const useSceneSelect = () => {
  const context = useContext(SceneContext)
  
  if (!context) {
    throw new Error('use this hook in scene')
  }
  
  return context.select
}

/* eslint-disable-next-line react-refresh/only-export-components */
export const useClock = () => {
  const context = useContext(SceneContext)
  
  if (!context) {
    throw new Error('use this hook in scene')
  }

  return context.clock
}

