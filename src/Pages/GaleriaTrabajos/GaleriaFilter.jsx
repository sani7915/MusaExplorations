import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GaleriaItem from './GaleriaItem'

const GaleriaFilter = ({ respuesta }) => {
    const [render, setRender] = useState(respuesta)
    const { category } = useParams();

    useEffect(() => {
        if (category === 'todos') {
            setRender(respuesta)
        } else if (category === 'natuabstract') {
            let filtro1 = respuesta.filter((element) => element.categoria === 'naturaleza')
            let filtro2 = respuesta.filter((element) => element.categoria === 'abstracto')
            let res = [...filtro1, ...filtro2]
            console.log(res);
            setRender(res)
        }
        else {
            setRender(respuesta.filter((element) => element.categoria === category))
        }
    }, [category, respuesta])


    return (
        <div className="d-flex justify-content-md-start col-md-11 col-lg-10  col-xl-8 col-xxl-7 m-auto flex-wrap gap-3 gap-md-4 gap-lg-3 mt-5 galery">
            {render.map(data => {
                return (
                    <GaleriaItem
                        key={data.id}
                        imagen={data.imagen}
                        spoon={data.spoon}
                        etsy={data.etsy}
                        nombre={data.nombre}
                        categoria={data.categoria}
                        tienda={data.tienda}
                    />
                )
            })
            }
        </div>
    )
}

export default GaleriaFilter;