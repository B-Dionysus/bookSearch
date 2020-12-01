import axios from "axios"


export async function searchGoogle(search){
    let terms=search.replace(" ", "+");
    return axios.get("https://www.googleapis.com/books/v1/volumes?q="+terms);
}

