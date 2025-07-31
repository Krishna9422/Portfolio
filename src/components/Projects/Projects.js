import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Amazon from "../../Assets/Projects/Amazon.png";
import grub from "../../Assets/Projects/grub.png";
import AyuHealthMate from "../../Assets/Projects/AyuHealthMate.png";
import sentiment from "../../Assets/Projects/sentiment.png";
import heart from "../../Assets/Projects/heart.png";
import image from "../../Assets/Projects/image.png";
import library from "../../Assets/Projects/library.png";

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
              imgPath={Amazon}
              isBlog={false}
              title="Amazon Clone"
              description="a static clone of the Amazon website, built using React.js, Redux, and Firebase for authentication and database management. It features product listings, a shopping cart, and user authentication."
              ghLink="https://github.com/Krishna9422/MotionSlide"
              demoLink="https://cloneedamazone.netlify.app/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image}
              isBlog={false}
              title="MotionSlide"
              description="Designed a virtual mouse system using OpenCV and hand gesture recognition to enable touchless control of the computer."
              ghLink="https://github.com/Krishna9422/MotionSlide"
              demoLink="https://github.com/Krishna9422/MotionSlide"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grub}
              isBlog={false}
              title="Grubsaver"
              description="Developed GrubSaver, a web platform connecting food donors with seekers to reduce waste and promote sustainable food sharing"
              ghLink="https://github.com/Krishna9422/Grubsaver"
              demoLink="https://github.com/Krishna9422/Grubsaver"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AyuHealthMate}
              isBlog={false}
              title="AyuHealthMate"
              description="Developed AyuHealthMate, an intelligent Ayurvedic health assistant that predicts diseases from symptoms and suggests natural treatments."
              ghLink="https://github.com/Krishna9422/AyuHealthMate"
              demoLink="https://ayuhealthmate.onrender.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentiment}
              isBlog={false}
              title="sentiment-analyses-of-Tweets"
              description="Performed sentiment analysis on tweets using NLP techniques to classify public opinions as positive, negative, or neutral."
              ghLink="https://github.com/Krishna9422/sentiment-analyses-of-Tweets"
              demoLink="https://sentiment-analyses-of-tweets.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heart}
              isBlog={false}
              title="Heart-disease-prediction-app"
              
              description="Developed a heart disease prediction app using machine learning to analyze patient data and provide risk assessments."
              ghLink="https://github.com/Krishna9422/Heart-disease-prediction-app"
              demoLink="https://heart-disease-prediction-app-y5o6.onrender.com" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={library}
              isBlog={false}
              title="Library Management System"
              
              description="library management system is made by html css and javascript(frontend) and backend by php it is very useful site for library management and can send otp and mail using phpmailer forgor password ,admin permistion , special validation are given."
              ghLink="https://github.com/Krishna9422/library-management-system-using-php"
              demoLink="https://github.com/Krishna9422/library-management-system-using-php" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
