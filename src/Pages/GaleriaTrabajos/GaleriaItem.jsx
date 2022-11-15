import React, { useState } from 'react'


const GaleriaItem = ({ imagen, nombre, categoria, popUp }) => {
    const [hover, setHover] = useState('d-none');

    return (
        <div className="gallery-card" onMouseOver={() => setHover('')} onMouseOut={() => setHover('d-none')}>
            <div>
                <img src={require('../../images/laminas/' + imagen + '.jpg')} alt={imagen} onClick={() => popUp(require('../../images/laminas/' + imagen + '.jpg'), nombre, categoria)} />
            </div>
            <div className={`d-flex align-items-end gallery-card-description ${hover}`} >
                <p className='text-uppercase'>
                    {nombre} - {categoria}
                </p>
            </div>
        </div>
    )
}

export default GaleriaItem