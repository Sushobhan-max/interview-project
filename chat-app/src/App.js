import './App.css';
import './Res.css'
import Navbar from './components/Navbar';
import Sectionone from './components/Sectionone';
import Sectiontwo from './components/Sectiontwo';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sectionone/>
      <Sectiontwo/>
    </div>
  );
}

export default App;
