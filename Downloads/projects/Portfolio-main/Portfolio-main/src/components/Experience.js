import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    // Add your internships and work experience here
    // Example format:
    // { title: 'Web Development Intern', company: 'Tech Company', duration: 'June 2024 - July 2024', description: 'Developed responsive web applications using React and Node.js' },
  ];

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.title}</h3>
            <p>{exp.company} - {exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;