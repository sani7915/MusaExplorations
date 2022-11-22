import React from 'react'
import Footer from '../../Componentes/Footer/Footer';
import { laminas } from "./data/laminas";
import GaleriaBotones from "./GaleriaBotones";
import GaleriaFilter from './GaleriaFilter';

const GaleriaContenedor = () => {

    return (
        <div>
            <GaleriaBotones />
            <GaleriaFilter respuesta={laminas}/>
            <Footer/>
        </div>
    )
}

export default GaleriaContenedor;