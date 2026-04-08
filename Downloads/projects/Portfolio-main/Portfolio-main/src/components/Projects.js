import React from 'react';
import './Projects.css';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import examPortalImg from '../assets/student-passing-online-exam-concept-260nw-2208893063.webp';
import campusConnectImg from '../assets/campus_connect_3_cc.webp';
import weatherAppImg from '../assets/images.jpeg';
import rpsGameImg from '../assets/images (2).jpeg';

const projects = [
  {
    title: 'Online Examination Portal',
    description: 'Developed a secure full-stack examination system supporting MCQs and coding-based assessments with role-based access, auto-grading, and timed submissions. Includes features like exam timer, question navigation, and result evaluation.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Timer'],
    github: 'https://github.com/patibandasarvani/online-exam-portal',
    live: 'https://stackhack-online-exam-portal.vercel.app/',
    image: examPortalImg
  },
  {
    title: 'Campus Connect – College Management Platform',
    description: 'Developed a full-stack web application to manage campus activities including course management, student interactions, and announcements. Implemented authentication, role-based access, and responsive UI using modern web technologies.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Authentication'],
    github: 'https://github.com/patibandasarvani/Campus-connect',
    live: 'https://campus-connect-f6er0mt02-patibandasarvanis-projects.vercel.app/',
    image: campusConnectImg
  },
  {
    title: 'Weather App',
    description: 'A weather application that provides real-time weather information for any location. Features include current weather conditions, forecasts, and responsive design for optimal user experience across devices.',
    tags: ['JavaScript', 'API', 'Weather', 'Responsive Design'],
    github: 'https://github.com/patibandasarvani/weather--app',
    image: rpsGameImg
  },
  {
    title: 'Rock Paper Scissors Game',
    description: 'An interactive Rock-Paper-Scissors game with engaging UI and smooth animations. Demonstrates game logic implementation and user interaction handling in web development.',
    tags: ['JavaScript', 'HTML', 'CSS', 'Game Development', 'Interactive'],
    github: 'https://github.com/patibandasarvani/rock-paper-scissor',
    image: weatherAppImg
  },
  ];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-heading">
          <span className="section-number"></span> Projects I have worked on:
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-media">
                <img src={project.image} alt={project.title} className="project-image" />
                {project.video && (
                  <div className="video-overlay">
                    <a href={project.video} target="_blank" rel="noopener noreferrer" className="video-link">
                      Watch Demo
                    </a>
                  </div>
                )}
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
                <ul className="project-tags">
                  {project.tags.map((tag, i) => (
                    <li key={i}>{tag}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FiGithub /> GitHub
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
