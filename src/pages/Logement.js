import {useParams} from 'react-router-dom'
import data from '../data/logements.json';

function Logement(){
    const params = useParams()
    const id = params.id
    const selected = data.filter(data => data.id === params.id)
    console.log(selected)
    return <p>{selected[0].title}</p>
}
export default Logement