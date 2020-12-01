import  "./style.css"
import React from "react"
export default function SearchItem(props) {
    console.log(props);
    
    // This data is not reliable. We must add default values, in case the data we want are not included!
    let cat="Uncategorizable";
    let thumb="https://via.placeholder.com/150";
    let desc="Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?";
    let authors="";
    if(props.data && !props.data.empty){   
         
        if(props.data.volumeInfo.categories)
            cat=props.data.volumeInfo.categories;

        if(props.data.volumeInfo.imageLinks)
            thumb=props.data.volumeInfo.imageLinks.thumbnail;       

        if(props.data.volumeInfo.description)
            desc=props.data.volumeInfo.description
        
        if(props.data.volumeInfo.authors){
            authors=props.data.volumeInfo.authors.join(", ")
        }
    }    
    if(props.data.empty)
        return(
            <div className="card mt-5 bookInfo">
            <div className="card-body">
                No results found.
            </div>
        </div>
        )
    else return(
        <div key={props.data.id} className="card mt-5 bookInfo">
            <div className="card-header">
            {cat}
            </div>
            <div className="card-body">
                <div className="row">
                <div className="col col-sm-3">
                    <img className="fluid" src={thumb} alt="book thumbnail"/>    
                </div>                
                <div className="col col-sm-9">
                    <h5 className="card-title">{props.data.volumeInfo.title}</h5>
                    <p className="card-text">{authors}</p>
                    <p className="card-text">{desc}</p>
                </div>
                </div>
                <div className="col col-3 text-left">
                    <button onClick={props.favorite}>Add to Favorites</button>
                </div>
                <div className="col col-9 text-center">
                    <a target="_BLANK" href={props.data.saleInfo.buyLink} className="btn btn-primary">View on Google</a>
                </div>
            </div>
        </div>
    )
};