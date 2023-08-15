import React from "react";
import HornedBeast from "./HornedBeast";
import beastData from "../assets/data.json";

class Gallery extends React.Component {



  render() {
    return (
      <>
      <div>
        <HornedBeast title="Moose Corn 1" image_url="./src/assets/beast01.png" description="A unicorn moose"/>
        <HornedBeast title="Moose Corn 2" image_url="./src/assets/beast02.png" description="Another unicorn moose"/>
      </div>
      <section>
        {beastData.map((beast, idx) => <HornedBeast key={idx} title={beast.title} image_url={beast.image_url} description={beast.description}/>)}
      </section>
      </>
     
    )
  }


}




export default Gallery;