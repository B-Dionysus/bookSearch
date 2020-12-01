import React from "react";
// default context object with properties corresponding to Provider values

const BookContext = React.createContext({
    bookArray:[],
    addBook:()=>{},
    remBook:()=>{}
  });

export default BookContext;
