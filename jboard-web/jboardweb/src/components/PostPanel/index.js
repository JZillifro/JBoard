import React from 'react';
import {Panel, Col, Image, Button} from 'react-bootstrap';

const PostPanel = ({
  id,
  image,
  title,
  text,
  voteScore,
  commentCount,
  num
}) => (
    <div>
      <section id="one" class="main style1" href={"/post/" + id}>
        <div class="container">
          <div class="row gtr-150">
            <div class="col-6 col-12-medium">
              <a href={"/post/" + id}>
                <header class="major">
                  <h2>{title}</h2>
                </header>
              </a>
              <div class="desc">
                <p>{text}</p>
                <span class="icon fa-comment">{commentCount}</span><span>    </span>
                <span class="icon fa-arrows-v">{voteScore}</span>
              </div>
            </div>
            <div class="col-6 col-12-medium imp-medium">
              <a href={"/post/" + id}>
                <span class="image fit"><img src={image} alt="" /></span>
              </a>
            </div>
          </div>
        </div>
      </section>
{
      // <Panel defaultExpanded>
      //   <Panel.Heading>
      //     <Panel.Title>{title}</Panel.Title>
      //     <Panel.Toggle componentClass="a"><Button bsSize="xsmall">^</Button></Panel.Toggle>
      //     <Button bsSize="xsmall" href={"post/" + id}>peep</Button>
      //   </Panel.Heading>
      //   <Panel.Collapse>
      //     <Panel.Body>
      //       <Col xs={12} md={8}>
      //         {text}
      //       </Col>
      //       <Col xs={6} md={4}>
      //         <div style={{textAlign: "center"}}>
      //           <div style={{display: "inline-block"}}>
      //             <Image src={image} responsive/>
      //           </div>
      //         </div>
      //
      //       </Col>
      //     </Panel.Body>
      //   </Panel.Collapse>
      // </Panel>
}
    </div>
);

export default PostPanel;
