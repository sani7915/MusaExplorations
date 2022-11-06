import React, { useEffect, useState } from 'react'
import { laminas } from "./data/laminas";
import GaleriaBotones from "./GaleriaBotones";
import GaleriaItem from "./GaleriaItem";


const GaleriaContenedor = () => {
    const [respuesta, setRespuesta] = useState(laminas)
    const [categoria, setCategoria] = useState()
    // const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (categoria === undefined || categoria === 'todos') {
            setRespuesta(laminas)
        } else {
            setRespuesta(laminas.filter(element => element.categoria === categoria))
        }
    }, [categoria])

    console.log(categoria);
    const filtrar = (param) => {
        setCategoria(param)
    }
    return (
        <div>
            <GaleriaBotones valuefunction={filtrar} />

            {/* <div className={loading
                ? 'd-none'
                : 'd-flex justify-content-center mt-5'}>
                <div className="spinner-border " role="status">
                </div>
            </div> */}
            <div className="d-flex justify-content-center col-xl-8 col-xxl-7 m-auto flex-wrap gap-3 mt-5 galery">
                {respuesta.map(data => {
                    return (
                        <GaleriaItem
                            key={data.id}
                            imagen={data.imagen}
                            spoon={data.spoon}
                            etsy={data.etsy}
                            nombre={data.nombre}
                            categoria={data.categoria}
                        />
                    )
                })
                }
            </div>
        </div >
    )
}

export default GaleriaContenedor;