import Link from "next/link";
import React, { useEffect, useState } from "react";



const NestedLayout = ({ children }) => {
    return (
        <>
            <div id="main_layout">

            <header>
                <Link href='/PathLab/PathLab' className="logo-container">
                    <img src="https://media.lalpathlabs.com/images/lead-page/LOGO.png" alt="logo" className="logo_image" />
                </Link>
            </header>
                
          
                    <main>

                      
                        
                       
                      {children}
                        
                        
                    </main>
           
                   

            </div>
        </>
    );
};

export default NestedLayout;
