import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, useContext } from "react";
import NavBar from "./components/NavBar";
import SearchPage from "./pages/SearchPage";
import BookContext from "./utils/BookContext"
import SexyContext from "./utils/SexyContext"
import Jumbotron from "./components/Jumbotron"

function App() {

  const [sexyState, setSexy] = useState({
    sexySt:false,
    sexy:e=>setSexy({...sexyState, sexySt:e.currentTarget.checked})
  });

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

  // function sexy(e){
  //   setSexy(e.currentTarget.checked);
    
  //   console.log("woooo");
    
  // }

  // function favorite(bookObj){
  //   console.log(bookObj.currentTarget);    
  // }
  // useEffect(()=>{
  //   console.log({path});
  //   setPath(window.location.pathname);
  // }, []);

  return (  
    <div className="container"> 
      <NavBar />
      <Jumbotron sexy={sexyState.sexySt}/>
      <BookContext.Provider value={books}>
        <SexyContext.Provider value={sexyState}>
          <SearchPage />
        </SexyContext.Provider>
      </BookContext.Provider>
    </div>
  );  
}

export default App;
