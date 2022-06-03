import { Col, Row } from "antd";
import React from "react";
import NavbarComponent from "../component/navbar/NavbarComponent";

const NavbarPage = () => {
  return (
    <Row>
      <Col span={24}><NavbarComponent/></Col>
      <Col span={24}></Col>
    </Row>
  );
};

export default NavbarPage;
