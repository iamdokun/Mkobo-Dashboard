import React, {useState} from 'react'
import "./accountBalance.scss"
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import brandeLine from '../../asset/icons/brandLine.svg'

const AccountBalance = () => {
    const [showBalance, setShowBalance] = useState(false);
  return (
    <div className="accountBalanceWrap">
      <div className="accountTitle">
        <small>Avalaible Balance</small>
        <button>Tier 1</button>
      </div>
      <div className="brandLine">
        <img src={brandeLine} alt="" />
      </div>
      <div className="banlance">
        <small>{showBalance && "₦"}</small>
        <p>{showBalance ? "6,390.68" : "****"}</p>
        <span>
          {showBalance ? (
            <span onClick={() => setShowBalance(!showBalance)}>
              <VisibilityOffIcon />
            </span>
          ) : (
            <span onClick={() => setShowBalance(!showBalance)}>
              <VisibilityIcon />
            </span>
          )}
        </span>
      </div>
      
    </div>
  );
}

export default AccountBalance