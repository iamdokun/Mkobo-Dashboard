import React, {useState} from 'react'
import "./otherCard.scss"
import brandeLine from "../../asset/icons/brandLine.svg";
import load from  "../../asset/icons/load.svg"
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const OtherCardPlan = ({style, plan, planPercent, interest}) => {
    const [showBalance, setShowBalance] = useState(false);
  return (
    <div className="otherCardWrap" style={style}>
      <div className="orderPlanTitle">
        <small>{plan}</small>
        <div>
          <span>{planPercent}% Achieved</span>
          <img src={load} alt="" />
        </div>
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
      <hr style={{ border: "1px solid #fff", opacity: 0.2 }} />

      <span className='interest'>Interest as at today: : ₦{interest}</span>
    </div>
  );
}

export default OtherCardPlan