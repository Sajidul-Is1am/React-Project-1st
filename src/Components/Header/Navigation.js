import React from "react";
import {Navbar,NavbarBrand } from "reactstrap";



const Navigation = () =>{
    return(
        
            <Navbar dark color="danger">
                <div className="container">
                    <NavbarBrand src="/">
                        Build React
                    </NavbarBrand>
                </div>
               
            </Navbar>
    )
}

export default Navigation;