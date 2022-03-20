// import logo from './logo.svg';
import {useState, useEffect} from 'react';
import {links} from './components/data';
import NavBar from './components/NavBar'
import './App.css';

function App() {
  const [selectedPage, setSelectedPage] = useState(0);
  const SelectedPage = links[selectedPage].component;
  
  useEffect(() => {
    document.title = "Laura's App"
  })
  return (
    <div className="container">
      {/* tabs navigation */}
      <NavBar links={links} setSelectedPage={setSelectedPage} selectedPage={selectedPage}/>
      {/* selected page content */}
      {SelectedPage}
    </div>
  );
}

export default App;
