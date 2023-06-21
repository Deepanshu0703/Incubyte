import React from "react";


const Footer = () => {
    return(
    <div className="text-center p-3" style={{backgroundColor: 'whitesmoke', color:'black'}}>
      ©{new Date().getFullYear()} Incubyte
    </div>
    );
}

export default Footer;