import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Particle from "./Particle";
import ecommerceCover from "../assets/Projects/ecommerce-cover.svg";
import restaurantCover from "../assets/Projects/restaurant-cover.svg";
import todoCover from "../assets/Projects/todo-cover.svg";
import lmsCover from "../assets/Projects/lms-cover.svg";
import spotifyCover from "../assets/Projects/spotify-cover.svg";
import tourismCover from "../assets/Projects/tourism-cover.svg";

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
              imgPath={ecommerceCover}
              isBlog={false}
              title="E-Coomerce App"
              description="Developed a dynamic e-commerce application using React.js and Material-UI components, allowing users to browse products, add items to their cart, and complete purchases."
              ghLink="https://github.com/Dhapu/Ecommerce-application"
              demoLink="https://ecommerce-application-alpha.vercel.app/"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurantCover}
              isBlog={false}
              title="Restaurent-Food-Order-Management-System"
              description="Developed a Restaurant Food Management System using React.js with TypeScript and Tailwind CSS. The application includes dynamic menu browsing, category-based filtering, and a fully functional cart system with real-time updates."
              ghLink="https://github.com/Dhapu/restaurent-food-management"
              demoLink="https://food-mrheced88-dhapus-projects.vercel.app/"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoCover}
              isBlog={false}
              title="Todo List App"
              description="A modern Angular todo app built with TypeScript, standalone components, and LocalStorage persistence. It includes task management essentials like create, edit, complete, delete, search, filtering, due dates, priority levels, dark mode, and drag-and-drop reordering in a responsive UI. "
ghLink="https://github.com/Dhapu/todo-application"
              demoLink="https://todo-application-ten-omega.vercel.app/"              
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lmsCover}
              isBlog={false}
              title="Learning Management System"
              description="Full-featured Learning Management System with Admin/Instructor/Student dashboards. Course catalog, enrollment, lessons, quizzes, progress tracking, notifications."
              ghLink = "https://github.com/Dhapu/LMSystem"
              demoLink="https://lm-system-alpha.vercel.app/login"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotifyCover}
              isBlog={false}
              title="Spotify-Clone"
              description="Built a fully responsive Spotify clone using ReactJS with Material-UI, styled-components, and Axios. Features include:

Interactive sidebar navigation and collapsible mobile menu
Real-time song search and filtering
Dynamic song lists with play/pause controls
Audio player with next/previous functionality
Song details panel with responsive split layout
Mock API integration for song data fetching "
              ghLink="https://github.com/Dhapu/spotify-clone"
              demoLink="https://spotify-clone-kohl-one.vercel.app/"            
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tourismCover}
              isBlog={false}
              title="India-Tourism-Website"
              description="A modern, responsive React single-page application built with Vite and Tailwind CSS, showcasing India's top tourist destinations.Features interactive search/filtering, detailed destination views, trip planner, user authentication (login/signup), dark mode, and smooth navigation."
ghLink="https://github.com/Dhapu/tourism-website"
              demoLink="https://india-tourism-website.vercel.app/"            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

