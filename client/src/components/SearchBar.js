import React from "react"
import {searchGoogle} from "../utils/API";
export default function SearchBar(props) {

    function submitSearch(e){
        e.preventDefault();
        if(e.target.search.value){
          searchGoogle(e.target.search.value)
          .then(data=>{
              props.add(data.data.items)
          })
        }
      }

    return(
    <form onSubmit={submitSearch}>
        <div className="form-group">
            <label htmlFor="searchBar">Book Search</label>
            <input type="text" className="form-control" id="searchBar" name="search" placeholder="Enter search term" />
        </div>
        {/* <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div> */}
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    )
};