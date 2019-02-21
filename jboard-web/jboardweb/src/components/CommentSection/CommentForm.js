import React from 'react';
import axios from 'axios';
import {BASE_API_URL} from '../common/Constants.jsx';
import {Panel, Col, Image, Checkbox, Radio, ControlLabel, FormControl, FormGroup, Button, HelpBlock} from 'react-bootstrap'



function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}



export default class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reply: false
    }
    
  }

  handleSubmit() {
    const data = new FormData();
    data.append('text', document.getElementById(this.props.id).elements[0].value);
    data.append('type', this.props.type);
    data.append('id', this.props.id);

    axios.post(`${BASE_API_URL}/comments/new`, data).then((response) => {
      console.log(response)
    });

  }

  render() {
      return(<div>
        <form id={this.props.id}>
          <FormGroup controlId="formControlsTextarea">
            <FormControl componentClass="textarea" placeholder="Reply" />
          </FormGroup>
          <Button size = "sm" type="submit" onClick={ () => this.handleSubmit() }>Submit</Button>
        </form>
      </div>)

  }
}
