import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, useContext } from "react";
import SearchBar from "../components/SearchBar";
import SearchItem from "../components/SearchItem";
import BookContext from "../utils/BookContext"
import SexyContext from "../utils/SexyContext"

function App() {
  
  const books = useContext(BookContext);
  const sexyState = useContext(SexyContext);

//   function sexy(e){
//     setSexy(e.currentTarget.checked);
    
//     console.log("woooo");
    
//   }

  function favorite(bookObj){
    console.log(bookObj.currentTarget);    
  }

  return (  
    <div className="container"> 
      <SearchBar add={books.addBook} check={sexyState.sexy}/>
        {
          books.bookArray.map(bookElem=>(
            <SearchItem favorite={favorite} data={bookElem} />
          ))
        }
    </div>
  );  
}

export default App;
