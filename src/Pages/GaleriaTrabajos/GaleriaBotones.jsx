import React from 'react';
import { Link } from 'react-router-dom';

const GaleriaBotones = () => {

    const botones1 = [
        { btn: 'todos' },
        { btn: 'botánica' }
    ]

    const botones2 = [
        { btn: 'estampados' },
        { btn: 'naturaleza' }

    ]
    const botones3 = [
        { btn: 'mujer' },
        { btn: 'abstracto' }
    ]
    return (
        <div className=" m-auto col-10 col-md-11 col-xl-8 col-xxl-7">
            <h1 className="text-center fs-3 mt-5 mb-4 arvo">
                GALERIA DE TRABAJOS
            </h1>
            <div className="d-flex justify-content-evenly justify-content-md-center gap-1 gap-md-2">
                <div className="d-flex flex-column align-items-center flex-md-row gap-1 gap-md-2">
                    {botones1.map((btn) => {
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
                <div className="d-flex flex-column align-items-center flex-md-row gap-1 gap-md-2">
                    {botones2.map((btn) => {
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
                <div className="d-flex flex-column align-items-center flex-md-row gap-1 gap-md-2">
                    {botones3.map((btn) => {
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