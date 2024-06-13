import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthPages from "./pages/AuthPages";
import { Route, Routes } from "react-router-dom";
import ForgotCredential from "./components/authPages/ForgotCredential";
import Dashboard from "./components/maindashboard/Dashboard";
import MainDashbord from "./pages/MainDashbord";
import HomeDashboard from "./pages/HomeDashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<AuthPages />} />
        {/* <Route path="/" element={<MainDashbord />} /> */}
        <Route path="/" element={<MainDashbord />}>
          <Route index element={<HomeDashboard />} />
          <Route path="home-dashboard" element={<HomeDashboard />} />
        </Route>
        <Route path="/home-dashboard" element={<HomeDashboard />} />
        <Route path="/forgot-credential" element={<ForgotCredential />} />
      </Routes>
    </div>
  );
}

export default App;
