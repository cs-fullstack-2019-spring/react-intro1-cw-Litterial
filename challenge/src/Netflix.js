import React,{Component} from 'react';

class Netflix extends Component{
    render(){
        return(
            <div>
                <h1>Movie:{[this.props.title,this.props.year,this.props.genre]}</h1>

            </div>
        )
    }
}

export default Netflix;