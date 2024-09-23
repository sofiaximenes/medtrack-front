import  {useState}  from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";

import Register from "./Components/Register/Register";

import AuthLayout from "./Layouts/AuthLayout";
import DefaultLayout from "./Layouts/DefaultLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/home" element={<Home />} />
        </Route>
       
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
      </Route>
      </Routes>
    </div>
  );
}

export default App;
