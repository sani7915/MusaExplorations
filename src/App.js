import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import "./SCSS/App.scss";
import PortadaContenedor from "../src/Pages/Portada/PortadaContenedor";
import GaleriaContenedor from "./Pages/GaleriaTrabajos/GaleriaContenedor";
import Apuntate from "../src/Pages/Apuntate/Apuntate";
import SobreMi from "../src/Pages/SobreMi/SobreMi";
import Contacto from "../src/Pages/Contacto/Contacto";
import Error404 from "./Pages/ERROR404/Error404";
import NavbarProvider from "./context/NavbarContext";
import SwalProvider from "./context/swalCotext";
import I18NextProvider from "./context/I18NextContext";
import Navbar from "./Componentes/Navbar/Navbar";
import PrivacyPolicy from "./Pages/Privacy Policy/PrivacyPolicy";
import CookiesBanner from "./Componentes/Cookies-Banner/CookiesBanner";
import Blog from "../src/Pages/Blog/Blog.jsx";
import Articulo from "./Pages/Blog/Articulo/Articulo.jsx";

function App() {
  return (
    <HashRouter>
      <I18NextProvider>
        <NavbarProvider>
          <CookiesBanner />
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
              <Route exact path="/blog" element={<Blog />} />
              <Route exact path="/blog-article/:title" element={<Articulo />} />

              <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </SwalProvider>
        </NavbarProvider>
      </I18NextProvider>
    </HashRouter>
  );
}
export default App;
