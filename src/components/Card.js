import { Link } from "react-router-dom"
import './Card.css'

function Card(props){
    return <Link to={'/logement/'+props.id} className="card">
        <div className="imageContainer">
            <img src={props.cover} alt={props.title} className="cardPhoto"/>
        </div>
        <p>{props.title}</p>
    </Link>
}
export default Card