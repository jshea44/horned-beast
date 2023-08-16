import React from "react";
import { Heart } from "react-bootstrap-icons";
import Figure from 'react-bootstrap/Figure';

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
      
      <Figure>
        <h2>{this.props.title}</h2>
        <Figure.Image
          // title= {this.props.title}
          width={300}
          // height={300}
          alt="Picture of horned beast"
          src={this.props.image_url}
          onClick={this.handleClick}

        />
        <Figure.Caption>
          {this.props.description}
        </Figure.Caption>
        <Figure.Caption>
          <Heart />
          {`Favorites: ${this.state.timesFavorited}`}
        </Figure.Caption>
      </Figure>
    )
  }
}

export default HornedBeast;