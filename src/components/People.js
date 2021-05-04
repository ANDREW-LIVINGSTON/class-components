import React, {Component} from 'react';

class People extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ageCount: this.props.age
        }
    }
    
    
    render(){

        const increaseAge = ()=>{
            console.log("button clicked")
            this.setState({ageCount: this.state.ageCount+1})
        }
        
        const { name, age, color } = this.props;
        return <div className="person">
            <h1>{name}</h1>
            <p>Age: {this.state.ageCount}</p>
            <p>Hair Color: {color}</p>
            <button onClick={increaseAge}>Birthday Button for {name}</button>
        </div>
    }
}

export default People;