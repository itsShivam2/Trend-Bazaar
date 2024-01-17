import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Admin from "./Admin";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";

const ProtectedRoutesForAdmin = () => {
  const admin = JSON.parse(localStorage.getItem("user"));
  console.log("Admin data:", admin);
  const isAdmin = admin && admin.user.email === "shivam@gmail.com";
  console.log("isAdmin:", isAdmin);

  if (!isAdmin) {
    console.log("Not an admin. Redirecting...");
    return <Navigate to="/unauthorized" />;
  }

  return (
    <Routes>
      <Route path="/*" element={<Admin />} />
      <Route path="/addproduct" element={<AddProduct />} />
      <Route path="/updateproduct" element={<UpdateProduct />} />
    </Routes>
  );
};

export default ProtectedRoutesForAdmin;
