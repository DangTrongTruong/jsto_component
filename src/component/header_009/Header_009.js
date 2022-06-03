import React from "react";
// import icont1 from '../../assets/img/page/009/icon1.svg'
// import icont2 from '../../assets/img/page/009/icon2.svg'
// import icont3 from '../../assets/img/page/009/icon3.svg'
// import icont4 from '../../assets/img/page/009/icon4.svg'
// import icont5 from '../../assets/img/page/009/icon5.svg'
// import icont6 from '../../assets/img/page/009/icon6.svg'
// import icont7 from '../../assets/img/page/009/icon7.svg'

const Header_009 = () => {
  return (
    <>
      <div className="row select-title mt-3">
        <div className="col-md-12 d-flex align-items-center">
          <a className="text-decoration-none ms-4" href="/009_00_01.html">
            <div className="d-flex align-items-center">
              <img src="/assets/img/page/009/icon1.svg" alt="" />
              <span className="ms-2">ステータス一覧</span>
            </div>
          </a>
          <a className="text-decoration-none ms-4" href="/009_01_00.html">
            <div className="d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="18"
                viewbox="0 0 27.238 21.894"
              >
                <path
                  id="iconTrue"
                  d="M-1597.672,318.223c-.2.166-.418.316-.6.5q-7.9,7.9-15.793,15.8c-.172.172-.327.362-.432.479l-9.2-9.188,3.362-3.334,5.535,5.664,13.554-13.6c1.065,1.1,2.011,2.08,2.968,3.05a5.784,5.784,0,0,0,.609.475Z"
                  transform="translate(1624.41 -313.838)"
                  fill="#9a9a9a"
                  stroke="#2e2d2d"
                  stroke-width="1"
                ></path>
              </svg>
              <span className="ms-2 colorText--797979">入金済み一覧</span>
            </div>
          </a>
          <a className="text-decoration-none ms-4" href="/009_02_00.html">
            <div className="d-flex align-items-center">
              <img src="/assets/img/page/009/icon2.svg" alt="" />
              <span className="ms-2 colorText--797979">前払利用履歴</span>
            </div>
          </a>
          <a className="text-decoration-none ms-4" href="/009_03_00.html">
            <div className="d-flex align-items-center">
              <img src="/assets/img/page/009/icon3.svg" alt="" />
              <span className="ms-2 colorText--797979">支払確認一覧</span>
            </div>
          </a>
          <a className="text-decoration-none ms-4" href="/009_04_00.html">
            <div className="d-flex align-items-center select-title">
              <img src="/assets/img/page/009/icon4.svg" alt="" />
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
              <img src="/assets/img/page/009/icon5.svg" alt="" />
            </div>
          </div>
          <span className="icon-spacing">〜</span>
          <div className="relative">
            <div className="textfix">
              <span>2022.04.30</span>
            </div>
            <input className="time inputCalender" type="input" />
            <div className="subfix">
              <img src="/assets/img/page/009/icon6.svg" alt="" />
            </div>
          </div>
          <a
            className="btn btn--32A5F7 ms-3 width-130 d-flex align-items-center justify-content-center"
            href="#"
          >
            <img src="/assets/img/page/009/icon7.svg" alt="" />
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
              <span>支払い済み処理</span>
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
    </>
  );
};

export default Header_009;
