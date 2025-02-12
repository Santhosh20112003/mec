import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./components/Home";
import ListOfDegrees from "./components/ListOfDegrees";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="">
        <Header />
        <Routes>
          <Route path="" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/list-of-degrees" element={<ListOfDegrees />} />
          <Route path="/students" element={<ListOfDegrees />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;