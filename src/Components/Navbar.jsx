import React from "react";
import { AppProvider } from "./utils/global.context";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: ${(props) => (props.theme === "dark" ? "#000" : "#fff")};
  color: ${(props) => (props.theme === "dark" ? "#fff" : "#000")};
`;

const Button = styled.button`
  background-color: ${(props) => (props.theme === "dark" ? "#fff" : "#000")};
  color: ${(props) => (props.theme === "dark" ? "#000" : "#fff")};
  border: 2px solid ${(props) => (props.theme === "dark" ? "#fff" : "#000")};
`;

function Navbar() {
  const { theme, ToggleTheme } = AppProvider();

  return (
    <div>
      <nav>
        <Container theme={state.theme}>
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
          <Button theme={state.theme} onClick={toggleTheme}>
            Cambiar Tema
          </Button>
        </Container>
      </nav>
    </div>
  );
}

export default Navbar;
