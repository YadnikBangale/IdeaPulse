import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Home';
import Navbar from './Navbar';
import About from './About';

function App() {
  return (
    <div className="App">
       <Router>
          <Navbar />
          <div className="container mt-4">
            <Routes>
              <Route path = "/" element = {<Home/>}/>
              <Route path = "/about" element = {<About/>}/>
            </Routes>
          </div>
       </Router>
    </div>
  );
}

export default App;
