import {useParams} from 'react-router-dom';
import data from '../data/logements.json';
import './Logement.css';
import Collapsible from '../components/Collapsible';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faStar} from '@fortawesome/free-solid-svg-icons'

function Logement(){
    const starIcon = <FontAwesomeIcon icon={faStar} />
    const params = useParams()
    const id = params.id
    const selected = data.filter(data => data.id === params.id)
    const rating = parseInt(selected[0].rating)
    return <main className='mainLogement'>
            <div className='carrousel'></div>
            <div className='mainContainer'>
                <div className='infoLogement'>
                    <h1 className='titreLogement'>{selected[0].title}</h1>
                    <i className='salmonStar' class="fa-solid fa-star"></i>
                    <h2 className='Location'>{selected[0].location}</h2>
                    <div className='tags'>{selected[0].tags.map(tag => <div key={tag} className='tag'>{tag}</div>)}</div>
                </div>
                <div className='owner'>
                    <div className='ownerInfo'>
                        <p>{selected[0].host.name}</p>
                        <img src={selected[0].host.picture}/>
                    </div>
                    {[...Array(rating)].map((e, i) => <FontAwesomeIcon className='salmonStar' key={i} icon={faStar} />)}
                    {[...Array(5-rating)].map((e, i) => <FontAwesomeIcon className='greyStar' key={i} icon={faStar} />)}
                </div>
                <div className='descriptionCollapsible'><Collapsible title='Description' content={selected[0].description}/></div>
                <div className='equipmentCollapsible'><Collapsible title='Equipement' content={selected[0].equipments.map(equipment => <p key={equipment} className='equipment'>{equipment}</p>)}/></div>
            </div>
        </main>
}
export default Logement