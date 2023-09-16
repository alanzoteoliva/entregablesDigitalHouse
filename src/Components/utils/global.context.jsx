import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  useState,
  useEffect
} from "react";
import { themeReducer, initialState } from "./themeReducer";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  const [doctors, setDoctors] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Error: No se pudo obtener datos de la API");
      }
      const convert = await response.json();
      setDoctors(convert);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const value = useMemo(() => ({ theme: state.theme, toggleTheme, doctors }), [
    state.theme,
    doctors
  ]);

  return (
    <ThemeContext.Provider value={value}>
      <div className={state.theme}> {children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe usarse dentro de un proveedor de temas");
  }
  return context;
};
