import React from "react";
import './Header_009.scss'

const Header_009 = () => {
  return (
    <div className="wrapper-009_00_00">
      <div className="row select-title mt-3">
        <div className="col-md-12 d-flex align-items-center">
          <a className="text-decoration-none ms-4" href="/009_00_01.html">
            <div className="d-flex align-items-center">
              <img src="/assets/img/page/009/icont1.svg" alt="" />
              <span className="ms-2">ステータス一覧</span>
            </div>
          </a>
          <a className="text-decoration-none ms-4" href="/009_01_00.html">
            <div className="d-flex align-items-center">
              <img src="/assets/img/page/009/icont2.svg" alt="" />
              <span className="ms-2 colorText--797979">入金済み一覧</span>
            </div>
          </a>
          <a className="text-decoration-none ms-4" href="/009_02_00.html">
            <div className="d-flex align-items-center">
              <img src="/assets/img/page/009/icont3.svg" alt="" />
              <span className="ms-2 colorText--797979">前払利用履歴</span>
            </div>
          </a>
          <a className="text-decoration-none ms-4" href="/009_03_00.html">
            <div className="d-flex align-items-center">
              <img src="/assets/img/page/009/icont4.svg" alt="" />
              <span className="ms-2 colorText--797979">支払確認一覧</span>
            </div>
          </a>
          <a className="text-decoration-none ms-4" href="/009_04_00.html">
            <div className="d-flex align-items-center select-title">
              <img src="/assets/img/page/009/icont5.svg" alt="" />
              <span className="ms-2 colorText--797979">マッチング状況</span>
            </div>
          </a>
        </div>
      </div>
      <div className="row mt-4 ml-1r align-items-center">
        <div className="col-md-7 d-flex align-items-center btn-left">
          <span className="titleHeader">期間指定</span>
          <div className="relative ml-2r">
            <div className="textfix">
              <span>2021.12.24</span>
            </div>
            <input className="time inputCalender" type="input" />
            <div className="subfix">
              <img src="/assets/img/page/009/icont6.svg" alt="" />
            </div>
          </div>
          <span className="icon-spacing">〜</span>
          <div className="relative">
            <div className="textfix">
              <span>2022.04.30</span>
            </div>
            <input className="time inputCalender" type="input" />
            <div className="subfix">
              <img src="/assets/img/page/009/icont7.svg" alt="" />
            </div>
          </div>
          <a
            className="btn btn--32A5F7 ms-3 width-130 d-flex align-items-center justify-content-center"
            href="#"
          >
            <img src="/assets/img/page/009/icont8.svg" alt="" />
            <span className="ms-2">期間指定</span>
          </a>
        </div>
        <div className="col-md-5">
          <div className="col-md-12 d-flex align-items-center justify-content-end btn-right">
            <a className="link-csv" href="#">
              CSVファイル出力
            </a>
            <a
              className="btn btn--494A52 d-flex align-items-center justify-content-center me-3"
              href="#"
            >
              <span className="text-nowrap">支払い済み処理</span>
            </a>
            <a
              className="btn btn--404040 d-flex align-items-center justify-content-center"
              href="#"
            >
              <span>一括チェック</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header_009;
