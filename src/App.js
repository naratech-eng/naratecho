import { Link} from 'react-router-dom';
import './App.css';

import logo from './Assets/logo.png';

function App() {
  return (
    <div className="App">
      <img src={logo} alt='naratecho logo' className='float-left cursor-s-resize' />
      <nav className="flex sm:justify-center space-x-4">
        {
          [
            ['Home', '/'],
            ['Services', '/services'],
            ['Portfolio', 'portfolio'],
            ['About', '/about'],
            ['Contact Us', '/contact'],
          ].map(([title, url])=> (
            <Link to={url} key={title} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
          ))
        }
      </nav>
      
      
      

    </div>
  );
}

export default App;
