import React from 'react'
import { laminas } from "./data/laminas";
import GaleriaBotones from "./GaleriaBotones";
import GaleriaFilter from './GaleriaFilter';


const GaleriaContenedor = () => {

    return (
        <div>
            <GaleriaBotones />
            <GaleriaFilter respuesta={laminas }/>
        </div>
    )
}

export default GaleriaContenedor;