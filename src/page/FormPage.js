import React from "react";
import FormGroup1 from "../component/inputGroup/FormGroup1/FormGroup1";

const dataDesignForm = {
  icontLeftSrc: "/assets/img/page/002_03_01/icont2.svg",
  textLable: "トークンのアイコン（画像）",
  textPlaceholder: "画像ファイルを選んでください。",
  starError: "✴︎",
  icontRightSrc:"/assets/img/page/002_03_01/icont3.svg",
};

const FormPage = () => {
  return (
    <div>
      <FormGroup1 dataDesignForm={dataDesignForm} />
    </div>
  );
};

export default FormPage;
