import axios from "axios";

const API_URL = "https://yts.mx/api/v2/list_movies.json";


export const getMovies = async () =>{
    const {data:{data:{movies}}} = await axios.get(API_URL);
    console.log(movies);
    return movies;
}