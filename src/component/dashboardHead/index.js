import React from "react";
import "./dashboardHead.scss";
import Avatar from "@mui/material/Avatar";
import notification from "../../asset/icons/notification.svg";
import arrowDown from "../../asset/icons/arrowDown.svg";

const DashboardHead = () => {
  return (
    <div className="dashboardHeadWrap">
      <ul>
        <li></li>
        <li className="headWrap">
          <h5>My Dashboard</h5>
        </li>
        <li>
          <div className="profileWrap">
            <ul>
              <li>
                <img src={notification} alt="notification" />
              </li>
              <li>
                <Avatar alt="Remy Sharp" src="" />
              </li>
              <li>Benedict Ulinfo</li>
              <li>
                <img src={arrowDown} alt="" />
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DashboardHead;
