import React from 'react'

export const Card = (characters) => {
const {name,species,image} = characters
    return (

    <div className='bg-gray-400 flex flex-col w-60 items-center rounded-xl  '>
        <h2 className='text-zinc-950'>{name}</h2>
        <h3 className='text-zinc-950'>{species}</h3>
        <img src={image} alt="" className='rounded-b-lg'/>
    </div>
  )
}








