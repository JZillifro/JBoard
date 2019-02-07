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



export default class PostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleSubmit() {
    console.log(document.getElementById("post_form").elements[0].value);
    console.log(document.getElementById("post_form").elements[1].value);
    console.log(document.getElementById("post_form").elements[2].value);
    console.log(this.props.forum);
    const data = new FormData();
    data.append('title', document.getElementById("post_form").elements[0].value);
    data.append('image', document.getElementById("post_form").elements[1].value);
    data.append('text', document.getElementById("post_form").elements[2].value);
    data.append('forum', this.props.forum);

    axios.post(`${BASE_API_URL}/posts/new`, data).then((response) => {
      console.log(response)
    });

  }

  render() {
    return(<div>
      <Panel defaultExpanded>
        <Panel.Heading>
          <Panel.Toggle componentClass="a"><Button bsSize="xsmall">Create a Post</Button></Panel.Toggle>
        </Panel.Heading>
        <Panel.Collapse>
          <Panel.Body>
          <form id="post_form">
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
                <ControlLabel>Text</ControlLabel>
                <FormControl componentClass="textarea" placeholder="Enter text" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Forum</ControlLabel>
                <FormControl.Static>{this.props.forum}</FormControl.Static>
              </FormGroup>
              <Button type="submit" onClick={ () => this.handleSubmit() }>Submit</Button>
            </form>
          </Panel.Body>
        </Panel.Collapse>
      </Panel>

    </div>)
  }
}
