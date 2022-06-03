import { Col, Row } from "antd";
import React from "react";
import SiderbarSetting from "../component/siderbar/SiderbarSetting";

const SiderbarSettingPage = () => {
  return (
    <Row>
      <Col span={24}>
        <SiderbarSetting />
      </Col>
      <Col span={24}></Col>
    </Row>
  );
};

export default SiderbarSettingPage;
