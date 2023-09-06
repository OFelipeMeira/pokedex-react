import './styles.css'

export default function Card(props) {
    const { name, sprites, types } = props.data

    const nomeCerto = `${name[0].toUpperCase()+ name.substring(1)}`

    return (
        <div className={"pokeCard " + types[0].type.name}>
            <img src={sprites.front_default} />
            <h1>{nomeCerto }</h1>

            <div className='types'>

                {types.length === 1 ?
                    <h2 >{types[0].type.name}</h2>
                    : <p></p>
                }
                {types.length === 2 ?
                    <>
                        <h2 >{types[0].type.name}</h2>
                        <h2 >{types[1].type.name}</h2>
                    </>
                    : <p></p>
                }

            </div>
        </div>
    )
}