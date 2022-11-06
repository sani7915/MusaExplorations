import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./SCSS/App.scss";
import PortadaContenedor from "../src/Pages/Portada/PortadaContenedor";
import Navbar from "../src/Componentes/Navbar/Navbar";
import Footer from "./Componentes/Footer/Footer";
import GaleriaContenedor from "./Pages/GaleriaTrabajos/GaleriaContenedor";
import Apuntate from "../src/Pages/Apuntate/Apuntate";
import SobreMi from "../src/Pages/SobreMi/SobreMi";
import Contacto from "../src/Pages/Contacto/Contacto"
import Tienda from "./Pages/Tienda/Tienda";
import GaleriaImagenes from "./Pages/GaleriaTrabajos/GaleriaImagenes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<PortadaContenedor />} />
          <Route exact path="/galeria" element={<GaleriaContenedor />} />
          <Route exact path="/apuntate" element={<Apuntate />} />
          <Route exact path="/sobreMi" element={<SobreMi />} />
          <Route exact path="/contacto" element={<Contacto/>}/>
          <Route exact path="/tienda" element={<Tienda/>}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
