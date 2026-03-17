import React from "react"
import {Link} from "react-router-dom"

function Navbar(){

return(

    <nav className="navbar navbar-expand-lg navbar-dark">

        <div className="container">

            <Link className="navbar-brand fw-bold fs-4" to="/">
                IdeaPulse
            </Link>

            <ul className="navbar-nav ms-auto">

                <li className="nav-item">

                    <Link className="nav-link" to="/">
                        Home
                    </Link>

                </li>

                <li className="nav-item">

                    <Link className="nav-link" to="/about">
                        About
                    </Link>

                </li>

            </ul>

        </div>

</nav>

)

}

export default Navbar