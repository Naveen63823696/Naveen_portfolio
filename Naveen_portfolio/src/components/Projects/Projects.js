import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Screenshot  from "../../Assets/Projects/Screenshot_Emenu.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Screenshot}
              isBlog={false}
              title="Chatify"
              description="E-Menu is a digital restaurant menu built with React.js, Express.js , and Mongo DB.
It allows customers to browse dishes, view images, and place orders easily.
Restaurant staff can update menu items and prices in real-time.
The app provides a smooth, responsive, and user-friendly dining experience."
            />
          </Col>

          

          

          

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
