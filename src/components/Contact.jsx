import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_u60fgcv",
        "template_x1e4jfa",
        {
          first_name: form.firstName,
          last_name: form.lastName,
          email: form.email,
          message: form.message,
        },
        "k7uaWv7o6h2XtGO3N"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setForm({ firstName: "", lastName: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Try again!");
        }
      );
  };

  return (
    <section className="contact-section text-center mt-5">
      <div className="container">
        <h1 className="mb-4 fw-bold">Contact Me</h1>
        <p className="lead mb-4">
          Have a question or collaboration idea? Reach out using the form below.
        </p>

        <form
          className="contact-form mx-auto p-4 rounded shadow"
          onSubmit={sendEmail}
        >
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            className="form-control"
            rows="4"
            placeholder="Your Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="btn-primary send-btn">
            Send Message
          </button>
        </form>

        {/* Social Icons */}
        <div className="social-icons mt-4 d-flex justify-content-center gap-4">
          <a
            href="https://www.linkedin.com/in/raja-asfand-714026331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            href="https://www.instagram.com/_asfand_arts?igsh=MXhyN2lpZnFnZ3lsMw=="
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            href="https://wa.me/qr/HDG5HGTT6IXTD1"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp"
          >
            <i className="fab fa-whatsapp"></i>
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&to=r.asfand3249@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="gmail"
          >
            <i className="fas fa-envelope"></i>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Contact;
