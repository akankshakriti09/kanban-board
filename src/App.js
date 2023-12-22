import './App.css';
import Navbar from './Components/Navbar/Navbar';
// import Card from './Components/Card/Card';
import List from './Components/List/List';

function App() {
  return (
    <>
      <Navbar />
      <section className="board-details">
       {/* <Card /> */}
       <div className="board-details-list">
        <List />
        <List />
        <List />
        <List />
        <List />
        </div>
      </section>
    </>
  );
}

export default App;