import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import SearchPage from "./pages/SearchPage";
import SavedPage from "./pages/SavedPage";
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
    },
    remBook:function (id){
      let bArray=this.bookArray;
      bArray=bArray.filter((book)=>{
        if(book._id!==id) return true;  
        else return false;   
      }) 
      setBooks({...books, bookArray:bArray})
    }
  });
  return (  
    <div className="container">     
    <Router>       
      <NavBar />
      <Jumbotron sexy={sexyState.sexySt}/>
      <BookContext.Provider value={books}>
        <SexyContext.Provider value={sexyState}>   
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/favorites" component={SavedPage} />
        </SexyContext.Provider>
      </BookContext.Provider>      
      </Router>
    </div>
  );  
}

export default App;
