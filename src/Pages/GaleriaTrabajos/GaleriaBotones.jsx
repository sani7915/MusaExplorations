import React from 'react';
import { Link } from 'react-router-dom';

const GaleriaBotones = () => {

    const botones = [
        { btn: 'todos' },
        { btn: 'botánica' },
        { btn: 'mujer' },
        { btn: 'abstracto' },
        { btn: 'estampados' },
        { btn: 'naturaleza' }
    ]


    return (
        <div className="m-auto col-11 ">
            <h1 className="text-center fs-3 mt-5 mb-4 arvo">
                GALERIA DE TRABAJOS
            </h1>
            <div className='d-flex justify-content-start justify-content-md-center botonera'>
                <div className="d-flex gap-2 gap-lg-3">
                    {botones.map((btn) => {
                        return (
                            <Link to={`/galeria/${btn.btn}`} key={btn.btn} className='nav-link'>
                                <button className="btn-galeria " >
                                    {btn.btn}
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