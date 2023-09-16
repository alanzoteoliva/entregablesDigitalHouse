import React from "react";
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
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route patch="contact" element={<Contact />} />
          <Route patch="favs" element={<Favs />} />
          <Route patch="detail" element={<Detail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
