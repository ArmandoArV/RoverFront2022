import './App.css';
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/AboutIktan/About';

function App() {
  return (
    <div className="App">
            <>
                <Router>
                    <Routes>
                        <Route path="/" element={<Header />} />
                        <Route path="/About" element={<About />} />
                    </Routes>
                </Router>
            </>
    </div>
  );
}

export default App;
