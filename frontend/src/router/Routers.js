import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import Destination from "../Pages/Destination";
import DestinationDetails from "../Pages/DestinationDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ThankYou from "../Pages/ThankYou";
import SearchResultList from "../Pages/SearchResultList";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/destinations/:id" element={<DestinationDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/destination/search" element={<SearchResultList />
    } />
    </Routes>
  );
};

export default Routers;
