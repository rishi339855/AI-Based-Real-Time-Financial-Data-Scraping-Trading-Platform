import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/signup";
import Home from "./Pages/Home";
import Funds from "./Pages/Funds";
import Porfolio from "./Pages/Portfolio";
import Trade from "./Pages/Trade";
import Chatbot from "./Pages/chatbot.jsx";
import AdminLogin from "./Pages/AdminLogin";
import "./App.css";
import Admin from "./Pages/Admin.jsx";
// import { Home } from '@mui/icons-material';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/portfolio" element={<Porfolio />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
