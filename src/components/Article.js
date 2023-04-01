import { Link } from 'react-router-dom'; // Importez le composant Link pour gérer la navigation
import "./Article.css"

// Ajout des props pour l'ID, le titre et l'image du logement
export const Article = ({ id, title, cover }) => {
    return (
      // Utilisez le composant Link pour créer un lien dynamique avec l'ID du logement
      // Remplacez la balise <a> par <Link> pour une navigation propre et efficace
      <Link to={`/logement/${id}`}>
        <article className="Article">
            {/* Affichez l'image et le titre du logement */}
            <img src={cover} alt={title} className="Article-image" />
            <h3 className="Article-title">{title}</h3>
        </article>
      </Link>
    );
}
