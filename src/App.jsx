import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ElectricianPage from "./Pages/Electrician";
import ScrollToTop from "./Components/ScrollToTop";
import Plumber from "./Pages/Plumber";
import Carpenter  from "./Pages/Carpenter"; 


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/electrician" element={<ElectricianPage />} />
        <Route path="/plumber" element={<Plumber/>} />
        <Route path="/carpenter" element={<Carpenter/>} />
      </Routes>
    </Router>
  );
}


export default App;