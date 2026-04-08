// Education.js
import React, { useState } from 'react';
import './Education.css';

const Education = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const educationData = [
    {
      degree: "B.Tech – Computer Science and Engineering",
      institution: "Vignan's Foundation for Science, Technology and Research, Guntur",
      year: "2023 – 2027",
      description: "Currently pursuing B.Tech in Computer Science and Engineering with a focus on software development, web technologies, and problem-solving skills.",
      achievements: [
        "CGPA: 7.61",
        "Strong foundation in programming languages and web development",
        "Active participation in hackathons and technical competitions"
      ],
      icon: "🎓"
    },
    {
      degree: "Intermediate – MPC",
      institution: "Narayana Junior College, Guntur",
      year: "2021 – 2023",
      description: "Completed intermediate education with Mathematics, Physics, and Chemistry as core subjects.",
      achievements: [
        "Percentage: 93.4%",
        "Excellent performance in science subjects",
        "Built strong analytical and problem-solving foundation"
      ],
      icon: "🔬"
    },
    {
      degree: "SSC",
      institution: "SPIMS School, Krosur",
      year: "2020 – 2021",
      description: "Completed secondary school education with outstanding academic performance.",
      achievements: [
        "Percentage: 100%",
        "Perfect academic record",
        "Strong foundation in core subjects"
      ],
      icon: "🏫"
    }
  ];

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="education-container" id="education">
      <h2 className="education-title">My Academic Journey</h2>
      
      <div className="education-grid">
        {educationData.map((item, index) => (
          <div 
            key={index}
            className={`education-card ${expandedCard === index ? 'expanded' : ''}`}
            onClick={() => toggleCard(index)}
          >
            <div className="card-header">
              <div className="card-icon">{item.icon}</div>
              <div className="card-title">
                <h3 className="degree">{item.degree}</h3>
                <p className="institution">{item.institution}</p>
                <p className="year">{item.year}</p>
              </div>
            </div>
            
            {expandedCard === index && (
              <div className="card-details">
                <p className="description">{item.description}</p>
                <ul className="achievements">
                  {item.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
