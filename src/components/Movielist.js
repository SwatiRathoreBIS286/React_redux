import React from "react";
import { connect } from "react-redux";
import { selectMovie  } from '../actions/action';

const MovieList = (props) => {
    const ListItems = props.movies.map((movie) => {
        return (
            <div key={movie.title}>
                <span>{movie.title}</span>
               
                <button id = "btn" onClick={() => props.selectMovie(movie)}>Details</button>
                
            </div>
        )

    })
    return (
        <div className='list-container'>
            <h2>Movie List</h2>
            <ul>
                {ListItems}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

const mapDispatchToProps = {
    selectMovie: selectMovie

}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);