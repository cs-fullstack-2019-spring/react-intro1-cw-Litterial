import React,{Component} from 'react';

class DisplayMovies extends Component{
    render(){
        return(
            <div>
                <h1>Movie title:{this.props.title}</h1>
                <h1>Year Released:{this.props.year}</h1>
                <h1>Genre:{this.props.genre}</h1>
            </div>
        )
    }
}

export default DisplayMovies;