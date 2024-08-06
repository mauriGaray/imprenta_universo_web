import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import LandingPage from "./pages/landingPage/LandingPage";
import Portfolio from "./pages/portfolio/Portfolio";
import { Ubicacion } from "./pages/ubicacion/Ubicacion";
import NotFound404 from "./pages/notFound404/NotFound404";

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
            <Route index path="*" element={<NotFound404 />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
