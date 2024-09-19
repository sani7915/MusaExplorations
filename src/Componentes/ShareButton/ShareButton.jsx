import React from "react";

const ShareButton = (data) => {
  const {titulo,descripcion,url} =data.data  

  console.log(url);
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: titulo,
          text: descripcion,
          url: url,
        });
        console.log("Compartido con éxito");
      } catch (error) {
        console.error("Error al compartir:", error);
      }
    } else {
      console.log("La API Web Share no está disponible en este navegador.");
    }
  };

  return (
    <button  onClick={handleShare} style={{color:" #97b625"}} className="btn-share" >
      <i  className="fa-solid fa-square-share-nodes fs-1" />
    </button>
  );
};

export default ShareButton;
