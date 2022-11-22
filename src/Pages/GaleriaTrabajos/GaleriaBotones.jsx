import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const GaleriaBotones = () => {
    const [t] = useTranslation("global");
    const buttons = [
        { btnValue: t("galeriaBtnValue.todos"), categoria: 'All' },
        { btnValue: t("galeriaBtnValue.botanica"), categoria: 'Botanical' },
        { btnValue: t("galeriaBtnValue.mujer"), categoria: 'Woman' },
        { btnValue: t("galeriaBtnValue.abstracto"), categoria: 'Abstract' },
        { btnValue: t("galeriaBtnValue.estampados"), categoria: 'Patterns' },
        { btnValue: t("galeriaBtnValue.naturaleza"), categoria: 'Nature' }
    ]


    return (
        <div className="m-auto col-11 ">
            <h1 className="text-center fs-3 mt-5 mb-4 arvo">
                {t("galeriaTitle.h1")}
            </h1>
            <div className='d-flex justify-content-start justify-content-md-center botonera'>
                <div className="d-flex gap-2 gap-lg-3">
                    {buttons.map((btn) => {
                        return (
                            <Link to={`/gallery/${btn.categoria}`} key={btn.categoria} className='nav-link'>
                                <button className="btn-galeria " >
                                    {btn.btnValue}
                                </button>
                            </Link>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default GaleriaBotones