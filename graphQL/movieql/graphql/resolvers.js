// import {getById, people} from "./peopleDB";
// import {movies, getMovies, getById, addMovie, deleteMovie} from "./movieDB";

// movieDB resolvers
// const resolvers = {
//     Query: {
//         movies: () => getMovies(),
//         movie: (_, {id}) => getById(id)
//     },
//     Mutation: {
//         addMovie: (_, {name, score}) => addMovie(name, score),
//         deleteMovie: (_, {id}) => deleteMovie(id)
//     }
// }

import {getMovies} from "./ytsDB";

const resolvers = {
    Query: {
        movies: () => getMovies(),
        // moives : (_, {rating, limit}) => getMovies(limit, rating)
    }
}



export default resolvers