import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect } from "react";
import SearchItem from "../components/SearchItem";
import BookContext from "../utils/BookContext"
import {loadFavorites} from "../utils/API"
import {removeFavorite} from "../utils/API"

function SavedPage() {
  
  const books = useContext(BookContext);



  useEffect(()=>{
    loadFavorites()
    .then(data=>{            
      books.addBook(data.data.data)
    });
  },[]);


  function remove(book){
    console.log(book.id);    
    books.remBook(book.id)
    removeFavorite(book.id)
    .then(res=>{
      books.remBook(book.id)
    });
  }

  return (  
    <div className="container"> 
        {
          books.bookArray.map(bookElem=>(
            <SearchItem favorite={remove} data={bookElem} buttonText={"Remove from favorites"}/>
          ))
        }
    </div>
  );  
}

export default SavedPage;
