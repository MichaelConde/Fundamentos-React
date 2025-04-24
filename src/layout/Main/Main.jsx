import React from 'react'

export const Main = ({children,style}) => {
  return (
    <main className={style}> 
        {children}
    </main>
  )
}
