import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import SearchBar from "../components/SearchBar";
import SearchItem from "../components/SearchItem";
import BookContext from "../utils/BookContext"
import SexyContext from "../utils/SexyContext"
import {saveFavorite} from "../utils/API"

function SearchPage() {
  
  const books = useContext(BookContext);
  const sexyState = useContext(SexyContext);

  function favorite(bookObj){
    saveFavorite(bookObj)
    .then(res=>{
    });
  }

  return (  
    <div className="container"> 
      <SearchBar add={books.addBook} check={sexyState.sexy}/>
        {
          books.bookArray.map(bookElem=>(
            <SearchItem favorite={favorite} data={bookElem} buttonText={"Add to favorites"}/>
          ))
        }
    </div>
  );  
}

export default SearchPage;
