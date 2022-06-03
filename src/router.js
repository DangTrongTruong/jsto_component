import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LayoutPage from './layout/LayoutPage'
import ButtonPage from './page/ButtonPage'
import FormPage from './page/FormPage'
import HeaderPage from './page/HeaderPage'
import ModalPage from './page/ModalPage'
import NavbarPage from './page/NavbarPage'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<ButtonPage />} />
        <Route path="nav" element={<NavbarPage />} />
        <Route path="header" element={<HeaderPage />} />
        <Route path="modals" element={<ModalPage />} />
        <Route path="Forms" element={<FormPage />} />
      </Route>
    </Routes>
  )
}

export default Router