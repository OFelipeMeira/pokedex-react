import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {

    const [data, setData] = useState([])

    const getAllData = () => {
        // await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1')
        //     .then(
        //         (r) => {
        //             setData(r.data.results)
        //             console.log(r)
        //         }
        //     )
        //     .catch(
        //         (err) => console.log("ERROR IN GETTING DATA" + err)
        //     )

        var pokeUrls = []
        for (let i = 1; i <= 151; i++) {
            pokeUrls.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }
        axios.all(
            pokeUrls.map(endpoint => {
                axios.get(endpoint)
                    .then( (r) => setData(r))
            })
        )

    }

    useEffect(() => {
        getAllData()
    }, [])

    useEffect(()=>{
        console.log(data.data.name)
    },[data])



    return (
        <div className="container">
            <h1>poke</h1>

            <div className="pokeList">



                {/* { data.length > 0 ?
                (data.map(poke => (
                    <h1>{poke}</h1>

                )))
                :(<p>no data found</p>)
                } */}
            </div>

        </div>
    )
}