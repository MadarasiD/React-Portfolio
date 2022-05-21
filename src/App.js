import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/about" element={ <About />} />
            <Route path="/portfolio" element={ <Portfolio />} />
            <Route path="/contact" element={ <Contact />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
