import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSwalContext } from '../../context/swalCotext';
import GaleriaItem from './GaleriaItem';
import { useI18nextContext } from '../../context/I18NextContext';


const GaleriaFilter = ({ respuesta }) => {
    const { langBoolean } = useI18nextContext()
    const [render, setRender] = useState([]);
    const { category } = useParams();
    const { popUpImgGaleria } = useSwalContext();
    const [categoryItem, setCategoryItem] = useState();

    useEffect(() => {
        if (category === 'All') {
            setRender(respuesta);
            if (langBoolean) {
                setCategoryItem(true)
            } else {
                setCategoryItem(false)
            }
        }
        else {
            if (langBoolean) {
                setRender(respuesta.filter((element) => element.categoriaEN === category))
                setCategoryItem(true)
            } else {
                setRender(respuesta.filter((element) => element.categoriaEN === category))
                setCategoryItem(false)
            }
        }
    }, [category, respuesta, langBoolean]);


    return (
        <div className="d-flex justify-content-md-start col-md-11 col-lg-10 col-xl-9 col-xxl-8 m-auto flex-wrap gap-3 gap-md-4 gap-lg-3 mt-5 galery">
            {render.map(data => {
                return (
                    <GaleriaItem
                        key={data.id}
                        imagen={data.imagen}
                        nombre={data.nombre}
                        categoria={categoryItem
                            ? data.categoriaES
                            : data.categoriaEN}
                        popUp={popUpImgGaleria}
                    />
                )
            })
            }
        </div>
    )
}

export default GaleriaFilter;