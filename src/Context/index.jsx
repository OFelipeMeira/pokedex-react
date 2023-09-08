import { createContext, useState } from "react"


export const Context = createContext()

export const pokeDetails = {
    display: 'none',
    id: 0,
    name:"a",
    types: [],
    stats: [] ,
    img_default: '',
    img_shiny: '',
    weight: 0,
    height: 0
}


export const AppContext = ({ children }) => {

    const [pokeContext, setPokeContext] = useState(pokeDetails)
    return (
        <Context.Provider value={{ pokeContext, setPokeContext }}>
            {children}
        </Context.Provider>
    )
}