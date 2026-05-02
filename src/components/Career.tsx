import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          {/* Timeline Item 1: Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in CSE</h4>
                <h5>Brainware University</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Pursuing my Diploma in Computer Science and Engineering. Building a strong foundation in C++, Object-Oriented Programming (OOP), and core software engineering principles.
            </p>
          </div>

          {/* Timeline Item 2: Digontom Intern */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Intern</h4>
                <h5>Digontom</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Worked in an IT and full-stack web development role. Responsible for maintaining web interfaces, managing daily technical operations, and delivering robust IT solutions.
            </p>
          </div>

          {/* Timeline Item 3: Regit Code Founder */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder & Software Developer</h4>
                <h5>Regit Code</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Founded Regit Code to engineer high-performance, story-driven digital experiences. Leading frontend architecture using Next.js, React, and Framer Motion to create lightweight, fast, and innovative web products.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;