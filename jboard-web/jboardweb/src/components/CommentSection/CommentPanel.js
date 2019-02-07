import React from 'react';
import {Panel, Col, Image, Button} from 'react-bootstrap';
import {BASE_API_URL} from '../common/Constants.jsx';
import axios from 'axios';
import CommentSection from '../CommentSection';

export default class CommentPanel extends React.Component {
  constructor(props, {match}) {
    super(props)
    this.state = {}
  }

  componentDidMount() {

  }

  render() {
      return (
        <Panel defaultExpanded>
          <Panel.Collapse>
            <Panel.Body>
              {this.props.text}
              <CommentSection id={this.props.id} type="c"/>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
      );
  }
}
