import React from "react";
import "./NavbarComponent.scss";

const data = [
  {
    title: "初期設定",
    active: "disabled",
  },
  {
    title: "周辺設定",
    active: "",
  },
  {
    title: "プロジェクト設定",
    active: "",
  },
  {
    title: "発行体設定",
    active: "",
  },
  {
    title: "書面設定",
    active: "",
  },
  {
    title: "名簿データ設定",
    active: "",
  },
];

const NavbarComponent1 = () => {
  return (
    <div className="header-002_03_09">
      <div className="list-group list-group-horizontal">
        {data?.map((item, index) => {
          return (
            <a
              className={`list-group-item list-group-item-action ${item.active}`}
              href="#"
              key={index}
            >
              <span>{item.title}</span>
              <span className={`ms-2 colorText--FF0000`}>✴︎</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default NavbarComponent1;
