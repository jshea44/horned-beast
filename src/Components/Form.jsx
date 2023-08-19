import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import beastData from "../assets/data.json";


class SortingForm extends React.Component{
  constructor() {
    super();
    this.state = {
      showModal: false,
      selectedHorns: 'All',
    }
  }

  openModal = () => {
    this.setState({ showModal: true });
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  handleDropdownChange = (event) => {
    const selectedHorns = event.target.value;
    this.setState({ selectedHorns });
  }

  render() {
    const hornOptions = ['All', '1', '2', '3', '100'];

    return (
      <>
        <Button variant="primary" onClick={this.openModal}>Sort</Button>
        <Modal show={this.state.showModal}>
          <Modal.Header closeButton>
            <Modal.Title>Sort by Horns</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formHorns">
                <Form.Label>Select the number of horns:</Form.Label>
                <Form.Control as="select" value={this.state.selectedHorns} onChange={this.handleDropdownChange}>
                  {hornOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>Close</Button>
            <Button variant="primary" onClick={() => {
              console.log('SELECTING FILTER!');
              this.props.filterByHorns(this.state.selectedHorns);
              this.closeModal();
            }}>
              Apply
            </Button>
          </Modal.Footer>



        </Modal>
      
      
      
      
      
      </>
    );
  }


}

export default SortingForm;