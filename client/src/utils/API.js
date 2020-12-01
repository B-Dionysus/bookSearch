import axios from "axios"


export async function searchGoogle(search){
    let terms=search.replace(" ", "+");
    return axios.get("https://www.googleapis.com/books/v1/volumes?q="+terms);
}

export async function removeFavorite(id){
    return axios.get("/api/remove/"+id);
}
export async function loadFavorites(){
    return axios.get("/api/load");
}
export async function saveFavorite(bookObj){
    return axios.post("/api/save", bookObj);
}
