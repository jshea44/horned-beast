import React from "react";

class HornedBeast extends React.Component {
 constructor() {
  super();
 }

  
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.image_url}/>
        <p>{this.props.description}</p>

      </div>
    )
  }
}

export default HornedBeast;