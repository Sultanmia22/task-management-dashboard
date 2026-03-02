import React, { useState } from 'react'
import GlovalContext from './GlobalContext'


const ContextProvider = ({children}) => {

    const [isOpenSlider,setIsOpenSlider] = useState(false)

    const [user,setUser] = useState(null)

    const contextInfo = {
        setIsOpenSlider,
        isOpenSlider,
        setUser
    }

  return (
    <GlovalContext value={contextInfo}>
        {children}
    </GlovalContext>
  )
}

export default ContextProvider