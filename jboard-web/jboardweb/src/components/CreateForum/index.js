import React from 'react';
import axios from 'axios';
import {BASE_API_URL} from '../common/Constants.jsx';
import {Panel, Col, Image, Checkbox, Radio, ControlLabel, FormControl, FormGroup, Button, HelpBlock} from 'react-bootstrap'
import ForumForm from '../CreateForum/ForumForm'

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default class CreateForum extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(document.getElementById("post_form").elements[0].value);
    console.log(document.getElementById("post_form").elements[1].value);
    console.log(document.getElementById("post_form").elements[2].value);
    console.log(this.props.forum);
    const data = new FormData();
    data.append('title', document.getElementById("post_form").elements[0].value);
    data.append('image', document.getElementById("post_form").elements[1].value);
    data.append('description', document.getElementById("post_form").elements[2].value);

    axios.post(`${BASE_API_URL}/forums/new`, data).then((response) => {
      console.log(response)
    });

  }

  render() {
    return(<div>
        <section id="three" class="main style1 special">
  				<div class="container">
            <ForumForm/>
          </div>
  			</section>
    </div>)
  }
}
