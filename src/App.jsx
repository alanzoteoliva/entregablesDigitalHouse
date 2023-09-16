import React from "react";
import { ThemeProvider } from "./Components/utils/global.context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import NotFound from "./Routes/NotFound";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route patch="contact" element={<Contact />} />
            <Route patch="favs" element={<Favs />} />
            <Route patch="detail" element={<Detail />} />
            <Route patch="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
