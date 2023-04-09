// import logo from './logo.svg';
// import './App.css';
// import { useState } from "react"

// function App() {
//   const [nombreDeClicks, setNombreDeClicks] = useState(0)

//   const onBtnClick = () => {
//     //setNombreDeClicks(50) // valeur fixe
//     //setNombreDeClicks(nombreDeClicks + 1) // attention dans certains cas cette façon de faire pose problème
//     setNombreDeClicks((ancienneValeur) => ancienneValeur + 1) // nouvelle valeur se basant sur l'ancienne valeur
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           {nombreDeClicks}
//         </p>

//         {nombreDeClicks > 10 && nombreDeClicks < 20 && <img src={logo} className="App-logo" alt="logo" />}

//         <p className={"paragraphe " + (nombreDeClicks > 5 ? "super-paragraphe" : "")}>
//           {nombreDeClicks}
//         </p>

//         <button onClick={onBtnClick}>Incrémenter</button>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React ({nombreDeClicks})
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
