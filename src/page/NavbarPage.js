import { Col, Row } from "antd";
import React from "react";
import NavbarComponent1 from "../component/navbar_002_03/NavbarComponent1";

const NavbarPage = () => {
  return (
    <Row>
      <Col span={24}><NavbarComponent1/></Col>
      <Col span={24}></Col>
    </Row>
  );
};

export default NavbarPage;
