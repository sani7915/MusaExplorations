import React from 'react'
import { useState } from 'react'

const GaleriaItem = ({ imagen, spoon, etsy, nombre, categoria }) => {
    const [hover, setHover] = useState('d-none')

    return (
        <div className="gallery-card" >
            <div className='d-flex flex-column col-1 col-md-2 align-items-end gap-2 gallery-card-icons'   >
                <div>
                    <a href="https://www.etsy.com/shop/musadeacuarela">
                        <img src={spoon} alt="" width={30}/>
                    </a>
                </div>
                <div>
                    <a href="https://www.spoonflower.com/profiles/musadeacuarela?sub_action=designs" target={'_blank'} rel="noreferrer">
                        <img src={require('../../images/laminas/' + etsy)} alt="" />
                    </a>
                </div>
            </div>
            <div className={`col-12 m-auto gallery-card-description ${hover}`}>
                <p className={`m-0 text-white`}>
                    {nombre} - {categoria}
                </p>
            </div>
            <div onMouseOver={() => setHover('')
            } onMouseOut={() => setHover('d-none')}>
                <img src={require('../../images/laminas/' + imagen + '.jpg')} alt={imagen} />
            </div>
        </div>
    )
}

export default GaleriaItem