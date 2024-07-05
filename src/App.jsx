import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default App;
