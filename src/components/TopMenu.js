import { NavLink } from 'react-router-dom';

export const TopMenu = () => {
  return (
    <nav className='Bouton-Header'>
      <NavLink
        className='Bouton-Header-link'
        activeClassName='Bouton-Header-link-active'
        exact
        to="/"
      >
        Accueil
      </NavLink>
      <NavLink
        className='Bouton-Header-link'
        activeClassName='Bouton-Header-link-active'
        to="/a-propos"
      >
        A Propos
      </NavLink>
    </nav>
  );
};
