import React from "react";
import HornedBeast from "./HornedBeast";

class Gallery extends React.Component {



  render() {
    return (
      <div>
        <HornedBeast title="Moose Corn 1" imgUrl="./src/assets/beast01.png" description="A unicorn moose"/>
        <HornedBeast title="Moose Corn 2" imgUrl="./src/assets/beast02.png" description="Another unicorn moose"/>
      </div>
    )
  }


}




export default Gallery;