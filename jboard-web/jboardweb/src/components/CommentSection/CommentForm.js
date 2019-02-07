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
    this.state = {}
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
      <Panel defaultExpanded>
        <Panel.Heading>
          <Panel.Toggle componentClass="a"><Button bsSize="xsmall">Create a Comment</Button></Panel.Toggle>
        </Panel.Heading>
        <Panel.Collapse>
          <Panel.Body>
          <form id={this.props.id}>
              <FormGroup controlId="formControlsTextarea">
                <FormControl componentClass="textarea" placeholder="Enter text" />
              </FormGroup>
              <Button type="submit" onClick={ () => this.handleSubmit() }>Submit</Button>
            </form>
          </Panel.Body>
        </Panel.Collapse>
      </Panel>

    </div>)
  }
}
