import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shrikrushna Gandhewar</span> from 
            <span className="purple"> India</span>.
            <br />
            <br />
            I am currently pursuing my Bachelor's degree in <span className="purple">Computer Science and Engineering</span>.
            <br />
            <br />
            I enjoy building real-world applications that solve problems — from 
            <span className="purple"> gesture-controlled virtual mouse</span> to 
            <span className="purple"> GrubSaver (a food waste management platform)</span> and more.
            <br />
            <br />
            Apart from coding, here are a few things I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring emerging tech in AI and cybersecurity
            </li>
            <li className="about-activity">
              <ImPointRight /> Working on innovative side projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching tech videos and traveling
            </li>
           
          </ul>
          <hr />
          <p>
           <a href="tel:+91-8623883805" style={{ color: "#c770f0" }} >
              <strong>Mobile:</strong> <span className="purple">+91-8623883805</span>
            </a>
            <br />
            <a href="mailto:kgandhewar9040@gmail.com" style={{ color: "#c770f0" }}>
              <strong>Email:</strong> <span className="purple">kgandhewar9040@gmail.com</span>
            </a>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
