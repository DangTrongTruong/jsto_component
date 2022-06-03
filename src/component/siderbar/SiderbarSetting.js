import React from "react";
import "./_sidebar.scss";

const SiderbarSetting = () => {
  const dataSiderbarSetting = [
    {
      icon: "home",
      text: "管理者アカウント",
      link: "/001_01_01.html",
      dataActiveLink:
        "/001_01_01.html, /001_01_02.html, /001_01_07.html, /001_01_16.html",
      type: "link",
    },
    {
      text: "Admin Setting",
      type: "title",
    },
    {
      icon: "setting",
      text: "管理権限の設定",
      link: "/001_01_13.html",
      dataActiveLink: "/001_01_13.html",
      type: "link",
    },
    {
      icon: "people",
      text: "新規管理者の登録s",
      link: "/001_01_14.html",
      dataActiveLink: "/001_01_14.html",
      type: "link",
    },
  ];
  return (
    <>
      <div class="show sidebar-body" id="sidebar" style={{ height: "800px" }}>
        <div class="sidebar-head">
          <div class="navbar-brand">
            <a class="main-logo" href="/001_00_02.html">
              <img
                src="img/images/J-STOAdmin.svg"
                width="207"
                height="31"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="sidebar-content">
          {dataSiderbarSetting.map((item, index) => {
            if (item.type === "title") {
              return <h3 class="sidebar-heading">{item.text}</h3>;
            }
            return (
              <>
                <ul class="sidebar-group">
                  <a class="text-decoration-none" href={item.link}>
                    <li
                      class="sidebar-item"
                      data-activeLink={item.dataActiveLink}
                    >
                      <div class="sidebar-item-icon">
                        <img
                          src={`img/icons/siderbar/${item.icon}.svg`}
                          width="207"
                          height="31"
                          alt=""
                        />
                      </div>
                      <span class="sidebar-item-title">{item.text}</span>
                    </li>
                  </a>
                </ul>
              </>
            );
          })}
        </div>
        <div class="sidebar-foot">
          <ul class="sidebar-group">
            <a
              class="text-decoration-none"
              href="000_01\001_01_13.html_admin_login.html"
            >
              <li class="sidebar-item">
                <div class="sidebar-item-icon">
                  <img src="img/icons/logout.svg" alt="" />
                </div>
                <span class="sidebar-item-title ms-3 colorText--f2f2f2">
                  サインアウト
                </span>
              </li>
            </a>
          </ul>
          <h4 class="sidebar-foot-title">© LEVIAS inc. All rights reserved.</h4>
        </div>
      </div>
    </>
  );
};

export default SiderbarSetting;
