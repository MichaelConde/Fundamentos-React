import React from 'react'
import { NavLink } from "react-router-dom"

export const ItemNavbar = ({styles,content,route }) => {
  return (
    <li className='list-none '>
    <NavLink className={styles} to={route}>{content}</NavLink>
  </li>
  )
}