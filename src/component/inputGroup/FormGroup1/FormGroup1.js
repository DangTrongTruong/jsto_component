import React from "react";
import "./FormGroup1.scss";


const FormGroup1 = ({ dataDesignForm }) => {
  const { icontLeftSrc, textLable, textPlaceholder, starError, icontRightSrc } = dataDesignForm;

  return (
    <>
      <div className="form-group row">
        <div className="col-3">
          <div className="label-content">
            <label for="">{textLable}</label>
            {starError ? <span>{starError}</span> : <></>}
          </div>
        </div>
        <div className="col-9">
          <div className="input-group">
            {icontLeftSrc ? (
              <img className="icontLeft" src={icontLeftSrc} alt="" />
            ) : (
              <></>
            )}
            <input
              className="active-warning action-focus"
              id="input-image"
              type="text"
              placeholder={textPlaceholder}
            />
            <img className="icontRight" src={icontRightSrc} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default FormGroup1;
