import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import SearchBar from "./components/SearchBar";
import SearchItem from "./components/SearchItem";
function App() {
  const [path, setPath] = useState("/");
  const [books, setBooks] = useState({
    bookArray:[],
    addBook:(bookObj)=>{
      let bArray=books;
      bArray.push(bookObj)
      console.log(bArray);
      setBooks(...books, bArray); 
    }
  };

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
          books.map(book=>(
            <SearchItem key={book.id} data={book} />
          ))
        }
    </div>
  );  
}

export default App;
