import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./SCSS/App.scss";
import PortadaContenedor from "./Componentes/Portada/PortadaContenedor";
import Navbar from "./Componentes/Navbar/Navbar";
import Footer from "./Componentes/Footer/Footer";
import GaleriaTrabajos from "./Componentes/GaleriaTrabajos/Galeria";
import Apuntate from "./Componentes/Apuntate/Apuntate";
import SobreMi from "./Componentes/SobreMi/SobreMi";
import Contacto from "./Componentes/Contacto/Contacto";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<PortadaContenedor />} />
        <Route exact path="/galeria" element={<GaleriaTrabajos />} />
        <Route exact path="/apuntate" element={<Apuntate />} />
        <Route exact path="/sobreMi" element={<SobreMi />} />
        <Route exact path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
