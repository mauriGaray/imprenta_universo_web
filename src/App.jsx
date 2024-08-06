import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import LandingPage from "./pages/landingPage/LandingPage";
import Portfolio from "./pages/portfolio/Portfolio";
import { Ubicacion } from "./pages/ubicacion/Ubicacion";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<LandingPage />} />
            <Route index path="/ubicacion" element={<Ubicacion />} />
            <Route index path="/portfolio" element={<Portfolio />} />
            <Route index path="/contacto" element={<LandingPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
