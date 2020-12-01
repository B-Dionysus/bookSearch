import "../App.css"
import React from "react"
export default function JumboTron(props) {

  return(
        <div className={props.sexy ? "jumbotron sexy" : "jumbotron"}>
            <h1 className="display-4">({props.sexy ? "Sexy" : "React"}) Google Books Search</h1>
            <p className="lead">Search for and save {props.sexy ? "interesting books" : " books of interest"}</p>
        </div>
    )
};