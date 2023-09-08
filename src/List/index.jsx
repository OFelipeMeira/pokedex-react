import axios from "axios"
import './styles.css'
import { useEffect, useState } from "react"
import { Card } from '../Card'

export const List = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        getAllData()
        console.log("Abriu")
    }, [])

    const getAllData = async () => {
        for (let i = 1; i <= 1010; i++) {
            let endpoint = `https://pokeapi.co/api/v2/pokemon/${i}`
            const resp = await axios.get(endpoint)
            setData(data => [...data, resp.data])
        }
    }

    return (

        <div className="pokeList">
            {data.length === 0 ?
                <h1> Sem dados </h1>
                : data.map((data) =>
                    <Card data={data} key={data.id} />
                )
            }
        </div>
    )
}