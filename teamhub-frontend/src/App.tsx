import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contribute from "./pages/contribute";
import Archive from "./pages/archive";
import Meeting from "./pages/meeting";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/meeting" element={<Meeting />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
