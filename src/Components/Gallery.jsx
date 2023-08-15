import React from "react";
import HornedBeast from "./HornedBeast";
import beastData from "../assets/data.json";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Gallery extends React.Component {






  render() {
    const beastsPerRow = 3; 
    const rows = [];
  
    for (let i = 0; i < beastData.length; i += beastsPerRow) {
      const rowBeasts = beastData.slice(i, i + beastsPerRow);
  
      const row = (
        <Row key={i}>
          {rowBeasts.map((beast, idx) => (
            <Col key={idx}>
              <HornedBeast
                title={beast.title}
                image_url={beast.image_url}
                description={beast.description}
              />
            </Col>
          ))}
        </Row>
      );
  
      rows.push(row);
    }
  
    return (
      <Container>
        {rows}
      </Container>
    );
  }

}




export default Gallery;