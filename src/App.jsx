import Header from './components/Header';
import Card from './components/Card';
import poulets from "./assets/store.json"


function App() {
  return (
    <div className="App">
      <Header />

      {/* mettre le composant et choisir les props */}
      {/* <Card title={poulets[0].name} text={poulets[0].description} /> */}

      {/* afficher tout les "names" du json */}
      {/* {poulets.map((poulet) => (
        <h2>{poulet.name}</h2>
      )
      )}; */}

      {poulets.map((poulet)=>(
        <Card title={poulet.name} text={poulet.description} />
      ))}

      
    </div>
  )
}

export default App
