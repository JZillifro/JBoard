import React from 'react';
import {Panel, Col, Image, Button} from 'react-bootstrap';

const ForumPanel = ({
  id,
  image,
  title,
  description,
  post_count,
  num
}) => (
    <div class="col-4 col-12-medium">
      <span class="image fit"><img src={image} alt=""/></span>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul class="actions special">
        <li><a href={"/forum/" + id} class="button">View</a></li>
      </ul>
    </div>
);

export default ForumPanel;
