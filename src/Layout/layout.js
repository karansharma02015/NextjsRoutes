import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";





const Layout = ({ children }) => {

    return (
        <>
            <div id="main_layout">
              
            <Header/>
            
                <main>
                   
                   
                {children}
                  
                </main>

            <Footer/>
            </div>

        </>
    );
};

export default Layout;
