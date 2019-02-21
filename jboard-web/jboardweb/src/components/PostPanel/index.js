import React from 'react';
import {Panel, Col, Image, Button} from 'react-bootstrap';
import Zoom from 'react-thumbnail-zoom';

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
              {
                //<div dangerouslySetInnerHTML={{ __html: text }} style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",}}/>
              }
                <span> | </span><span class="icon fa-comment"> </span><span>{commentCount}</span><span> | </span>
                <span class="icon fa-arrows-v"> </span><span>{voteScore}</span><span> | </span>
              </div>
            </div>
            <div class="col-6 col-12-medium imp-medium">

              <a href={"/post/" + id}>
                <span><img src={image} alt="" style={{maxHeight:"20vh"}}/></span>
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
