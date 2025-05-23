import React from 'react'
import { useEffect, useState } from "react";

export const InputFilter = ({value,onChange,}) => {
  
  

  return (
    <input
      type="text"
      value={value}
      placeholder="Buscar producto..."
      className="w-72 p-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
      onChange={onChange}
    />
  )
}
