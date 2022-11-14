import React, { createContext, useContext } from 'react';
import Swal from 'sweetalert2';
import SweetAlert2 from 'sweetalert2-react-content';
import { useNavbarContext } from './NavbarContext';

const SwalContext = createContext();
export const useSwalContext = () => useContext(SwalContext)

function SwalProvider({ children }) {
    const MySwal = SweetAlert2(Swal);
    const { setAnimationScrollUpTrue, setAnimationScrollUpFalse } = useNavbarContext();

    const popUpImgGaleria = (img, nombre, categoria) => {
        setAnimationScrollUpTrue();
        MySwal.fire({
            title: `${nombre} - ${categoria}`,
            color: '#ffffff',
            imageUrl: img,
            showConfirmButton: false,
            showCloseButton: true,
            position: 'center',
            showClass: {
                popup: 'animate__animated animate__fadeIn animate__fast'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOut animate__fast'
            },
            customClass: {
                popup: 'galeria-swal2-popup',
                closeButton: 'swal2-close ',
                title: 'galeria-swal2-title',
                image: 'galeria-swal2-image',
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

    const popUpForm = (text,btnValue,img) => {
        MySwal.fire({
            title: text,
            color: '#404040',
            imageUrl:img,
            allowOutsideClick:false,
            showConfirmButton: true,
            confirmButtonText:btnValue,
            confirmButtonColor:'#c89e6f',
            focusConfirm:false,
            showCloseButton: true,
            position: 'center',
            showClass: {
                popup: 'animate__animated animate__fadeIn animate__fast'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOut animate__fast'
            },
            customClass: {
                closeButton: 'swal2-close',
                confirmButton: 'newsletter_swal2-styled',
                popup: 'newsletter_swal2-popup ',
                title: 'newsletter_swal2-title',
                image: 'newsletter_swal2-image',
            }
        })
    };


    return (
        <SwalContext.Provider value={{ popUpImgGaleria, popUpForm}} >
            {children}
        </SwalContext.Provider>
    )
}

export default SwalProvider;