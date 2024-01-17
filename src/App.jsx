import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MyState from "./Context/Mystate";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import ProtectedRoutesForAdmin from "./Admin/ProtectedRoutesForAdmin";
import { routes } from "./routeConfig";

function App() {
  return (
    <MyState>
      <div className="App">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Routes>
        <ToastContainer />
      </div>
    </MyState>
  );
}

export default App;
