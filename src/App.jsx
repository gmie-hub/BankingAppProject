import React from "react";
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import './App.css';
import Login from "./container/login";
import Register from "./container/register";
import Welcome from "./container/welcome";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />}/>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
