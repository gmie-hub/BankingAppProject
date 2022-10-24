import React from "react";
import {BrowserRouter, Routes, Route, Navigate,} from "react-router-dom";
import './App.css';
import Login from "./container/login";
import Register from "./container/register";
import Welcome from "./container/index";
import Dashboard from "./container/dashboard";
import { UserContext } from "./context/userContext";
import { routes } from "./routes";

function App() {

  const {users, autoLogin} = React.useContext(UserContext)
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={autoLogin}/>}/>
          <Route path={routes.welcome} element={<Welcome />}/>
          <Route path={routes.register} element={<Register/>} />
          <Route path={routes.login} element={<Login/>} />
          {users.authentication && (
            <Route path={routes.dashboard} element={<Dashboard/>} />
          )}
         
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
