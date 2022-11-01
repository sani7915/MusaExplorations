import React from "react";

const GaleriaTrabajos = () => {
    const botones1 = [
        { btn: 'Todos' },
        { btn: 'Botánica' }
    ]

    const botones2 = [
        { btn: 'Estampados' },
        { btn: 'Naturaleza' }

    ]
    const botones3 = [
        { btn: 'Mujer' },
        { btn: 'Abstracto' }
    ]
    return (
        <div className=" m-auto col-10 col-md-11 col-xl-8 col-xxl-7">
            <h1 className="text-center fs-3 mt-5 mb-4">
                GALERIA DE TRABAJOS
            </h1>
            <div className="d-flex justify-content-center gap-2 gap-md-3  ">
                <div className="d-flex flex-column flex-md-row gap-2 gap-md-3">
                    {botones1.map((btn) => {
                        return (
                            <button className="btn-tienda " key={btn.btn}>
                                {btn.btn}
                            </button>
                        )
                    })
                    }
                </div>
                <div className="d-flex flex-column flex-md-row gap-md-3  gap-2">
                    {botones2.map((btn) => {
                        return (
                            <button className="btn-tienda" key={btn.btn}>
                                {btn.btn}
                            </button>
                        )
                    })
                    }
                </div>
                <div className="d-flex flex-column flex-md-row  gap-md-3  gap-2">
                    {botones3.map((btn) => {
                        return (
                            <button className="btn-tienda" key={btn.btn}>
                                {btn.btn}
                            </button>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default GaleriaTrabajos;