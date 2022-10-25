import React from "react";
import { Col, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { authRoutes, routes } from "../../routes";

const Layout =({children})=>{
    if (authRoutes.indexOf(window.location.pathname) !== -1){
        return <section>{children}</section>
    }
    return( 
       <React.Fragment>
         <Row className="m-0">
            <Row  className="spa " style={{background: "rgba(134, 69, 193, 0.726158)"}} >
            <Stack direction="horizontal">
                <div>
                    <Link className="deco" to={routes.Welcome}>Home</Link>
                    <Link className="deco sss" to={routes.login}>Login</Link>
                    <Link className="deco" to={routes.register}>Register</Link>
                    
                </div>
            </Stack>
            </Row>
            <Col>{children}</Col>
        </Row>
    
       </React.Fragment>
    );
};


export default Layout