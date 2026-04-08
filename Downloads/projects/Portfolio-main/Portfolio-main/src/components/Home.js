import React, { useRef, useEffect, useState } from 'react';
import './Home.css';
import profileImage from '../assets/teddy-profile-pic.jpeg';
import cvFile from '../assets/Patibanda-Sarvani-Resume.pdf';

function Home() {
  const profileRef = useRef(null);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Skip mouse effects on mobile

    const handleMouseMove = (e) => {
      if (!profileRef.current || !containerRef.current) return;
      
      const container = containerRef.current;
      const profile = profileRef.current;
      
      // Get container dimensions and position
      const containerRect = container.getBoundingClientRect();
      const containerCenterX = containerRect.left + containerRect.width / 2;
      const containerCenterY = containerRect.top + containerRect.height / 2;
      
      // Calculate mouse position relative to center
      const mouseX = e.clientX - containerCenterX;
      const mouseY = e.clientY - containerCenterY;
      
      // Calculate rotation angles (reduced for subtle effect)
      const rotateY = mouseX / 20;
      const rotateX = -mouseY / 20;
      
      // Apply rotation
      profile.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
      
      // Parallax effect for the decoration elements
      const decoration = profile.querySelector('.image-decoration');
      const border = profile.querySelector('.image-border');
      const loadingCircle = profile.querySelector('.loading-circle');
      
      if (decoration) decoration.style.transform = `translate(-50%, -50%) rotate(${rotateY * 2}deg)`;
      if (border) border.style.transform = `translate(-50%, -50%) scale(${1 + Math.abs(mouseY)/500})`;
      if (loadingCircle) loadingCircle.style.transform = `translate(-50%, -50%) rotate(${rotateX * 5}deg)`;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [isMobile]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className={`home-content ${isMobile ? 'mobile-view' : ''}`}>
          {isMobile && (
            <div className="image-content mobile-image" ref={containerRef}>
              <div className="profile-image-container" ref={profileRef}>
                <img src={profileImage} alt="Patibanda Sarvani" className="profile-image" />
                <div className="image-border"></div>
                <div className="image-decoration"></div>
                <div className="loading-circle"></div>
                <div className="particles">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="particle" style={{
                      '--i': i,
                      '--color': i % 2 === 0 ? '#87ceeb' : '#ff69b4'
                    }}></div>
                  ))}
                </div>
              </div>
            </div>
          )}
          <div className="text-content">
            <h1 className="greeting animated-text">Hello, I'm <span className="highlight">Patibanda Sarvani</span></h1>
            <h2 className="title animated-text">B.Tech CSE Student | Aspiring Full-Stack Developer</h2>
            <p className="description animated-text">
              Seeking a challenging role where I can apply my academic knowledge, programming skills, and problem-solving abilities to contribute effectively to organizational growth while continuously enhancing my technical expertise.
            </p>
            <div className="button-group">
              <button onClick={scrollToContact} className="secondary-btn">Contact Me</button>
              <a href={cvFile} download className="cv-download-btn">Download CV</a>
            </div>
            <div className="social-icons">
              <a href="https://github.com/patibandasarvani" target="_blank" rel="noopener noreferrer" className="social-icon-link neon-icon">
                <svg className="github-icon" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/sarvani-patibanda-61877a2b5" target="_blank" rel="noopener noreferrer" className="social-icon-link neon-icon">
                <svg className="linkedin-icon" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
                </svg>
              </a>
            </div>
          </div>
          {!isMobile && (
            <div className="image-content" ref={containerRef}>
              <div className="profile-image-container" ref={profileRef}>
                <img src={profileImage} alt="Patibanda Sarvani" className="profile-image" />
                <div className="image-border"></div>
                <div className="image-decoration"></div>
                <div className="loading-circle"></div>
                <div className="particles">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="particle" style={{
                      '--i': i,
                      '--color': i % 2 === 0 ? '#87ceeb' : '#ff69b4'
                    }}></div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Home;  
