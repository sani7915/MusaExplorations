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
import SwalProvider from "./context/swalCotext";
import I18NextProvider from "./context/I18NextContext";
function App() {
  return (
    <BrowserRouter>
      <I18NextProvider>
        <NavbarProvider>
          <SwalProvider>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<PortadaContenedor />} />
              <Route
                exact
                path="/gallery/:category"
                element={<GaleriaContenedor />}
              />
              <Route exact path="/signUp" element={<Apuntate />} />
              <Route exact path="/aboutMe" element={<SobreMi />} />
              <Route exact path="/contact" element={<Contacto />} />
              <Route exact path="/store" element={<Tienda />} />
            </Routes>
            <Footer />
          </SwalProvider>
        </NavbarProvider>
      </I18NextProvider>
    </BrowserRouter>
  );
}
export default App;
