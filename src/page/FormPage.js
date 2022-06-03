import React from "react";
import FormGroup1 from "../component/inputGroup/FormGroup1/FormGroup1";
import icontLeftSrc from "../assets/img/page/002_03_01/icont2.svg";
import icontRightSrc from "../assets/img/page/002_03_01/icont3.svg";

const dataDesignForm = {
  icontLeftSrc: icontLeftSrc,
  textLable: "トークンのアイコン（画像）",
  textPlaceholder: "画像ファイルを選んでください。",
  starError: "✴︎",
  icontRightSrc: icontRightSrc,
};

const FormPage = () => {
  return (
    <div>
      <FormGroup1 dataDesignForm={dataDesignForm} />
    </div>
  );
};

export default FormPage;
