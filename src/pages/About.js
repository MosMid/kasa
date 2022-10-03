import background from './about-img.png'
import './About.css'

function About(){
    return <main id='aboutMain'>
        <img src={background} alt='background'/>
        <details className='aboutDetails'>
            <summary>Fiabilité</summary>
            <p className='aboutP'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
        </details>
        <details className='aboutDetails'>
            <summary>Respect</summary>
            <p className='aboutP'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </details>
        <details className='aboutDetails'>
            <summary>Service</summary>
            <p className='aboutP'>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
        </details>
        <details className='aboutDetails'>
            <summary>Sécurité</summary>
            <p className='aboutP'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </details>
    </main>
}

export default About