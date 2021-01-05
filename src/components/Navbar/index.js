import React, { useState } from "react";
import clsx from 'clsx'

import "./style.css";

function Navbar() {
  const [flag, setFlag] = useState(false);

  function addClass() {
    if (flag === false) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }

  return (
    <nav className="menu">
      <div onClick={addClass}>
        <span className={clsx('hamburguer', {active: flag})}></span>
      </div>

      <ul className={clsx('menuList', {active:flag})}>
        <li className="listItem">
          <a href="#" title="Ir para">
            Inicio
          </a>
        </li>
        <li className="listItem">
          <a href="#" title="Ir para">
            p1
          </a>
        </li>
        <li className="listItem">
          <a href="#" title="Ir para">
            p2
          </a>
        </li>
        <li className="listItem">
          <a href="#" title="Ir para">
            p3
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
