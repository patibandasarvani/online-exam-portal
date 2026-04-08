import React, { useState } from 'react';
import './Certificates.css';
// Import your local images
import placeholderCert from '../assets/github.png';
import infosysJavaCert from '../assets/infosys-spring-java-dsa.png';
import staxCert from '../assets/stax-certi.png';
import pythonCert from '../assets/python-ispringboot.png';
import publicspeakingCert from '../assets/publicspeaking-nptel.png';
import oracleCert from '../assets/orcade-frontend-certi.png';
import nptelMsCert from '../assets/nptel-ms.png';
import javaInfoCert from '../assets/javacerti-info.png';
import genAiCert from '../assets/gen-ai-logo.jpeg';

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const certificateData = {
    technical: [
      {
        id: 1,
        name: 'Python Programming',
        issuer: 'iSpringBoot',
        date: 'April 2025',
        image: pythonCert,
        description: 'Completed Python Programming certification course'
      },
      {
        id: 2,
        name: 'Stackhack',
        issuer: 'Vignan University-Dept(CSE)',
        date: 'October 2024',
        image: staxCert,
        description: 'Participated in a continuous 48 hours hackathon called Stackhack'
      },
      {
        id: 3,
        name: 'Public Speaking',
        issuer: 'NPTEL',
        date: 'December 2022',
        image: publicspeakingCert,
        description: 'Certified in Public Speaking course offered by NPTEL'
      },
      {
        id: 4,
        name: 'Introduction to Generative AI',
        issuer: 'Google Cloud',
        date: 'September 2024',
        image: genAiCert,
        description: 'Completed 45-hour online course in Generative AI offered by Google Cloud'
      },
      {
        id: 5,
        name: 'Data Structures and Algorithms using Java',
        issuer: 'Infosys Springboard',
        date: 'December 2024',
        image: infosysJavaCert,
        description: 'Completed the Infosys Springboard course on Data Structures and Algorithms using Java'
      },
      {
        id: 6,
        name: 'Foundations of Frontend Development',
        issuer: 'Oracle Academy',
        date: 'October 2024',
        image: oracleCert,
        description: 'Certified in Oracle Frontend Development course'
      },
      {
        id: 7,
        name: 'Microsoft Azure',
        issuer: 'NPTEL',
        date: 'August 2024',
        image: nptelMsCert,
        description: 'Certified in Microsoft Azure course offered by NPTEL'
      },
      {
        id: 8,
        name: 'Core Java',
        issuer: 'International Institute',
        date: 'July 2024',
        image: javaInfoCert,
        description: 'Certified in comprehensive Java programming course'
      },
    ],
  };
  
  // Duplicate certificates for seamless looping
  const duplicatedTechnical = [...certificateData.technical, ...certificateData.technical];

  const openCertificate = (cert) => {
    setIsPaused(true);
    setSelectedCertificate(cert);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
    setIsPaused(false);
  };

  return (
    <section id="certificates" className="certificates">
      <h2 className="section-title">My Certifications</h2>
      
      <div className="certificate-categories">
        {/* Technical Certificates */}
        <div className="category">
          <h3 className="category-title">Technical Certifications</h3>
          <div className={`scroller-container ${isPaused ? 'paused' : ''}`}>
            <div className="scroller">
              {duplicatedTechnical.map((cert, index) => (
                <div 
                  key={`tech-${cert.id}-${index}`} 
                  className="certificate-card"
                  onClick={() => openCertificate(cert)}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => !selectedCertificate && setIsPaused(false)}
                >
                  <div className="certificate-image">
                    <img src={cert.image} alt={cert.name} />
                  </div>
                  <div className="certificate-info">
                    <h4>{cert.name}</h4>
                    <p className="issuer">{cert.issuer}</p>
                    <p className="date">{cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="certificate-modal" onClick={closeCertificate}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={closeCertificate}>&times;</button>
            <div className="modal-image">
              <img src={selectedCertificate.image} alt={selectedCertificate.name} />
            </div>
            <div className="modal-details">
              <h3>{selectedCertificate.name}</h3>
              <p><strong>Issuer:</strong> {selectedCertificate.issuer}</p>
              <p><strong>Date:</strong> {selectedCertificate.date}</p>
              <p><strong>Description:</strong> {selectedCertificate.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;