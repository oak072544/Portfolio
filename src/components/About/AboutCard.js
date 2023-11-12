import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jiraphat Srisomphan </span>
            from <span className="purple"> Nonthaburi, Thailand.</span>
            <br /> I am a 4th Year student Bachelor's degree
            in Electronical Engineering Technology (Computer), College of Industrial Technology from King Mongkut's University of Technology North Bangkok (KMUTNB).
            <br />
            Additionally, I am intered in back-end developer.
            <br />
            <br />
            Some of my hobbies are
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Workout
            </li>
            <li className="about-activity">
              <ImPointRight /> Meditation
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
