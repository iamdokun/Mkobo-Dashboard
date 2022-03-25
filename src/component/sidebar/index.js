import React from 'react'
import "./sidebar.scss"
import Logo from '../../asset/image/logo.png';
import Dashboard from '../../asset/icons/dashboard.svg';
import Mkolo from '../../asset/icons/Mkolo.svg';
import EarlPay from '../../asset/icons/earlyPay.svg';
import paybills from '../../asset/icons/paybills.svg';
import Card from '../../asset/icons/card.svg';
import profile from '../../asset/icons/profile.svg';
import settings from '../../asset/icons/settings.svg';
import faq from '../../asset/icons/faq.svg';
import chart from '../../asset/icons/chart.svg';

const Sidebar = () => {
  return (
    <>
      <div className="logoWrap">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="linkWrap">
        <ul>
          <li className="active">
            <a href="#">
              <img src={Dashboard} alt="" />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Mkolo} alt="" />
              <span>Mkolo</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={EarlPay} alt="" />
              <span>EarlyPay</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={paybills} alt="" />
              <span>Pay Bills</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Card} alt="" />
              <span>Debit Cards</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={profile} alt="" />
              <span>Profile</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={settings} alt="" />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="helpWrap">
        <ul>
          <li>
            <h4>Help & Support</h4>
          </li>
          <li>
            <a href="#">
              <img src={faq} alt="" />
              <span>FAQ's</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={chart} alt="" />
              <span>Talk to someone</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar