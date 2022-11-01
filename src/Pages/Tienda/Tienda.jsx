import React from 'react'
import etsy from '../../images/etsyBanner.jpg'
import spoonflower from '../../images/spoonBanner.jpg'
import { useTranslation } from 'react-i18next'

const Tienda = () => {
  const [t] = useTranslation("global")
  return (
    <div className='d-flex flex-column align-items-center m-auto col-11 col-lg-10 col-xl-8 col-xxl-7 '>
      <h1 className='mt-4 text-center fs-3 arvo '>
        {t("tienda.titulo")}
      </h1>
      <p className='text-center col-9'>
        {t("tienda.subtitulo")}
      </p>
      <div className='d-flex flex-column flex-md-row  justify-content-between'>
        <div className='d-flex flex-column align-items-center card-tienda mb-3'>
          <a href="https://www.etsy.com/shop/musadeacuarela" target={'_blank'} rel="noreferrer">
            <img src={etsy} alt={etsy} className='img-fluid' />
          </a>
          <p className='mt-3 mb-1'>
            {t("tienda.etsy.p1")}
          </p>
          <p>
            {t("tienda.etsy.p2")}
          </p>
        </div>
        <div className='d-flex flex-column align-items-center card-tienda'>
          <a href="https://www.spoonflower.com/profiles/musadeacuarela?sub_action=designs" target={'_blank'} rel="noreferrer">
            <img src={spoonflower} alt={spoonflower} className='img-fluid' />
          </a>
          <p className='mt-3 mb-1'>
            {t("tienda.spoonflower.p1")}
          </p>
          <p className='text-center'>
            {t("tienda.spoonflower.p2")}
          </p>
        </div>
      </div>


    </div>
  )
}

export default Tienda