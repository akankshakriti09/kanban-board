import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Card from './Components/Card/Card';

function App() {
  return (
    <>
      <Navbar />
      <section className="board-details">
       <Card />
      </section>
    </>
  );
}

export default App;