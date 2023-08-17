import React from "react";
import HornedBeast from "./HornedBeast";
import beastData from "../assets/data.json";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      selectedBeast: null,
    }
  }

  openModal = (beast) => {
    this.setState({ showModal: true, selectedBeast: beast});
  }

  closeModal = () => {
    this.setState({ showModal: false, selectedBeast: null});
  }


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
                onClick={() => this.openModal(beast)}
              />
            </Col>
          ))}
        </Row>
      );
      rows.push(row);
    }
    return (
      <>
        <Container>
          {rows}
        </Container>
        <BigPictureModal
          show={this.state.showModal}
          beast={this.state.selectedBeast}
          onClose={this.closeModal}
          />
      </>
    );
  }
}

class BigPictureModal extends React.Component {
  render() {
    const { show, beast, onClose} = this.props;

    return (
      <>
        <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{beast && beast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {beast && (
            <>
              <img
                src={beast.image_url}
                alt={`Picture of ${beast.title}`}
                style={{ width: '100%' }}
              />
              <p>{beast.description}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
        </Modal>


      </>
    );
  }
}




export default Gallery;