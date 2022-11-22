import React from 'react'
import brokenPot from '../../images/diseño/broken pot.svg'
import { Link } from 'react-router-dom';
import { useI18nextContext } from "../../context/I18NextContext";
function Error404() {
  const { cambiarIdioma, t } = useI18nextContext();
  return (
    <div className='error404 col-11 m-auto'>
      <img src={brokenPot} alt={brokenPot} width={300} />
      <p>
        {t("error404.p1")}
      </p>
      <p>
        {t("error404.p2")}
      </p>
      <p className='mb-5'>
        {t("error404.p3")}
      </p>
      <div className='col-6 col-md-4 col-lg-2'>
        <Link to={'/'} className='form_button nav-link'>
          <button className='form_button'>
            {t("error404.btnValue")}
          </button>
        </Link>
      </div>
      <div className="error404_changeLenguage">
        <p className="change-language">
          {t("footer.language.p")}
          <span type="button" onClick={cambiarIdioma}>
            {t("footer.language.span")}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Error404