import React from "react";
import { Heart } from "react-bootstrap-icons";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
      
      <Card>
        <Card.Img
          alt="Picture of horned beast"
          src={this.props.image_url}
          onClick={this.props.onClick}
        />
        <Card.Title>
          {this.props.title}
        </Card.Title>
        <Card.Text>
          <Heart />
          {`Favorites: ${this.state.timesFavorited}`}
        </Card.Text>
        <Button variant="primary" onClick={this.handleClick}>Click to Favorite</Button>
      </Card>
    )
  }
}

export default HornedBeast;