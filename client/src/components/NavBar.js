
import { Link } from "react-router-dom";
import React from "react"
export default function NavBar() {
    return(
    <div className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand">Google Books</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
               <Link className="nav-link" to="/">Search</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/favorites">Favorites</Link>
            </li>
            </ul>
        </div>
    </div>
);
}