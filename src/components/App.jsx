import { Component } from "react"
import { ImageForm } from "./ImageForm/ImageForm";

export default class App extends Component {
  state = {
    result: null
    }

  componentDidMount(){
    fetch('https://pixabay.com/api/?q=cat&page=1&key=33369895-08f083aac748bf074ebfa9156&image_type=photo&orientation=horizontal&per_page=12')
    .then(res => res.json())
    .then(result => this.setState({result}));
  }

  render(){
  return (
<div>
  <ImageForm/>
</div>

  );
  }
};
