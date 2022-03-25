import React from "react";
import "../../asset/styles/dashboard.scss";
import AccountToggleControl from "../../component/acountToggle";
import DashboardCarousel from "../../component/dashboardCarousel";
import DashboardHead from "../../component/dashboardHead";
import RecentTransaction from "../../component/recentTransaction";
import Sidebar from "../../component/sidebar";
import Transaction from "../../component/transaction";
import netflix from "../../asset/image/netflix.png";
import credit from "../../asset/icons/credit.svg";
import debit from "../../asset/icons/debit.svg";
import pending from "../../asset/icons/pending.svg";
import QuickActionCard from "../../component/quickAction";
import sendMoney from "../../asset/icons/sendMoney.svg";
import fundAcct from "../../asset/icons/fundAcct.svg";
import buyAirtime from "../../asset/icons/buyAirtime.svg";
import payBillscolored from "../../asset/icons/payBillscolored.svg";
import saveMoney from "../../asset/icons/saveMoney.svg";
import cashBack from "../../asset/icons/cashBack.svg";
import arrowForward from "../../asset/icons/arrowForward.svg";
import ProgressBar from "../../component/progressBar";

const Dashboard = () => {
  return (
    <div className="dashboardWrap">
      <div className="sidebarWrap">
        <Sidebar />
      </div>
      <div className="contentWrap">
        <DashboardHead />
        <div className="dashboard">
          <h3>Hello Bennedict,</h3>
          <DashboardCarousel />
          <br />
          <br />
          <hr style={{ border: "1px solid #0047cc", opacity: 0.2 }} />
          <div className="transactionWrap">
            <div className="transactions">
              <AccountToggleControl />
              <RecentTransaction />
              <ProgressBar />
              {/* Loading */}

              <div className="transactionContainer">
                <div className="transactionDividerWrap">
                  <h5>Today</h5>
                  <div className="divider"></div>
                </div>
                <div className="eachTransaction">
                  <Transaction
                    backgroundColor={"rgba(214, 216, 211, 0.3);"}
                    narration="Neflix"
                    narrationTitle={"Paid For"}
                    amount="-3000"
                    balance="300,000"
                  >
                    <img src={netflix} alt="" />
                  </Transaction>
                  <Transaction
                    backgroundColor={"#D9FFEF"}
                    narration="Ayoola Adeniji"
                    narrationTitle={"Recieved  From"}
                    amount="+3000"
                    balance="303,000"
                  >
                    <img src={credit} alt="" />
                  </Transaction>
                  <Transaction
                    backgroundColor={"#FDCFE7"}
                    narration="Car Repair"
                    narrationTitle={"Sent Money with Mtag"}
                    amount="-73,000"
                    balance="230,000"
                  >
                    <img src={debit} alt="" />
                  </Transaction>
                </div>
              </div>
              <div className="transactionContainer">
                <div className="transactionDividerWrap">
                  <h5>Sept 18</h5>
                  <div className="divider"></div>
                </div>
                <div className="eachTransaction">
                  <Transaction
                    backgroundColor={"rgba(214, 216, 211, 0.3);"}
                    narration="Neflix"
                    narrationTitle={"Paid For"}
                    amount="-3000"
                    balance="294,050"
                  >
                    <img src={netflix} alt="" />
                  </Transaction>
                  <Transaction
                    backgroundColor={"#FFDBC6"}
                    narration="Status: Pending"
                    narrationTitle={"Payme Request to Adeniji Ayoola"}
                    amount="+7,500"
                    balance="303,000"
                  >
                    <img src={pending} alt="" />
                  </Transaction>
                  <Transaction
                    backgroundColor={"#FDCFE7"}
                    narration="Car Repair"
                    narrationTitle={"Tranfer with Mtag"}
                    amount="-21,000"
                    balance="430,000"
                  >
                    <img src={debit} alt="" />
                  </Transaction>
                  <Transaction
                    backgroundColor={"rgba(214, 216, 211, 0.3);"}
                    narration="Neflix"
                    narrationTitle={"Paid For"}
                    amount="-3000"
                    balance="300,000"
                  >
                    <img src={netflix} alt="" />
                  </Transaction>
                  <Transaction
                    backgroundColor={"#D9FFEF"}
                    narration="Ayoola Adeniji"
                    narrationTitle={"Recieved  From"}
                    amount="+3000"
                    balance="303,000"
                  >
                    <img src={credit} alt="" />
                  </Transaction>
                </div>
              </div>
              <div className="buttonWrap">
                <button>View All Transactions</button>
              </div>
            </div>
            <div className="quickAction">
              <h5>Quick Actions</h5>
              <div className="actions">
                <QuickActionCard actionText={"Send Money"}>
                  <img src={sendMoney} alt="" />
                </QuickActionCard>
                <QuickActionCard actionText={"Fund Account"}>
                  <img src={fundAcct} alt="" />
                </QuickActionCard>
                <QuickActionCard actionText={"Buy Airtime"}>
                  <img src={buyAirtime} alt="" />
                </QuickActionCard>
                <QuickActionCard actionText={"Pay Bills"}>
                  <img src={payBillscolored} alt="" />
                </QuickActionCard>
                <QuickActionCard actionText={"Save Money"}>
                  <img src={saveMoney} alt="" />
                </QuickActionCard>
                <QuickActionCard actionText={"Cash Back"}>
                  <img src={cashBack} alt="" />
                </QuickActionCard>
              </div>
              <div className="upgradeAccountWrap">
                <div className="upgradeAccount">
                  <div className="text">
                    <h5>Upgrade your account</h5>
                    <p>Upgrade your account to increase your account limits.</p>
                  </div>
                  <img src={arrowForward} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
