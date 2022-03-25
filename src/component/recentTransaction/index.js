import React, {useState} from "react";
import "./recentTransaction.scss";
import date from "../../asset/icons/date.svg"
import coloredArrowDown from "../../asset/icons/coloredArrowDown.svg";

const RecentTransaction = () => {

    const [debit, setDebit] = useState(false)
    const [credit, setCredit] = useState(false)

    const handleAll = () => {
        setDebit(false);
        setCredit(false);
    }

    const handleDebit = () => {
        setDebit(true);
        setCredit(false);
    }

    const handleCredit = () => {
        setDebit(false);
        setCredit(true);
    }

  return (
    <div className="recentTransactionAndPastDays">
      <h4 className="title">Recent Transaction</h4>
      <div className="recentTransactionWrap">
        <div className="recentTransaction">
          <div className="all">
            <button
              className={!debit && !credit && "selected"}
              onClike={handleAll}
            >
              All
            </button>
          </div>
          <div className="debit">
            <button
              className={debit && !credit && "selected"}
              onClick={handleDebit}
            >
              Debit
            </button>
          </div>
          <div className="credit">
            <button
              className={!debit && credit && "selected"}
              onClick={handleCredit}
            >
              Credit
            </button>
          </div>
        </div>
        <div className="pastDate">
          <ul>
            <li>
              <img src={date} alt="" />
            </li>
            <li>Past 30 Days</li>
            <li>
              <img src={coloredArrowDown} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecentTransaction;
