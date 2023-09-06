import axios from "axios"
import { useEffect, useState } from "react"
import Card from '../Card'
import './styles.css'

export default function Home() {

    const [data, setData] = useState([])

    const getAllData = async () => {
        for (let i = 1; i <= 151; i++) {
            let endpoint = `https://pokeapi.co/api/v2/pokemon/${i}`
            const resp = await axios.get(endpoint)
            const colorUrl = await axios.get(resp.data.species.url)
            console.log(resp)
            setData(data =>[...data, resp.data])
            
            //console.log(resp.data)
        }

    }

    useEffect(() => {
        getAllData()
    }, [])

    return (
        <div>
            <button onClick={() => console.log(data)}>Show</button>

            <div className="pokeList">
                {data.length === 0 ?
                    <h1> Sem dados </h1>
                    : data.map((data) =>
                        <Card data={data} key={data.id} />
                    )
                }
            </div>

        </div>
    )
}