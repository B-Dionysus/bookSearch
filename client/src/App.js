import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import SearchBar from "./components/SearchBar";
import SearchItem from "./components/SearchItem";
function App() {

  const [books, setBooks] = useState({
    bookArray:[],
    addBook:(newBooks)=>{
      let bArray=newBooks;
      setBooks({...books, bookArray:bArray});  
    }
  });


  function favorite(bookObj){
    console.log(bookObj.currentTarget);
    
  }
  // useEffect(()=>{
  //   console.log({path});
  //   setPath(window.location.pathname);
  // }, []);

  return (  
    <div className="container"> 
      <NavBar />
      <Jumbotron />
      <SearchBar add={books.addBook}/>
        {
          books.bookArray.map(bookElem=>(
            <SearchItem favorite={favorite} data={bookElem} />
          ))
        }
    </div>
  );  
}

export default App;
