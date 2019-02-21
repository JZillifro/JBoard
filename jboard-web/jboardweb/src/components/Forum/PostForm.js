import React from 'react';
import axios from 'axios';
import {BASE_API_URL} from '../common/Constants.jsx';
import ReactQuill from 'react-quill'; // ES6
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
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log(document.getElementById("post_form").elements[0].value);
    console.log(document.getElementById("post_form").elements[1].value);
    console.log(this.props.forum);
    const data = new FormData();
    data.append('title', document.getElementById("post_form").elements[0].value);
    data.append('image', document.getElementById("post_form").elements[1].value);
    data.append('text', this.state.text);
    data.append('f_ref', this.props.forum);

    axios.post(`${BASE_API_URL}/posts/new`, data).then((response) => {
      console.log(response)
    });

  }

  handleChange(content, delta, source, editor) {
    this.setState({
      text: content
    });
  }

  render() {
    return(<div>
      <Panel>
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
              <ReactQuill value={this.state.text} ref={this.myRef} onChange={this.handleChange}/>
              <Button type="submit" onClick={ () => this.handleSubmit() }>Submit</Button>
            </form>
          </Panel.Body>
        </Panel.Collapse>
      </Panel>

    </div>)
  }
}
