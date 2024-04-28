import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../scss/ui/_menu.scss";
import "../scss/base/_utilidades.scss";
import menuHambur from "../Img/menu-1.png";
import menuEquis from "../Img/menu-2.png";

const MenuHamburguesa = () => {
  const [hamburguesa, setHamburguesa] = useState(true);
  const [clicked, setClicked] = useState(false);

  const toggleMenu = () => {
    setHamburguesa(!hamburguesa);
    setClicked(!clicked);
  };

  return (
    <div className="contenedor">
      <div className="flex">
        <div className={`enlaces translate- ${hamburguesa ? "hiddem" : ""}`}>
          <NavLink className="enlaces__linkm" to="/works">
            <span className="enlaces__spa">1/</span> trabajos
          </NavLink>
          <NavLink className="enlaces__linkm" to="/tech">
            <span className="enlaces__spa">2/</span> lenguajes
          </NavLink>
          <NavLink className="enlaces__linkm" to="/about">
            <span className="enlaces__spa">3/</span> sobre mi
          </NavLink>
          <NavLink className="enlaces__linkm" to="/contact">
            <span className="enlaces__spa">4/</span> contacto
          </NavLink>
        </div>
        {/* <div className="logo">
                    <h1 className="logo__img">Logo</h1>
                </div>  */}

        <div className="menu">
          <button
            onClick={toggleMenu}
            className={`menu__hambu ${clicked ? "hiddem" : ""}`}
          >
            <img src={menuHambur} className="menu__icon" />
          </button>

          <button
            onClick={toggleMenu}
            className={`menu__equis ${clicked ? "show" : ""}`}
          >
            <img src={menuEquis} className="menu__icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuHamburguesa;
