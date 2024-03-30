import { CreateContext, useState } from 'react'

export const Context = CreateContext({
  select: null,
  setSelect: () => {}
})

export const ContextProvider = ({children}) => {
  const [select, setSelect] = useState(null)
  return (
    <Context.Provider
      value={
        select,
        setSelect
      }
    >
      {children}
    </Context.Provider>
  )
}