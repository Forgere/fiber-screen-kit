import { createContext, useState, ReactNode, useContext } from 'react'
import {PropsWithOptionalChildren} from '../utils'

export const SceneContext = createContext({
  select: null,
  setSelect: () => {
    
  }
})

export const ContextProvider = ({ children }: PropsWithOptionalChildren) => {
  const [select, setSelect] = useState(null)
  
  return (
    <SceneContext.Provider
      value={{
        select,
        setSelect
      }}
    >
      {children}
    </SceneContext.Provider>
  )
}


export const useSceneSelect = () => {
  const context = useContext(SceneContext)
  
  if (!context) {
    throw new Error('use this hook in scene')
  }
  
  return context.select
}