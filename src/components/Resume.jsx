import React from "react";
import "./Resume.css";

function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "resume.pdf"; // must be in public folder
    link.download = "Raja_Asfand_Resume.pdf"; // file name on download
    link.click();
  };

  return (
    <div className="resume-container mt-5">
      {/* Left Column */}
      <div className="left-column">
        <h3 className="mb-3">Contact</h3>
        <p className="info-item">0349 8865526</p>
        <p className="info-item">r.asfand3249@gmail.com</p>
        <p className="info-item">Islamabad, Pakistan</p>
        <hr />

        <h3 className="mt-4 mb-3">Tools & Skills</h3>
        <p className="info-item">Prompting Tools</p>
        <p className="info-item">Canva</p>
        <p className="info-item">Figma</p>
        <p className="info-item">CapCut</p>
        <p className="info-item">VN</p>
        <p className="info-item">Blender (basics)</p>
        <hr />

        <h3 className="mt-4 mb-3">Education</h3>
        <p className="info-item">
          <strong>COMSATS University Islamabad</strong>
        </p>
        <p className="info-item">Bachelors in Software Engineering (2024–2028)</p>
        <p className="info-item">
          Python, C++, Java, HTML5, CSS, JavaScript, React, TypeScript, Bootstrap
        </p>
        <hr />

        <h3 className="mt-4 mb-3">Languages</h3>
        <p className="info-item">English (Fluent)</p>
        <p className="info-item">Urdu (Native)</p>
      </div>

      {/* Right Column */}
      <div className="right-column">
        <h2 className="mb-3">Raja Asfand Arif Khan</h2>
        <h5 className="text-muted mb-4">
          Frontend Developer | Graphic Designer | Video Editor
        </h5>

        <h4 className="section-title">Profile Summary</h4>
        <p>
          Creative and versatile Frontend Developer & Graphic Designer with
          hands-on experience in HTML5, CSS, JavaScript, React, TypeScript, and
          Canva. Skilled in crafting engaging visuals and responsive web
          interfaces that blend aesthetics with functionality. Passionate about
          continuous learning, freelancing, and collaborating on innovative
          projects that turn creative ideas into impactful digital experiences.
        </p>

        <h4 className="section-title mt-4">Certifications & Licenses</h4>
        <ul>
          <li>
            Certification: Canva Program held at CanvaFluxx in collaboration
            with Fluxxion and Google
          </li>
          <li>Recommendation Letter from Google Developers Group On Campus</li>
        </ul>

        <h4 className="section-title mt-4">Projects & Achievements</h4>
        <ul>
          <li>
            Developed{" "}
            <a
              href="https://asfand-raja.github.io/K-travel/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              K-Travel Website
            </a>
          </li>
          <li>Edited videos for farewell events and YouTube channels</li>
          <li>Completed four-week internship in Web Development at Pentium</li>
        </ul>

        <div className="container text-center mt-4">
          <button className="download-btn" onClick={handleDownload}>
            Download Resume (PDF)
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resume;
