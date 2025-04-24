import React from 'react'
import {ItemNavbar} from '../../components/ItemNavbar/ItemNavbar.jsx'
export const Navbar=({children,style})=> {
  return (
    <nav className={style}>
        {children}
    </nav>
  )
}
