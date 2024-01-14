import React from "react";
import Footer from "../../Componentes/Footer/Footer";
import BlogPortada from "./BlogPortada";
import ArticulosPublicados from "./Articulos Publicados/ArticulosPublicados";

function Blog() {
  return (
    <div>
      <BlogPortada />
      <ArticulosPublicados/>
      <Footer />
    </div>
  );
}

export default Blog;
