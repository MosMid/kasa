import { Link } from "react-router-dom"
import './Nomatch.css'

function Nomatch(){
    return <main id="main404">
            <div id="error404">404</div>
            <div id="errorMessage">Oups! La page que vous demandez n'existe pas.</div>
            <Link to='/' id="homeLink">Retour à la page d'accueil</Link>
        </main>
}
export default Nomatch