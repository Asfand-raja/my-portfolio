import React, { useState } from "react";
import "./Certificates.css";

const certificates = [
  {
    title: "Fluxxion 4-Week Certificate",
    description: "Completed a 4-week intensive program at Fluxxion, demonstrating commitment to continuous learning and skill development.",
    file: "/certificates/4week fluxxion certificate.pdf",
    category: "Professional Development",
    icon: "fa-certificate",
  },
  {
    title: "AI for Business Professionals",
    description: "Certified in applying Artificial Intelligence strategies and tools to real-world business challenges and workflows.",
    file: "/certificates/AI for Business Professionals.pdf",
    category: "Artificial Intelligence",
    icon: "fa-robot",
  },
  {
    title: "Agile Project Management",
    description: "Completed training in Agile methodologies, covering sprint planning, Scrum frameworks, and iterative delivery.",
    file: "/certificates/Agile Project Management.pdf",
    category: "Professional Development",
    icon: "fa-diagram-project",
  },
  {
    title: "Customer Experience (CX) for Business Success",
    description: "Learned strategies to design and improve customer journeys, driving satisfaction and business growth.",
    file: "/certificates/Customer Experience (CX) for Business Success.pdf",
    category: "Professional Development",
    icon: "fa-users",
  },
  {
    title: "Canva Top Fellow",
    description: "Recognized as a Canva Top Fellow (FLX-F6-213) for excellence in graphic design and creative content creation.",
    file: "/certificates/FLX-F6-213 Canva top fellow .pdf",
    category: "Design",
    icon: "fa-palette",
  },
  {
    title: "AI Fluency Framework & Foundations",
    description: "Mastered the core frameworks and foundational concepts of AI fluency applicable across disciplines.",
    file: "/certificates/certificate-AI Fluency Framework and foundations.pdf",
    category: "Artificial Intelligence",
    icon: "fa-brain",
  },
  {
    title: "AI Fluency for Educators",
    description: "Completed training on integrating AI tools and concepts into educational environments effectively.",
    file: "/certificates/certificate-AI Fluency for educators.pdf",
    category: "Artificial Intelligence",
    icon: "fa-chalkboard-teacher",
  },
  {
    title: "AI Fluency for Students",
    description: "Certified in leveraging AI tools to enhance academic performance, research, and productivity as a student.",
    file: "/certificates/certificate-AI fluency for students.pdf",
    category: "Artificial Intelligence",
    icon: "fa-graduation-cap",
  },
  {
    title: "Claude 101",
    description: "Completed the introductory course on Anthropic's Claude AI, covering capabilities, use cases, and prompt engineering basics.",
    file: "/certificates/certificate-claude 101.pdf",
    category: "Artificial Intelligence",
    icon: "fa-microchip",
  },
  {
    title: "Claude Platform 101",
    description: "Certified in using the Claude API platform, including integration, model selection, and responsible deployment.",
    file: "/certificates/certificate-claude Platform 101.pdf",
    category: "Artificial Intelligence",
    icon: "fa-code",
  },
  {
    title: "Claude Code 101",
    description: "Completed training on using Claude for code generation, debugging, and software development assistance.",
    file: "/certificates/certificate-claude code 101.pdf",
    category: "Artificial Intelligence",
    icon: "fa-laptop-code",
  },
  {
    title: "Soft Skills",
    description: "Certified in essential soft skills including communication, teamwork, leadership, and professional conduct.",
    file: "/certificates/softskills certificate.pdf",
    category: "Professional Development",
    icon: "fa-handshake",
  },
  {
    title: "Web Development",
    description: "Earned a certificate in Web Development, covering HTML, CSS, JavaScript, and modern responsive design practices.",
    file: "/certificates/webdevelopment certificate.jpeg",
    category: "Development",
    icon: "fa-globe",
    isImage: true,
  },
];

const categories = ["Artificial Intelligence", "Development", "Design", "Professional Development"];

function Certificates() {
  const [previewFile, setPreviewFile] = useState(null);
  const [previewTitle, setPreviewTitle] = useState("");
  const [previewIsImage, setPreviewIsImage] = useState(false);

  const openPreview = (cert) => {
    setPreviewFile(cert.file);
    setPreviewTitle(cert.title);
    setPreviewIsImage(cert.isImage || false);
  };

  const closePreview = () => {
    setPreviewFile(null);
    setPreviewTitle("");
    setPreviewIsImage(false);
  };

  return (
    <div className="certificates-page py-5">
      <div className="container">
        <h2 className="text-center mb-2 cert-section-title">My Certificates</h2>
        <p className="text-center cert-subtitle mb-5">
          A collection of certifications earned through dedication and continuous learning.
        </p>

        {categories.map((category) => {
          const filtered = certificates.filter((c) => c.category === category);
          if (filtered.length === 0) return null;
          return (
            <div key={category} className="mb-5">
              <h3 className="cert-category-heading">{category}</h3>
              <div className="row">
                {filtered.map((cert, idx) => (
                  <div className="col-md-4 mb-4 d-flex" key={idx}>
                    <div className="card cert-card flex-fill">
                      <div className="cert-card-icon-wrap">
                        <i className={`fas ${cert.icon} cert-icon`}></i>
                      </div>
                      <div className="card-body cert-card-body">
                        <h5 className="cert-card-title">{cert.title}</h5>
                        <p className="cert-card-text">{cert.description}</p>
                        <div className="cert-card-actions">
                          <button
                            className="btn btn-cert-view"
                            onClick={() => openPreview(cert)}
                          >
                            <i className="fas fa-eye me-2"></i>View
                          </button>
                          <a
                            href={cert.file}
                            download
                            className="btn btn-cert-download"
                          >
                            <i className="fas fa-download me-2"></i>Download
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Preview Modal */}
      {previewFile && (
        <div className="cert-modal-overlay" onClick={closePreview}>
          <div
            className="cert-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cert-modal-header">
              <h5 className="cert-modal-title">{previewTitle}</h5>
              <button className="cert-modal-close" onClick={closePreview}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="cert-modal-body">
              {previewIsImage ? (
                <img
                  src={previewFile}
                  alt={previewTitle}
                  className="cert-preview-img"
                />
              ) : (
                <iframe
                  src={previewFile}
                  title={previewTitle}
                  className="cert-preview-iframe"
                />
              )}
            </div>
            <div className="cert-modal-footer">
              <a href={previewFile} download className="btn btn-cert-download">
                <i className="fas fa-download me-2"></i>Download Certificate
              </a>
              <button className="btn btn-cert-close-modal" onClick={closePreview}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificates;
