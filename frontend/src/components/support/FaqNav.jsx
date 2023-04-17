import React from 'react'
import { faqNavStyle } from "../../styles/SupportStyle";


const FaqNav = () => {
  return (
    <>
    <div>
      <nav>
        <label className="fnLabel" htmlFor="전체">
          <input type="checkbox" />
          <span>전체</span>
        </label>
      </nav>
    </div>
    </> 
  )
}

export default FaqNav;