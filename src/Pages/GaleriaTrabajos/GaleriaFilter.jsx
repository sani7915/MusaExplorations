import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GaleriaItem from './GaleriaItem';
import Swal from 'sweetalert2';
import SweetAlert2 from 'sweetalert2-react-content';
import { useNavbarContext } from '../../context/NavbarContext';

const GaleriaFilter = ({ respuesta }) => {
    const [render, setRender] = useState(respuesta);
    const { category } = useParams();
    const MySwal = SweetAlert2(Swal);
    const { setAnimationScrollUpTrue, setAnimationScrollUpFalse } = useNavbarContext();


    const popUp = (img,nombre,categoria) => {
        setAnimationScrollUpTrue()

        MySwal.fire({
            title: `${nombre} - ${categoria}`,
            color: '#ffffff',
            imageUrl: img,
            showConfirmButton: false,
            showCloseButton: true,
            position: 'center',
            showClass: {
                popup: 'animate__animated animate__fadeIn animate__fast'
                , image: 'swal2-image',
                title: 'swal2-title'

            },
            customClass: {
                popup: 'swal2-modal',
                closeButton: 'swal2-close',
            }
        }).then(() => {
            if (window.scrollY < 10) {
                setAnimationScrollUpFalse()
            } 
             if (window.innerWidth < 768) {
                setAnimationScrollUpFalse()
            }
        });
    };

    useEffect(() => {
        if (category === 'todos') {
            setRender(respuesta);
        } else {
            setRender(respuesta.filter((element) => element.categoria === category))
        }
    }, [category, respuesta]);


    return (
        <div className="d-flex justify-content-md-start col-md-11 col-lg-10 col-xl-9 col-xxl-8  m-auto flex-wrap gap-3 gap-md-4 gap-lg-3 mt-5 galery">
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
                        popUp={popUp}
                    />
                )
            })
            }
        </div>
    )
}

export default GaleriaFilter;