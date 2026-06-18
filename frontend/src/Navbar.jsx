import { useState } from "react"


function Navbar (){
    return(
        <nav>
            <ul className="navbar-links">
                <li><a href="/">Wedding</a></li>
                <li><a href="/travelnstay">Travel & Stay</a></li>
                <li><a href="/rsvp">RSVP</a></li>
            </ul>
        </nav>
    );
}


export default Navbar;