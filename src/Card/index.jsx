import './styles.css'

export default function Card(props) {
    const { name, sprites, types, id } = props.data

    return (
        <div className={"pokeCard " + types[0].type.name}>
            <img src={sprites.front_default} />
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