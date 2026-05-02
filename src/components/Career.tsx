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
          
          {/* Experience 1: Education & Foundation */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Computer Science Student</h4>
                <h5>Diploma in CSE (4th Semester)</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Started my academic journey in Computer Science and Engineering. Built a strong foundation in programming, networking, and explored IoT projects using ESP32 and various microcontrollers.
            </p>
          </div>

          {/* Experience 2: Freelance & Projects */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Developer</h4>
                <h5>Freelance & Open Source</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed multiple dynamic projects, including an e-commerce platform (Texsa) and cross-platform mobile apps. Gained expertise in React, Tailwind CSS, Supabase, and ethical hacking fundamentals.
            </p>
          </div>

          {/* Experience 3: Current Role at Digontom */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Intern</h4>
                <h5>Digontom</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently working as an IT and Full-Stack Web Development intern. Responsible for building web interfaces, managing daily technical tasks, and contributing to the company's IT infrastructure and development cycle.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;