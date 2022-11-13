import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./SCSS/App.scss";
import PortadaContenedor from "../src/Pages/Portada/PortadaContenedor";
import Navbar from "../src/Componentes/Navbar/Navbar";
import Footer from "./Componentes/Footer/Footer";
import GaleriaContenedor from "./Pages/GaleriaTrabajos/GaleriaContenedor";
import Apuntate from "../src/Pages/Apuntate/Apuntate";
import SobreMi from "../src/Pages/SobreMi/SobreMi";
import Contacto from "../src/Pages/Contacto/Contacto";
import Tienda from "./Pages/Tienda/Tienda";
import NavbarProvider from "./context/NavbarContext";
function App() {
  return (
    <BrowserRouter>
      <NavbarProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<PortadaContenedor />} />
          <Route
            exact
            path="/galeria/:category"
            element={<GaleriaContenedor />}
          />
          <Route exact path="/apuntate" element={<Apuntate />} />
          <Route exact path="/sobreMi" element={<SobreMi />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/tienda" element={<Tienda />} />
        </Routes>
        <Footer />
      </NavbarProvider>
    </BrowserRouter>
  );
}
export default App;
