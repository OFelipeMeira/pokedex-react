import { useContext } from 'react'
import { Context } from '../Context'
import './styles.css'

export const Aside = () => {

    //importando Context
    const myContext = useContext(Context)
    const { display, id, name, stats, img_default, img_shiny, weight, height } = myContext.pokeContext
    //const { pokeContext, setPokeContext } = myContext

    return (
        <div className='container' style={{ display: display }}>

            <div className="test">

                <h1>#{id}</h1>
                <h1>{name[0].toUpperCase() + name.substring(1)}</h1>

                <div className="imgs">
                    <img src={img_default} alt="img_default" style={{ width: '5vw', height: '5vw' }} />
                    <img src={img_shiny} alt="img_shiny" style={{ width: '5vw', height: '5vw' }} />
                </div>

                <div className="stats">
                    <h2>Hp: {stats[0]}</h2>
                    <h2>Atack: {stats[1]}</h2>
                    <h2>Defense: {stats[2]}</h2>
                    <h2>Special Atack: {stats[3]}</h2>
                    <h2>Special Defense: {stats[4]}</h2>
                    <h2>Speed: {stats[5]}</h2>
                </div>

                <h3>Weight: {weight}</h3>
                <h3>Height: {height}</h3>
                
            </div>

        </div>
    )
}