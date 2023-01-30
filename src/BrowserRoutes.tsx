import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/about/about";
import Home from "./components/home/home";
import "./index.css";

export default function BrowserRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
