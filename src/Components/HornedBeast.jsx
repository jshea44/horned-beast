import React from "react";

class HornedBeast extends React.Component {
 constructor(props) {
  super(props);
 }

  
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.imgUrl} alt="moose" title={this.props.title}/>
        <p>{this.props.description}</p>

      </div>
    )
  }
}

export default HornedBeast;