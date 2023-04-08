import { Link } from 'react-router-dom';

export const TopMenu = () => {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/a-propos">A Propos</Link>
    </nav>
  );
};