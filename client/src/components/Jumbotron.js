import "../App.css"
import React, {useEffect} from "react"
export default function JumboTron(props) {

  return(
        <div className={props.sexy ? "jumbotron sexy" : "jumbotron"}>
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        </div>
    )
};