// import PropTypes from 'prop-types';
import { Component } from "react";

export  class ImageForm extends Component {
    state = {
        imageName : '',
    };

    handleNameChange = event => {
        this.setState({imageName: event.currentTarget.value.toLowerCase()});
    };

    handleSubmit = event => {
        event.preventDefault();

        this.setState({imageName: ''});
    };

    render(){
        return (

            <header >
  <form onSubmit={this.handleSubmit}>
    <button type="submit" >
      <span >Search</span>
    </button>

    <input
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
           
        );
    }





}

