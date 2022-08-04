import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <nav className="text-3xl font-bold">
        <Link to="/">Home</Link> |{" "}
        <Link to="services">Services</Link> |{" "}
        <Link to="portfolio">Portfolio</Link> |{" "}
        <Link to="about">About</Link> |{" "}
        <Link to="contact">Contact Us</Link>
      </nav>
    </div>
  );
}

export default App;
