import './styles.css'
import { useContext } from 'react'
import { Context } from '../Context'
import axios from 'axios'

export function Card(props) {

    // importando props
    const { name, sprites, types, id } = props.data

    //importando Context
    const myContext = useContext(Context)
    const { setPokeContext, pokeContext } = myContext

    const getDetails = () => {

        if (id === pokeContext.id && pokeContext.display === 'flex') {
            setPokeContext({ ...pokeContext, display: 'none' })
        } else {

            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then((resp) => {
                    let statsValues = []
                    resp.data.stats.forEach(element => {
                        statsValues.push(element.base_stat)
                    });

                    setPokeContext({
                        display: 'flex',
                        id: id,
                        name: name,
                        types: [],
                        stats: statsValues,
                        img_default: sprites.front_default,
                        img_shiny: sprites.front_shiny,
                        height: resp.data.height,
                        weight: resp.data.weight
                    })
                })
        }
    }

    return (
        <div className={"pokeCard " + types[0].type.name} onClick={getDetails}>
            <img src={sprites.front_default} alt="sprite_front_default"/>
            <h1>{name[0].toUpperCase() + name.substring(1)}</h1>

            <div className='types'>
                <h3>#{id}</h3>

                <h2 className={types[0].type.name} >{types[0].type.name}</h2>

                {types.length === 2 ?
                    <h2 className={types[1].type.name}>{types[1].type.name}</h2>
                    : <p></p>
                }

            </div>
        </div>
    )
}