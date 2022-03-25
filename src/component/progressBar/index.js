import React from "react";
import "./progressBar.scss";

const ProgressBar = () => {
  return (
    <div className="progressBarWrap">
      <div className="progressBar">
        <div className="progress"></div>
      </div>
      <div className="transactiionProgress">
        <div className="totlaIn">
          <div className="totlaInSquare"></div>
          <div className="totalLeft">Total In (₦): </div>
          <div>+42,000</div>
        </div>
        <div className="totalOut">
          <div className="totalRight">Total In (₦): </div>
          <div>-21,768</div>
          <div className="totlaOutSquare"></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
