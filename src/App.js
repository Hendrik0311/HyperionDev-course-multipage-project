// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import StorePage from "./components/StorePage";
import CartPage from "./components/CartPage";
import RegistrationForm from "./components/RegistrtionForm";
import LoginForm from "./components/LoginForm";
import "./App.css"; // Import the CSS file

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {" "}
          {/* Wrap Routes around Route components */}
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
