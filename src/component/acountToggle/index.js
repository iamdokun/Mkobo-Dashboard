import React, {useState} from 'react'
import './accountToggle.scss'

const AccountToggleControl = () => {
    const [select, setSelect] = useState(false)
  return (
    <div className="acctToggleWrap">
      <div className="spendingAcct">
        <button className={!select && "selected"} onClick={() => setSelect(false)}>Spending Account</button>
      </div>
      <div className="linkedAccts">
        <button className={select && "selected"} onClick={() => setSelect(true)}>Linked accouts</button>
      </div>
    </div>
  );
}

export default AccountToggleControl