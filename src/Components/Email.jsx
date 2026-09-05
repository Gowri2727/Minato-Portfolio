import { useRef } from "react";
import emailjs from "emailjs-com";
import contact from "../assets/contactme.jpg";
import "../Styles/Minato.css";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_7npe59y",
        "template_ky8n77f",
        formRef.current,
        "h5ap8oeruYNdGzTpv",
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert("Message was sent");
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
        },
      );
  };

  return (
    <div className="contact-wrapper fade-in">
      <div className="contact-left">
        <p className="contact-text mission-quote">
          Summon me with a message - whether it is a project, a collaboration, or just a chat,
          I am always ready to connect.
        </p>
      </div>

      <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
        <label className="name">Name</label>
        <input type="text" name="user_name" placeholder="Enter your name" required />

        <label className="email">Email</label>
        <input type="email" name="user_email" placeholder="Enter your email" required />

        <label className="message">Message</label>
        <textarea name="message" placeholder="Write your message here" required />

        <button className="contact-btn" type="submit">
          Send Message
        </button>
      </form>

      <div className="contact-right">
        <img src={contact} alt="Contact illustration" className="contact-image" loading="lazy" />
      </div>
    </div>
  );
};

export default Contact;
