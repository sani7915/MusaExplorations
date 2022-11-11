import React, { useEffect } from 'react'
import { useState } from 'react'

const GaleriaItem = ({ imagen, spoon, etsy, nombre, categoria, tienda }) => {
    const [hover, setHover] = useState('d-none');
    const [selectTienda, setSelectTienda] = useState();

    useEffect(() => {
        let ets = tienda.some((element) => element.etsy === true)
        let spn = tienda.some((element) => element.spoon === true)
        if (ets) {
            setSelectTienda(etsy);
        } else if (spn) {
            setSelectTienda(spoon)
        }
    }, [etsy, spoon, tienda.etsy, tienda.spoon, tienda])

    return (
        <div className="gallery-card" onMouseOver={() => setHover('')} onMouseOut={() => setHover('d-none')}>
            <div>
                <img src={require('../../images/laminas/' + imagen + '.jpg')} alt={imagen} />
            </div>
            <div className={`col-11 m-auto gallery-card-description ${hover}`} >
                <p className={`m-0 text-white`}>
                    {nombre} - {categoria}
                </p>
                <a href={`${selectTienda}`} target={'_blank'} rel={"noreferrer"}>
                    <span>
                    <i className="fa-solid fa-cart-shopping"></i>
                    
                    </span>
                </a>
            </div>
        </div>
    )
}

export default GaleriaItem