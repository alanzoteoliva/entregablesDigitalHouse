import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  useState,
  useEffect
} from "react";
import { appReducer, initialState } from "./appReducer";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
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
    <AppContext.Provider value={value}>
      <div className={state.theme}> {children}</div>
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppProvider);
  if (!context) {
    throw new Error("useAppContext debe usarse dentro de un proveedor de temas");
  }
  return context;
};
