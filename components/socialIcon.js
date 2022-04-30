import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
export default () => {
    return(
        <>
            
            <ul className='social flex text-5xl justify-evenly w-full'> 
                
                
                
                <li><a href="tel:+989195699587"><i className="fab fa-whatsapp" aria-hidden="true"></i></a></li>
                <li><a href="tel:+989195699587"><i className="fa fa-phone" aria-hidden="true"></i></a></li>
                <li><a href="https://goo.gl/maps/Qc4c1NHTxdyvx42L9"><i className="fa fa-map-marker" aria-hidden="true"></i></a></li>
                <li><a href="https://instagram.com/ebrahimi.cactus"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
            </ul>
        
        </>

    )
}