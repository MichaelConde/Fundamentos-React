import { Header } from "./layout/Header/Header"

import { Home } from "./Pages/Home/Home"

import { Footer } from "./layout/Footer/Footer"

import { Routes, Route } from "react-router-dom"


export const App = () => {
  return (
    <>

      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
 
      
      </>
  )
}
