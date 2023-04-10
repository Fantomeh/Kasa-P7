// Banner.js
import '../Styles/Banner.css';

// Ajoutez la prop "text" au composant Banner
export const Banner = ({ image, text }) => {
  const backgroundImage = image === "home" ? "img-Home" : "img-About";

  return (
    <div className={`banner ${backgroundImage}`}>
      {/* Vérifiez si la prop "text" est définie et affichez le texte si nécessaire */}
      {text && <h1 className='banner-h1'>{text}</h1>}
    </div>
  );
};
