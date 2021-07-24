import React from 'react';
import '../Style/HeaderStyle.css';


function Header2() {
  return (
    <div className="header2">
      <div className="headerLogo">
        <a href="/">
        <img src="starlogo1.png" alt="" /> 
        </a>
      </div>
      {/* <div className="headerCenter">
      </div> */}
      <div className="headerFlags">
        <img id="lang" src="lang.png" alt="" />
        <img id="maoriflag" src="maoriflag.png" alt="" />
        <img id="NZflag" src="nzflag.png" alt="" />
      </div>
    </div>

  );
}

export default Header2;
