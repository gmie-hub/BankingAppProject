import React from "react";
import { authRoutes} from "../../routes";
import CustomNav from "../nav";

const Layout =({children})=>{
    if (authRoutes.indexOf(window.location.pathname) !== -1){
        return <section>{children}</section>
    }
    return( 
       <React.Fragment>
            <CustomNav/>
            {children}
       </React.Fragment>
    );
};


export default Layout