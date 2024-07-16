import React from 'react'
import {LayoutWrapper} from './LayoutStyled'

function Layout({children}) {
  return (
    <LayoutWrapper>
    {children}
    </LayoutWrapper>
  )
}

export default Layout