import React from  "react";
import "./styles.css";
import icon from "../../../utils/facebook.png";
import circle from "../../../utils/account_circle_white.png";

function Header() {
  return (
    <header>
      <div className="header-content">
        <img className="fb-logo" src={icon}/>
        <div className="menu-ac">
          <p>Meu perfil</p>
          <img className="ac-logo" src={circle}/>
        </div>
      </div>
    </header>
  )
};

export default Header;