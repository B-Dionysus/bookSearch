import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import SearchBar from "./components/SearchBar";
import SearchItem from "./components/SearchItem";
function App() {
  const [sexyState, setSexy] = useState(false);

  const [books, setBooks] = useState({
    bookArray:[],
    addBook:(newBooks)=>{
      let bArray=[];

      if(!newBooks){
        setBooks({...books, bookArray:[{empty:true}]})
      } 
      else{
        bArray=newBooks;
        setBooks({...books, bookArray:bArray});  
      }
    }
  });

  function sexy(e){
    setSexy(e.currentTarget.checked);
    
    console.log("woooo");
    
  }

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
      <Jumbotron sexy={sexyState}/>
      <SearchBar add={books.addBook} check={sexy}/>
        {
          books.bookArray.map(bookElem=>(
            <SearchItem favorite={favorite} data={bookElem} />
          ))
        }
    </div>
  );  
}

export default App;
