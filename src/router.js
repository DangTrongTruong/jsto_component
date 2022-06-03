import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutPage from "./layout/LayoutPage";
import ButtonPage from "./page/ButtonPage";
import HeaderPage from "./page/HeaderPage";
import ModalPage from "./page/ModalPage";
import NavbarPage from "./page/NavbarPage";
import SiderbarSettingPage from "./page/SiderbarSettingPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<ButtonPage />} />
        <Route path="nav" element={<NavbarPage />} />
        <Route path="header" element={<HeaderPage />} />
        <Route path="modals" element={<ModalPage />} />
        <Route path="siderbar" element={<SiderbarSettingPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
