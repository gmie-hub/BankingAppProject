import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Login from "./container/login";
import Register from "./container/register";
import Dashboard from "./container/dashboard";
import { UserContext } from "./context/userContext";
import { routes } from "./routes";
import Index from "./container/index";

function App() {

  const {users} = React.useContext(UserContext)
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navigate to={autoLogin}/>}/> */}
          <Route path={routes.index} element={<Index />}/>
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
