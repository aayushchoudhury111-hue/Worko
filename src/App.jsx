import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ElectricianPage from "./Pages/Electrician";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/electrician" element={<ElectricianPage />} />
      </Routes>
    </Router>
  );
}

export default App;