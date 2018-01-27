import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather} from '../actions/index';

class SearchBar extends Component{

    constructor(props){
        super(props);

        this.state = { term: ''};

        //binding ensures the this object is the exact instance of this you wish to use
        //so it overwrites the local method
        //I am binding the context
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
       
    }

    onInputChange(event){
        console.log(event.target.value);
        this.setState({ term:event.target.value });
    }

    //when user tries to submit form
    onFormSubmit(event){
        event.preventDefault();

        //we need to go and fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({ term: ''});
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five day forecast in your favourite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary" type="submit">Submit</button>
                </span>
            </form>
        );
    }
}

// mpas the dispatch so it can be sent through the reducers
function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
}

//null means that state is not needed
// it gives us accesss to the function this.props.fetchWeather in the component code above
export default connect(null, mapDispatchToProps)(SearchBar);