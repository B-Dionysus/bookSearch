import React from "react"
import {searchGoogle} from "../utils/API";
export default function SearchBar(props) {

    function submitSearch(e){
        e.preventDefault();
        if(e.target.search.value){
            let searchTerm=e.target.search.value;
            if(e.target.sexyCheck.checked)                
                searchTerm="sexy+"+searchTerm;
            
            searchGoogle(searchTerm)
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
        <div className="form-check">
            <input type="checkbox" onClick={props.check} className="form-check-input" id="sexyCheck" />
            <label className="form-check-label" htmlFor="sexyCheck">Make it sexy</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    )
};