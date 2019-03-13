import React, { Component } from "react";
import axios from "axios";
class Pokelist extends Component {
  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then(response => this.setState({ pokes: response.data }))

  }

  render(){
    console.log(this.state);
    return(
      <div>


      </div>
    )
  }
}

export default Pokelist;
