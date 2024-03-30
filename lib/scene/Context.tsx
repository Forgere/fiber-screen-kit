import { createContext, useState, useContext } from 'react'
import {PropsWithOptionalChildren} from '../utils'

export const SceneContext = createContext({
  select: '',
  setSelect: ((value: string) => {
    console.log(value)
  }) as React.Dispatch<React.SetStateAction<string>>
})

export const ContextProvider = ({ children }: PropsWithOptionalChildren) => {
  const [select, setSelect] = useState<string>('')
  
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


/* eslint-disable-next-line react-refresh/only-export-components */
export const useSceneSelect = () => {
  const context = useContext(SceneContext)
  
  if (!context) {
    throw new Error('use this hook in scene')
  }
  
  return context.select
}