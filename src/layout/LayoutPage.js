import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Layout, Menu } from "antd";
const { Header, Content } = Layout;

const LayoutPage = () => {
  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key='1'>
            <NavLink to="/">ButtonPage</NavLink>
          </Menu.Item>
          <Menu.Item key='2'>
            <NavLink to="nav">NavbarPage</NavLink>
          </Menu.Item>
          <Menu.Item key='3'>
            <NavLink to="header">HeaderPage</NavLink>
          </Menu.Item>
          <Menu.Item key='4'>
            <NavLink to="modals">ModalPage</NavLink>
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: "0 50px",
          marginTop: 64,
        }}
      >
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 380,
          }}
        >
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
};

export default LayoutPage;