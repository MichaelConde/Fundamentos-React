import React from 'react'

export const ImgComponent = ({component,style}) => {
  return (
    <img src={component} alt="" className={style} />
  )
}
