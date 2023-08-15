import React from "react";
import { Heart } from "react-bootstrap-icons"

class HornedBeast extends React.Component {
 constructor() {
  super();
  this.state = {
    timesFavorited: 0,
  };
 }

 handleClick = () => {
  this.setState({ timesFavorited: this.state.timesFavorited + 1 });
};

  
  render() {
    return (
      <div>
        <Heart />
        <p>{`Favorites: ${this.state.timesFavorited}`}</p>
        <h2>{this.props.title}</h2>
        <img src={this.props.image_url} onClick={this.handleClick}/>
        <p>{this.props.description}</p>

      </div>
    )
  }
}

export default HornedBeast;