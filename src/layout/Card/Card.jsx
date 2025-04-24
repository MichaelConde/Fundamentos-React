import React from 'react'

export const Card = ({ title, price, image }) => {
  return (
    <div className="bg-white w-64 rounded-2xl shadow-lg flex flex-col items-center justify-between p-4 hover:scale-105 transition-transform duration-300">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-contain mb-4 rounded-xl bg-gray-100 p-2"
      />
      <h2 className="text-lg font-semibold text-center text-gray-800 mb-2">{title}</h2>
      <h3 className="text-md font-bold text-green-600">${price}</h3>
    </div>
  )
}
