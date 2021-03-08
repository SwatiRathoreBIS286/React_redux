import {combineReducers} from 'redux';


const movieReducer = () => {
     return [
        {title: 'Spider-Man', releaseDate: '05-07-2017', rating: 7.4},
        {title: 'Harry-Potter', releaseDate: '05-07-2015', rating: 7.4},
        {title: 'Black-Panther', releaseDate: '02-03-2018', rating: 7.8},
        {title: 'Avengers : Infinity War', releaseDate: '04-07-2018', rating: 8.4},
        {title: 'Guardians of the  Galaxy', releaseDate: '12-05-2014', rating: 9.7},
        {title: 'Spider-Man', releaseDate: '05-07-2017', rating: 7.4},
    ]
}

const selectedMovieReducer =(state = null , action) => {
    switch(action.type)  {
        case 'MOVIE_SELECTED':
            return action.payload
        default:
            return state
    }

}

export default combineReducers({
    movies:  movieReducer,
    selectMovie: selectedMovieReducer
});