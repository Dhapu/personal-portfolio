import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Particle from "./Particle";
import leaf from "../assets/Projects/leaf.png";
import emotion from "../assets/Projects/emotion.png";
import editor from "../assets/Projects/codeEditor.png";
import chatify from "../assets/Projects/chatify.png";
import suicide from "../assets/Projects/suicide.png";
import bitsOfCode from "../assets/Projects/blog.png";
import expense from "../assets/Projects/expense.png";
import house from "../assets/Projects/house.jpg";
import todo3 from "../assets/Projects/todo3.jpg";
import whatss from "../assets/Projects/whatss.png";
import quiz from "../assets/Projects/quiz.jpg";
import sale from "../assets/Projects/sale.jpg";

export const Projects = () => {
  return (
    <Container fluid className="projects" id="projects">
      <Particle />
      <Container>
      <h1 className="project-heading text-center">  {/* Center the heading */}
          Projects
        </h1>
        <p className="text-center" style={{ color: "white" }}>  {/* Center the paragraph */}
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz Application"
              description="Developed a dynamic quiz application using React.js and Material-UI components, allowing users to take quizzes on various topics"
              ghLink="https://github.com/Dhapu/quiz-applications"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense Tracker App"
              description="Expense tracker app build with React.js and Tailwind Css which enabling users to manage their finances effectively."
              ghLink="https://github.com/Dhapu/expense-tracker-app"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo3}
              isBlog={false}
              title="Todo List App"
              description="Todo List App build with react.js. It helps you to manage your day to day tasks. "
              ghLink="https://github.com/Dhapu/todo-app"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sale}
              isBlog={false}
              title="Sale Order Management System"
              description="Developed a  front end web application using React.js and Chakra UI. The application allows users to manage their sales orders. "
              ghLink="https://github.com/Dhapu/sale-order-management"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whatss}
              isBlog={false}
              title="Whatsapp Clone"
              description="Whatsapp clone build with React.js and Material-UI. It is a real time chat application which allows users to send messages as well as read them. "
              ghLink="https://github.com/Dhapu/whatsapp-clone"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={house}
              isBlog={false}
              title="Houce Price Prediction"
              description="Used the Houce price dataset from Kaggle to predict the house price in India.Utilized Python programming language and popular libraries such as Pandas, NumPy, and Scikit-learn for data preprocessing, model
training, and evaluation."
              ghLink="https://github.com/Dhapu/Houce-Price-Prediction"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

