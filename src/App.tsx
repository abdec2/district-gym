import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Memberships from './pages/memberships';
import Contact from './pages/contact';

import './App.css';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/memberships" element={<Memberships />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
