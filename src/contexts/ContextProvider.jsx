import React, { useState } from 'react'
import GlovalContext from './GlobalContext'


const ContextProvider = ({children}) => {

    const [isOpenSlider,setIsOpenSlider] = useState(false)

    const contextInfo = {
        setIsOpenSlider,
        isOpenSlider
    }

  return (
    <GlovalContext value={contextInfo}>
        {children}
    </GlovalContext>
  )
}

export default ContextProvider