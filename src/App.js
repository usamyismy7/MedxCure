import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Layouts/Header";
import Footer from "./Components/Layouts/Footer";
import Home from "./Components/Pages/Home";
import DoctorInfo from "./Components/Pages/DoctorInfo";
import Appointment from "./Components/Pages/Appointment";
import NotFoundPage from "./Components/Pages/NotFoundPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctorInfo" element={<DoctorInfo />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
