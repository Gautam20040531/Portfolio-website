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
          
          {/* Timeline Item 1: Diploma in CSE */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Pursuing Diploma in CSE</h4>
                <h5>N/A (Update your College Name if needed)</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Started my specialized journey in Computer Science and Engineering. Built a strong foundation in core software principles and networking, laying the groundwork for further development and security expertise.
            </p>
          </div>

          {/* Timeline Item 2: Projects & Development */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Development & Security</h4>
                <h5>Open Source & Freelance</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Focused on building multiple real-world applications (Texsa, Online Book Store, Shri Guru Electric Works) with full-stack capabilities, particularly React. Integrated security best practices from day one.
            </p>
          </div>

          {/* Timeline Item 3: Current Position at Digontom */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Intern</h4>
                <h5>Digontom</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently, I am working at Digontom company in IT and full-stack web development role. Responsible for maintaining, creating websites, managing daily technical operations and IT solutions.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;