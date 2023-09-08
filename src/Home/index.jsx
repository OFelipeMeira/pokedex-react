
import { Aside } from "../Aside"
import { AppContext } from '../Context'
import { List } from "../List"

export default function Home() {

    return (
        <AppContext>

            <div style={{ display: "flex", width: '90vw', margin: 'auto' }}>
                <List />
                <Aside />
            </div>

        </AppContext>
    )
}