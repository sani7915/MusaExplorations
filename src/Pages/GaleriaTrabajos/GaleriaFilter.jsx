import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSwalContext } from '../../context/swalCotext';
import GaleriaItem from './GaleriaItem';

const GaleriaFilter = ({ respuesta }) => {
    const [render, setRender] = useState(respuesta);
    const { category } = useParams();
    const {popUpImgGaleria} = useSwalContext()

    useEffect(() => {
        if (category === 'todos') {
            setRender(respuesta);
        } else {
            setRender(respuesta.filter((element) => element.categoria === category))
        }
    }, [category, respuesta]);


    return (
        <div className="d-flex justify-content-md-start col-md-11 col-lg-10 col-xl-9 col-xxl-8 m-auto flex-wrap gap-3 gap-md-4 gap-lg-3 mt-5 galery">
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
                        popUp={popUpImgGaleria}
                    />
                )
            })
            }
        </div>
    )
}

export default GaleriaFilter;