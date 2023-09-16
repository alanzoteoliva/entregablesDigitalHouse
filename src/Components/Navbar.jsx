import React from "react";
import { useTheme } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

function Navbar() {
  const { theme, ToggleTheme } = useTheme();

  return (
    <div>
      <nav>
        <div>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
            <li>
              <Link to="/detail">Detalle</Link>
            </li>
            <li>
              <Link to="/favs">Destacados</Link>
            </li>
          </ul>
        </div>
        <button onClick={ToggleTheme}>
          <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
