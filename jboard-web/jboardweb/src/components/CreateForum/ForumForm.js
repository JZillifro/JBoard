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

export default class ForumForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit() {
    console.log(document.getElementById("forum_form").elements[0].value);
    console.log(document.getElementById("forum_form").elements[1].value);
    console.log(document.getElementById("forum_form").elements[2].value);
    console.log(this.props.forum);
    const data = new FormData();
    data.append('title', document.getElementById("forum_form").elements[0].value);
    data.append('image', document.getElementById("forum_form").elements[1].value);
    data.append('description', document.getElementById("forum_form").elements[2].value);

    axios.post(`${BASE_API_URL}/forums/new`, data).then((response) => {
      console.log(response)
    });

  }

  render() {
    return(
      <div>
        <form id="forum_form">
            <FieldGroup
              id="formControlsText"
              type="text"
              label="Title"
              placeholder="Enter title"
            />
            <FieldGroup
              id="formControlsText"
              type="text"
              label="Image URL"
              placeholder="Enter URL"
            />
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Description</ControlLabel>
              <FormControl componentClass="textarea" placeholder="Enter description" />
            </FormGroup>
            <Button type="submit" onClick={ () => this.handleSubmit()}>Submit</Button>
        </form>
				</div>
    )
  }
}
