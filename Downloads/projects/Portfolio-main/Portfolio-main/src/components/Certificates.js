import React, { useState } from 'react';
import './Certificates.css';
// Import your local images
import pythonCert from '../assets/python-ispringboot.png';
import staxCert from '../assets/stax-certi.png';
import publicspeakingCert from '../assets/publicspeaking-nptel.png';
import genAiCert from '../assets/gen-ai-logo.jpeg';
import oracleCert from '../assets/orcade-frontend-certi.png';
import nptelMsCert from '../assets/nptel-ms.png';
import javaInfoCert from '../assets/javacerti-info.png';
import infosysJavaCert from '../assets/infosys-spring-java-dsa.png';
import gitCert from '../assets/WhatsApp Image 2026-04-08 at 10.15.48 PM.jpeg';
import nonTechCert1 from '../assets/WhatsApp Image 2026-04-08 at 10.14.41 PM.jpeg';
import nonTechCert2 from '../assets/WhatsApp Image 2026-04-08 at 10.13.25 PM.jpeg';

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const certificateData = {
    technical: [
      {
        id: 1,
        name: 'Python Programming',
        issuer: 'Infosysspringboot',
       
        image: pythonCert,
        description: 'Completed Python Programming certification course'
      },
      {
        id: 2,
        name: 'Staxtechh',
        issuer: 'Staxtech',
      
        image: staxCert,
    
      },
      {
        id: 3,
        name: 'Public Speaking',
        issuer: 'NPTEL',
        image: publicspeakingCert,
        description: 'Certified in Public Speaking course offered by NPTEL'
      },
      {
        id: 4,
        name: 'Introduction to Generative AI',
        issuer: 'Google',
  
        image: genAiCert,
        description: 'Generative AI '
      },
      {
        id: 5,
        name: 'Data Structures and Algorithms using Java',
        issuer: 'Infosys Springboard',
       
        image: infosysJavaCert,
        description: 'Completed the Infosys Springboard course on Data Structures and Algorithms using Java'
      },
      {
        id: 6,
        name: 'Foundations of Frontend Development',
        issuer: 'Oracad Academy',
    
        image: oracleCert,
        description: 'Certified in Oracle Frontend Development course'
      },
      {
        id: 7,
        name: 'principles of managment',
        issuer: 'NPTEL',
        image: nptelMsCert,
        description: 'Certified in  NPTEL'
      },
      {
        id: 8,
        name: 'Core Java',
        issuer: 'International Institute',

        image: javaInfoCert,
        description: 'Certified in Core Java programming'
      },
      {
        id: 9,
        name: 'Mastering Git for Efficient Version Control',
        issuer: 'PATIBANDA SARVANI',

        image: gitCert,
        description: 'Completed comprehensive Git version control course'
      }
    ],
    nonTechnical: [
      {
        id: 1,
        name: 'Communication Skills',
        issuer: 'Training Institute',
        date: '2025',
        image: nonTechCert1,
        description: 'Completed professional communication skills certification'
      },
      {
        id: 2,
        name: 'Leadership Development',
        issuer: 'Professional Academy',
        date: '2025',
        image: nonTechCert2,
        description: 'Certified in leadership and team management skills'
      }
    ]
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
        
        {/* Non-Technical Certificates */}
        <div className="category">
          <h3 className="category-title">Non-Technical Certifications</h3>
          <div className={`scroller-container ${isPaused ? 'paused' : ''}`}>
            <div className="scroller">
              {certificateData.nonTechnical.map((cert, index) => (
                <div 
                  key={`non-tech-${cert.id}-${index}`} 
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