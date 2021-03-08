import React from "react";
import {connect} from "react-redux";
// import reducers from "../reducers/reducer";
// import { selectMovie } from '../actions/action';


const MovieDetails = (props) =>{
    if(!props.selectMovie){
        return (
        <div className= "details-container" style={{width:"100%"}}>
            <h1>Movie</h1>
            <div className= "properties">
                <p>Select Movie</p>
            </div>
        </div>
     )
    }

    else {
        return (
             
                <div className= "details-container" style={{width:"70%"}}>
                    <h1>Movie</h1>
                    <div className= "properties">
                        <p>Title: {props.selectMovie.title}</p>
                        <p>Release Date: {props.selectMovie.releaseDate}</p>
                        <p>Rating: {props.selectMovie.rating}</p>
                    </div>
                </div>

        )
    }
};

const mapStateToProps = (state) =>{
    return {  
        selectMovie: state.selectMovie 
    }
}

export default connect(mapStateToProps)(MovieDetails);