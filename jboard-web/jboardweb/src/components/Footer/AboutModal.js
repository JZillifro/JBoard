import React from 'react';
import {Label, Button, Modal} from 'react-bootstrap';
import axios from 'axios';
import {BASE_API_URL} from '../common/Constants.jsx';
import PostPanel from '../PostPanel';


let rand = () => Math.floor(Math.random() * 20) - 10;

const backdropStyle = {
  position: 'fixed',
  zIndex: 1040,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#000',
  opacity: 0.5
};

const modalStyle = function() {
  // we use some psuedo random coords so nested modals
  // don't sit right on top of each other.
  let top = 50 + rand();
  let left = 50 + rand();

  return {
    position: 'fixed',
    width: 400,
    zIndex: 1040,
    top: top + '%',
    left: left + '%',
    border: '1px solid #e5e5e5',
    backgroundColor: 'white',
    boxShadow: '0 5px 15px rgba(0,0,0,.5)',
    padding: 20
  };
};

export default class ModalExample extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { showModal: false };

    this.close = () => {
      this.setState({ showModal: false });
    };

    this.open = () => {
      this.setState({ showModal: true });
    };
  }

  renderBackdrop(props) {
    return <div {...props} style={backdropStyle} />;
  }

  render() {
    return (
      <div className="modal-example">
      <ul class="actions special">
        <li><a class="button" onClick={() => this.open()}>About</a></li>
      </ul>
        <Modal
          onHide={this.close}
          style={modalStyle()}
          aria-labelledby="modal-label"
          show={this.state.showModal}
          renderBackdrop={this.renderBackdrop}
          style={{position:"fixed"}}
        >
          <div style={{marginLeft:"3vw", marginRight:"3vw"}}>
            <h4 id="modal-label">About JBoard</h4>
            <p>
              This is a work in progress forum project by Jacob Zillifro
            </p>
            This wouldn't be possible without the following components:
            <ul>
              <li>HTML5Up</li>
              <li>Quilljs</li>
              <li>React-Bootstrap</li>
              <li>Coffee</li>
            </ul>
            To Do List:
            <ul>
              <li>Search Bar</li>
              <li>Forum Sorting</li>
              <li>"Hot" sorting</li>
            </ul>
          </div>
        </Modal>
      </div>
    );
  }
}
