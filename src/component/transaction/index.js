import React from "react";
import "./transaction.scss";

import Avatar from "@mui/material/Avatar";

const Transaction = ({
  children,
  backgroundColor,
  narration,
  narrationTitle,
  amount,
  balance,
}) => {
  return (
    <div className="eachTransactionWrap">
      <ul>
        <li className="transacctionImg">
          <Avatar sx={{ bgcolor: backgroundColor }} variant="rounded">
            {children}
          </Avatar>
        </li>
        <li className="narration">
          <div className="paidFor">{narrationTitle}</div>
          <div className="paidItem">{narration}</div>
        </li>
        <li className="payment">
          <div className="amountPaid">
            <span>₦ </span>
            {amount}
          </div>
          <div className="balance">
            <span>₦ </span>
            {balance}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Transaction;
