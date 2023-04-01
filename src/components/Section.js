import './Section.css';
import { Article } from './Article';
import accommodations from '../data/logements.json';

export const Section = () => {
    return (
      <section className="Section">
        {
          accommodations.map(accommodation => (
            // Passez l'ID du logement en tant que prop
            <Article key={accommodation.id} id={accommodation.id} title={accommodation.title} cover={accommodation.cover} />
          ))
        }
      </section>
    );
}
