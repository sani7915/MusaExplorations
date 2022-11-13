import React, { createContext, useContext, useState, useEffect } from 'react'
const NavbarContext = createContext();
export const useNavbarContext = () => useContext(NavbarContext)

function NavbarProvider({ children }) {
  const [initial, setInitial] = useState();
  const [animationUpDown, setAnimationUpDown] = useState();
  const [animationFadeInOut, setAnimationFadeInOut] = useState();


  useEffect(() => {
    setAnimationUpDown('')
    setAnimationFadeInOut('')
    setInitial(true)
  }, [])
  const changeBrand = () => {
    if (window.scrollY > 10 && window.innerWidth >= 768) {
      setInitial(false)
      setAnimationUpDown('animation-Up')
      setAnimationFadeInOut(' animate__animated animate__fadeOut ')
    } else if (window.scrollY === 0) {
      setInitial(true)
      setAnimationUpDown('animation-down')
      setAnimationFadeInOut(' animate__animated animate__fadeIn animate__faster')
    }
  }

  window.addEventListener('scroll', changeBrand);


  const setAnimationScrollUpTrue = () => {
    setInitial(false)
    setAnimationUpDown('animation-Up')
    setAnimationFadeInOut(' animate__animated animate__fadeOut ')
  }
  const setAnimationScrollUpFalse = () => {
    setInitial(true)
    setAnimationUpDown('animation-down')
    setAnimationFadeInOut(' animate__animated animate__fadeIn animate__faster')
  }

  return (
    <NavbarContext.Provider value={{
      initial,
      animationUpDown,
      animationFadeInOut,
      setAnimationScrollUpTrue,
      setAnimationScrollUpFalse,
    }}>
      {children}
    </NavbarContext.Provider>
  )
}

export default NavbarProvider;