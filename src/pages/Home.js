
import './Home.css';
import background from './home-img.png'
import data from '../data/logements.json';
import Card from '../components/Card'

function Home() {
  return (
    <main id='homeMain'>
      <img src={background} alt='background' id='background'/>
      <div id='searchResults'>
        {data.map(logement =>
          <Card key={logement.id} title={logement.title} cover={logement.cover} id={logement.id}/>
        )}
      </div>
    </main>
  );
}

export default Home;
