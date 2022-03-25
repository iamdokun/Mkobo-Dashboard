import React from "react";
import "./quickAction.scss";


const QuickActionCard = ({children, actionText}) => {
  return (
    <div className="quickActionWrap">
     {children}
      <h5>{actionText}</h5>
    </div>
  );
};

export default QuickActionCard;
