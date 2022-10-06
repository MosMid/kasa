import {Navigate, useParams} from 'react-router-dom';
import data from '../data/logements.json';
import './Logement.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faStar } from '@fortawesome/free-solid-svg-icons'
import Gallery from '../components/Gallery'

function Logement(){
    const starIcon = <FontAwesomeIcon icon={faStar} />
    const params = useParams()
    const id = params.id
    if (data.filter(e => e.id === id).length > 0) {
        const selected = data.filter(data => data.id === params.id)
        const rating = parseInt(selected[0].rating)
        return <main className='mainLogement'>
            <Gallery pictures={selected[0].pictures}></Gallery>
                <div className='mainContainer'>
                    <div className='infoLogement'>
                        <h1 className='titreLogement'>{selected[0].title}</h1>
                        <h2 className='Location'>{selected[0].location}</h2>
                        <div className='tags'>{selected[0].tags.map(tag => <div key={tag} className='tag'>{tag}</div>)}</div>
                    </div>
                    <div className='owner'>
                        <div className='ownerInfo'>
                            <p>{selected[0].host.name}</p>
                            <img src={selected[0].host.picture}/>
                        </div>
                        <div className='rating'>
                            {[...Array(rating)].map((e, i) => <FontAwesomeIcon className='salmonStar' key={i} icon={faStar} />)}
                            {[...Array(5-rating)].map((e, i) => <FontAwesomeIcon className='greyStar' key={i} icon={faStar} />)}
                        </div>
                    </div>
                    <details>
                        <summary>Description</summary>
                        <p className='descriptionCollapsible'>{selected[0].description}</p>
                    </details>
                    <details>
                        <summary>Equipement</summary>
                        <p className='equipmentP'>{selected[0].equipments.map(equipment => <li key={equipment} className='equipment'>{equipment}</li>)}</p>
                    </details>
                </div>
            </main>
    }else{
        return<Navigate to="./Nomatch"></Navigate>
    }
    
}
export default Logement